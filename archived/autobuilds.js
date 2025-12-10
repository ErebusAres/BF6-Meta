(function () {
  const DEFAULT_CONFIG = {
    endpoint: null,
    cacheKey: 'bf6-autobuilds-cache-v1',
    updateIntervalMs: 24 * 60 * 60 * 1000, // daily refresh
    fetchOptions: {
      method: 'GET',
      headers: { Accept: 'application/json' }
    },
    maxPerType: 2,
    extractWeaponRecords(payload) {
      if (!payload) return [];
      if (Array.isArray(payload.weaponRankings)) return payload.weaponRankings;
      if (Array.isArray(payload.topWeapons)) return payload.topWeapons;
      if (Array.isArray(payload.data?.weapons)) return payload.data.weapons;
      if (Array.isArray(payload)) return payload;
      return [];
    },
    normalizeRecord(record) {
      if (!record) return null;
      const text = (value) => (typeof value === 'string' ? value.trim() : '');
      return {
        ...record,
        id: text(record.weaponId) || text(record.id) || text(record.dbname) || text(record.name) || '',
        type: text(record.weaponType) || text(record.type) || text(record.category) || text(record.class) || '',
        usageRank: Number(record.globalRank ?? record.usageRank ?? record.rank ?? record.rating ?? Number.NaN),
        typeRank: Number(record.typeRank ?? record.typePosition ?? record.rankInClass ?? Number.NaN),
        attachments: record.attachments || record.masteryAttachments || record.unlocks || null
      };
    },
    rankMapper(record, globalIndex, total) {
      if (!Number.isFinite(globalIndex) || !Number.isFinite(total) || total <= 0) return '';
      const percentile = (globalIndex - 1) / Math.max(total - 1, 1);
      if (percentile <= 0.1) return 'm';
      if (percentile <= 0.35) return 'a';
      if (percentile <= 0.7) return 'b';
      return 'c';
    },
    typeRating(record, typeIndex) {
      if (Number.isFinite(record.typeRank)) {
        return String(record.typeRank);
      }
      if (Number.isFinite(typeIndex)) {
        return String(typeIndex + 1);
      }
      return '';
    }
  };

  const config = {
    ...DEFAULT_CONFIG,
    ...(typeof window !== 'undefined' && window.autoBuildsConfig ? window.autoBuildsConfig : {})
  };

  const state = {
    data: null,
    records: [],
    lastFetched: null,
    error: null
  };

  const supportsStorage = (() => {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return false;
      const key = '__bf6_autobuilds_test';
      localStorage.setItem(key, key);
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  })();

  function readCache() {
    if (!supportsStorage) return null;
    try {
      const json = localStorage.getItem(config.cacheKey);
      const parsed = json ? JSON.parse(json) : null;
      if (!parsed || !parsed.payload) return null;
      return parsed;
    } catch (error) {
      console.warn('Unable to read autobuilds cache', error);
      return null;
    }
  }

  function writeCache(payload) {
    if (!supportsStorage) return;
    try {
      const record = {
        fetchedAt: Date.now(),
        payload
      };
      localStorage.setItem(config.cacheKey, JSON.stringify(record));
    } catch (error) {
      console.warn('Unable to write autobuilds cache', error);
    }
  }

  function normalizeType(value) {
    if (!value) return '';
    return value.toString().trim().toLowerCase();
  }

  function convertQuery(value) {
    if (!value) return '';
    if (value instanceof URLSearchParams) {
      return value;
    }
    if (typeof value === 'object') {
      const params = new URLSearchParams();
      Object.entries(value).forEach(([key, paramValue]) => {
        if (paramValue == null) return;
        if (Array.isArray(paramValue)) {
          paramValue.forEach((item) => params.append(key, item));
        } else {
          params.set(key, String(paramValue));
        }
      });
      return params;
    }
    return new URLSearchParams(value.toString());
  }

  function getRequestUrl() {
    if (!config.endpoint) return null;
    try {
      const url = new URL(config.endpoint, typeof window !== 'undefined' ? window.location.origin : undefined);
      if (typeof config.buildQuery === 'function') {
        const query = convertQuery(config.buildQuery());
        if (query && query.toString()) {
          url.search = query.toString();
        }
      }
      return url;
    } catch (error) {
      console.warn('Invalid autobuilds endpoint', error);
      return null;
    }
  }

  function normalizeRecords(payload) {
    const raw = typeof config.extractWeaponRecords === 'function' ? config.extractWeaponRecords(payload) : [];
    if (!Array.isArray(raw)) return [];
    const list = [];
    for (const item of raw) {
      const normalized = config.normalizeRecord ? config.normalizeRecord(item) : item;
      if (normalized && normalized.id) {
        list.push(normalized);
      }
    }
    return list;
  }

  function updateState(payload, options = {}) {
    const records = normalizeRecords(payload);
    state.data = payload;
    state.records = records;
    state.lastFetched = Number.isFinite(options.fetchedAt) ? options.fetchedAt : Date.now();
    dispatchUpdate(options.source || (options.fromCache ? 'cache' : 'refresh'));
  }

  function dispatchUpdate(source) {
    if (typeof window === 'undefined') return;
    try {
      const event = new CustomEvent('autobuilds:updated', {
        detail: {
          data: state.data,
          records: state.records,
          source
        }
      });
      window.dispatchEvent(event);
    } catch (error) {
      console.warn('autobuilds: failed to dispatch update event', error);
    }
  }

  async function fetchRemoteData() {
    const url = getRequestUrl();
    if (!url) return null;
    const response = await fetch(url, config.fetchOptions);
    if (!response.ok) {
      const message = `autobuilds fetch failed: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }
    return response.json();
  }

  async function refresh(force = false) {
    const now = Date.now();
    const cache = readCache();
    if (cache && !force) {
      const age = now - cache.fetchedAt;
      if (age < config.updateIntervalMs) {
        updateState(cache.payload, { fromCache: true, fetchedAt: cache.fetchedAt });
        return state.data;
      }
    }

    try {
      const payload = await fetchRemoteData();
      if (payload) {
        updateState(payload, { source: 'remote' });
        writeCache(payload);
      }
    } catch (error) {
      state.error = error;
      console.warn('autobuilds refresh failed', error);
      if (cache) {
        updateState(cache.payload, { fromCache: true, fetchedAt: cache.fetchedAt });
      }
    }
    return state.data;
  }

  function ensureTypeMap(records) {
    const map = new Map();
    records.forEach((record) => {
      const typeKey = normalizeType(record.type);
      if (!typeKey) return;
      const list = map.get(typeKey) || [];
      list.push(record);
      map.set(typeKey, list);
    });
    for (const [key, entries] of map.entries()) {
      entries.sort((a, b) => {
        const aOrder = Number.isFinite(a.typeRank) ? a.typeRank : Number(a.usageRank) || Number.MAX_SAFE_INTEGER;
        const bOrder = Number.isFinite(b.typeRank) ? b.typeRank : Number(b.usageRank) || Number.MAX_SAFE_INTEGER;
        return aOrder - bOrder;
      });
      if (Number.isFinite(config.maxPerType)) {
        map.set(key, entries.slice(0, config.maxPerType));
      }
    }
    return map;
  }

  function determineGlobalOrdering(records) {
    const sorted = [...records].sort((a, b) => {
      const aOrder = Number.isFinite(a.usageRank) ? a.usageRank : Number.MAX_SAFE_INTEGER;
      const bOrder = Number.isFinite(b.usageRank) ? b.usageRank : Number.MAX_SAFE_INTEGER;
      return aOrder - bOrder;
    });
    return sorted;
  }

  function applyToWeaponConfigs(configs) {
    if (!Array.isArray(configs) || !state.records.length) return configs;
    const typeMap = ensureTypeMap(state.records);
    const globalOrder = determineGlobalOrdering(state.records);

    configs.forEach((weapon) => {
      const typeKey = normalizeType(weapon.dbname || weapon.displayType || weapon.config?.type || weapon.config?.displayType);
      const bucket = typeMap.get(typeKey);
      if (!bucket || !bucket.length) return;
      const record =
        bucket.find(
          (item) =>
            item.id === (weapon.id || '').trim() ||
            item.id.toLowerCase() === (weapon.id || '').toLowerCase() ||
            item.id.toLowerCase() === (weapon.dbname || '').toLowerCase()
        ) || bucket[0];
      if (!record) return;
      const globalIndex = globalOrder.findIndex((item) => item === record);
      const mappedRank =
        typeof config.rankMapper === 'function'
          ? config.rankMapper(record, globalIndex + 1, globalOrder.length)
          : '';
      if (mappedRank) {
        weapon.rank = mappedRank;
      }
      const typeIndex = bucket.indexOf(record);
      const rating = typeof config.typeRating === 'function' ? config.typeRating(record, typeIndex, bucket.length) : '';
      if (rating) {
        weapon.tr = rating;
      }
      if (record.attachments) {
        weapon.autoAttachments = record.attachments;
      }
    });

    return configs;
  }

  const ready = (async () => {
    const cache = readCache();
    if (cache) {
      updateState(cache.payload, { fromCache: true, fetchedAt: cache.fetchedAt });
    }
    if (config.endpoint) {
      await refresh();
    }
    dispatchUpdate('ready');
  })();

  const exposed = {
    config,
    state,
    refresh,
    ready,
    applyToWeaponConfigs,
    getNormalizedRecords() {
      return state.records.slice();
    }
  };

  if (typeof window !== 'undefined') {
    Object.defineProperty(window, 'autoBuilds', {
      configurable: true,
      enumerable: true,
      writable: false,
      value: exposed
    });
  }
})();
