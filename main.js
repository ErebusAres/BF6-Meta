(async () => {
  const dataRootUrl = new URL('./data/', document.baseURI);
  const showFatalError = (message) => {
    console.error(message);
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '12px';
    container.style.right = '12px';
    container.style.padding = '10px 12px';
    container.style.background = 'rgba(255, 59, 59, 0.14)';
    container.style.color = '#fff';
    container.style.border = '1px solid rgba(255, 59, 59, 0.45)';
    container.style.font = '14px/1.4 var(--font-body, Arial, sans-serif)';
    container.style.zIndex = '9999';
    container.textContent = message;
    document.body.appendChild(container);
  };

  const loadJson = async (file) => {
    const url = new URL(file, dataRootUrl);
    try {
      const res = await fetch(url.toString(), { cache: 'no-cache', mode: 'same-origin' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (fetchErr) {
      // Fallback for file:// or environments blocking fetch on local files.
      if (url.protocol === 'file:') {
        try {
          const xhr = new XMLHttpRequest();
          const text = await new Promise((resolve, reject) => {
            xhr.overrideMimeType('application/json');
            xhr.open('GET', url.toString(), true);
            xhr.onreadystatechange = () => {
              if (xhr.readyState === 4) {
                if (xhr.status === 0 && xhr.responseText) {
                  resolve(xhr.responseText);
                } else if (xhr.status >= 200 && xhr.status < 300) {
                  resolve(xhr.responseText);
                } else {
                  reject(new Error(`XHR status ${xhr.status}`));
                }
              }
            };
            xhr.onerror = () => reject(new Error('XHR error'));
            xhr.send();
          });
          return JSON.parse(text);
        } catch (xhrErr) {
          console.error(`Failed to load ${file} via XHR fallback`, xhrErr);
        }
      }
      throw fetchErr;
    }
  };

  let metadata = {}, attachments = {}, ranking = [], buildsMastery = {}, buildsMain = [];
  try {
    [metadata, attachments, ranking, buildsMastery, buildsMain] = await Promise.all([
      loadJson('metadata.json'),
      loadJson('attachments.json'),
      loadJson('ranking.json'),
      loadJson('builds-mastery.json'),
      loadJson('builds-main.json')
    ]);
  } catch (error) {
    showFatalError('Failed to load data files. If running from file://, please use a local server.');
    console.error('Failed to load data files', error);
    return;
  }

  const mergedWeaponDatabase = {};
  for (const [name, meta] of Object.entries(metadata || {})) {
    const attachEntry =
      (attachments && (attachments[name] || attachments[name?.toUpperCase?.()] || attachments[name?.toLowerCase?.()])) || {};
    mergedWeaponDatabase[name] = { ...(meta || {}) };
    if (attachEntry && attachEntry.attachments) {
      mergedWeaponDatabase[name].attachments = attachEntry.attachments;
    }
  }

  window.weaponDatabase = mergedWeaponDatabase;
  window.MANUAL_RANKING_GROUPS = ranking || [];
  window.weapon_baseline = (buildsMastery && (buildsMastery.weapon_baseline || buildsMastery.baseline)) || {};
  window.weapon_changes = (buildsMastery && (buildsMastery.weapon_changes || buildsMastery.changes)) || {};
  window.weaponConfigs = Array.isArray(buildsMain) ? buildsMain : [];
  const weaponConfigs = window.weaponConfigs;
const AP_ICON = 'https://static.wikia.nocookie.net/battlefield/images/0/06/Battlefield_6_Attachment_Point_Icon.png';
    const DEFAULT_BUILD_UPDATED_AT = '11/23/2025';
    const DEFAULT_BASELINE_CHANGES_UPDATED_AT = '11/18/2025';
    const INDENT = 36;
    const CARD_PAD = 12;
    const ARROW_STROKE = 3;
    const TOOLTIP_VIEWPORT_PADDING = 24;
    let tooltipLayerEl = null;
    const SEASON_HARDWARE_ASSIGNMENTS = {
      'season 1 hardware 1': {
        id: 'S1H1',
        label: 'Season 1 Hardware 1',
        criteria: ['Deal 3000 damage beyond 75m', 'Get 35 headshot kills']
      },
      'season 1 hardware 2': {
        id: 'S1H2',
        label: 'Season 1 Hardware 2',
        criteria: ['Complete S1H1', 'Suppress 10 enemies with LMGs', 'Deal 1500 damage in a match']
      },
      'season 1 hardware 3': {
        id: 'S1H3',
        label: 'Season 1 Hardware 3',
        criteria: ['Complete S1H2', 'Get 30 kills with the GGH-22 or M44', 'Get 5 headshot kills with pistols']
      },
      'season 1 hardware 4': {
        id: 'S1H4',
        label: 'Season 1 Hardware 4',
        criteria: ['Complete S1H3', 'Deal 1500 hipfire damage', 'Get 50 close quarter kills (<15m)']
      }
    };

    function getSeasonHardwareAssignment(value) {
      if (!value) return null;
      const normalized = String(value)
        .toLowerCase()
        .replace(/\bassignment\b/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      return normalized && SEASON_HARDWARE_ASSIGNMENTS[normalized] ? SEASON_HARDWARE_ASSIGNMENTS[normalized] : null;
    }

    function clampNumber(value, min, max) {
      if (!Number.isFinite(value)) return min;
      return Math.min(Math.max(value, min), max);
    }

    function normalizeUpdatedAt(value) {
      if (value === undefined || value === null) return null;
      const text = String(value).trim();
      return text || null;
    }

    function isUpdatedMarker(entry) {
      if (!entry || typeof entry !== 'object') return null;
      const value = entry.Updated || entry.updated || entry.updatedAt;
      return normalizeUpdatedAt(value);
    }

    function resolveBuildUpdatedAt(config, buildId, sourceKey) {
      if (!config || typeof config !== 'object') return DEFAULT_BUILD_UPDATED_AT;
      const defaultValue =
        normalizeUpdatedAt(config.lastUpdated || config.updatedAt) || DEFAULT_BUILD_UPDATED_AT;
      const rawMap = config.buildUpdated || config.updatedByBuild || config.buildUpdatedAt;
      const map = rawMap && typeof rawMap === 'object' ? rawMap : null;
      const normalizedId = (buildId || '').toString().toLowerCase();
      const normalizedSource = (sourceKey || '').toString().toLowerCase();
      if (map) {
        for (const [key, value] of Object.entries(map)) {
          if (!key) continue;
          const matchKey = key.toString().toLowerCase();
          if (matchKey === normalizedId || matchKey === normalizedSource) {
            const resolved = normalizeUpdatedAt(value);
            if (resolved) return resolved;
          }
        }
      }
      return defaultValue;
    }

    function ensureTooltipLayer() {
      if (tooltipLayerEl && tooltipLayerEl.isConnected) return tooltipLayerEl;
      tooltipLayerEl = document.createElement('div');
      tooltipLayerEl.className = 'tooltip-layer';
      document.body.appendChild(tooltipLayerEl);
      return tooltipLayerEl;
    }

    function attachFloatingTooltip(target, tooltip) {
      if (!target || !tooltip || target.dataset.tooltipInteractionsBound === 'true') return;
      const layer = ensureTooltipLayer();
      layer.appendChild(tooltip);
      const card = target.closest('.weapon-card');
      const slotCard = target.closest('.slot-card');
      let active = false;

      const updatePosition = () => {
        if (!active || !target.isConnected || !tooltip.isConnected) return;
        const rect = target.getBoundingClientRect();
        const viewportWidth = Math.max(
          window.innerWidth || 0,
          document.documentElement.clientWidth || 0
        );
        const minX = TOOLTIP_VIEWPORT_PADDING;
        const maxX = Math.max(minX, viewportWidth - TOOLTIP_VIEWPORT_PADDING);
        const clampedX = clampNumber(rect.left + rect.width / 2, minX, maxX);
        tooltip.style.left = `${clampedX}px`;
        tooltip.style.top = `${rect.top}px`;
      };

      const show = () => {
        if (active) {
          updatePosition();
          return;
        }
        active = true;
        tooltip.classList.add('tooltip-visible');
        if (card) card.classList.add('tooltip-active');
        if (slotCard) slotCard.classList.add('tooltip-active');
        updatePosition();
        window.addEventListener('scroll', updatePosition, true);
        window.addEventListener('resize', updatePosition);
      };

      const hide = () => {
        if (!active) return;
        active = false;
        tooltip.classList.remove('tooltip-visible');
        if (card) card.classList.remove('tooltip-active');
        if (slotCard) slotCard.classList.remove('tooltip-active');
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };

      target.addEventListener('pointerenter', show);
      target.addEventListener('mouseenter', show);
      target.addEventListener('focus', show);
      target.addEventListener('pointerleave', hide);
      target.addEventListener('mouseleave', hide);
      target.addEventListener('blur', hide);
      target.dataset.tooltipInteractionsBound = 'true';
    }


    document.documentElement.style.setProperty('--indent', `${INDENT}px`);
    document.documentElement.style.setProperty('--card-padding', `${CARD_PAD}px`);

    const toUpperSafe = (value) => (typeof value === 'string' ? value.toUpperCase() : value);
    function formatTypeKey(value) {
      return typeof value === 'string' ? value.trim().toUpperCase() : '';
    }

    const TYPE_ORDER = [
      'ASSAULT RIFLE',
      'CARBINE',
      'DMR',
      'LMG',
      'SMG',
      'SHOTGUN',
      'SNIPER',
      'SECONDARY',
      'PISTOL',
      'LAUNCHER'
    ];
    const TYPE_INDEX = TYPE_ORDER.reduce((map, type, index) => {
      map[type] = index;
      return map;
    }, {});

    const attachmentDatabase =
      typeof window !== 'undefined' && window.weaponDatabase && typeof window.weaponDatabase === 'object'
        ? window.weaponDatabase
        : {};
    const typeFilterList =
      typeof document !== 'undefined' ? document.getElementById('typeFilterList') : null;
    const TYPE_FILTER_KEY = 'bf6-meta-type-filter';
    const FAVORITES_FILTER = 'FAVORITES';
    const ACTIVE_TAB_STORAGE_KEY = 'bf6-meta-active-tab';
    let currentTypeFilter = formatTypeKey(loadTypeFilter());
    const activeTabMap = loadActiveTabs();

    const normalizeDbKey = (value) => (typeof value === 'string' ? value.trim().toUpperCase() : '');

    function getWeaponDb(dbName) {
      if (!dbName || typeof dbName !== 'string') return null;
      const trimmed = dbName.trim();
      if (!trimmed) return null;
      return (
        attachmentDatabase[trimmed] ||
        attachmentDatabase[normalizeDbKey(trimmed)] ||
        attachmentDatabase[trimmed.toLowerCase()] ||
        null
      );
    }

    const attachmentIndexCache = new WeakMap();

    function getAttachmentIndex(attachments) {
      if (!attachments || typeof attachments !== 'object') return null;
      let cache = attachmentIndexCache.get(attachments);
      if (cache) return cache;
      cache = new Map();
      for (const [name, data] of Object.entries(attachments)) {
        const normalized = normalizeDbKey(name);
        if (!normalized || cache.has(normalized)) continue;
        cache.set(normalized, data);
      }
      attachmentIndexCache.set(attachments, cache);
      return cache;
    }

    function resolveAttachmentFromDb(dbName, attachmentName) {
      if (!dbName || !attachmentName) return null;
      const db = getWeaponDb(dbName);
      if (!db || typeof db !== 'object') return null;
      const attachments = db.attachments || {};
      const key = normalizeDbKey(attachmentName);
      let raw = null;
      if (key) {
        const index = getAttachmentIndex(attachments);
        if (index && index.has(key)) {
          raw = index.get(key);
        } else if (attachments[key]) {
          raw = attachments[key];
        }
      }
      if (!raw && typeof attachmentName === 'string' && attachments[attachmentName]) {
        raw = attachments[attachmentName];
      }
      if (!raw) return null;
      const copy = { ...raw };
      if (!copy.name) {
        copy.name = key || attachmentName;
      }
      return copy;
    }

    function normalizeReplaced(replaced, dbName) {
      if (!replaced) return [];
      const array = Array.isArray(replaced) ? replaced : [replaced];
      return array
        .map((entry) => {
          if (typeof entry === 'string') {
            const lookup = resolveAttachmentFromDb(dbName, entry);
            const normalized = lookup ? { ...lookup } : { name: entry };
            if (normalized.name) normalized.name = toUpperSafe(normalized.name);
            if (normalized.type) normalized.type = toUpperSafe(normalized.type);
            return normalized;
          }
          if (entry && typeof entry === 'object') {
            const lookup = entry.name ? resolveAttachmentFromDb(dbName, entry.name) : null;
            const normalized = { ...(lookup || {}), ...entry };
            if (normalized.name) normalized.name = toUpperSafe(normalized.name);
            if (normalized.type) normalized.type = toUpperSafe(normalized.type);
            return normalized;
          }
          return null;
        })
        .filter(Boolean);
    }

    function normalizeEntry(payload, unlockLevel, dbName) {
      if (payload == null) return null;
      const isString = typeof payload === 'string';
      if (!isString && typeof payload !== 'object') return null;
      const baseName = isString
        ? payload
        : typeof payload.name === 'string'
        ? payload.name
        : null;
      const lookup = baseName ? resolveAttachmentFromDb(dbName, baseName) : null;
      const source = lookup ? { ...lookup } : {};
      const overrides = isString ? { name: payload } : { ...payload };
      const entry = { ...source, ...overrides };
      if (!entry.name && baseName) {
        entry.name = baseName;
      }
      if (unlockLevel !== undefined) {
        entry.unlockLevel = unlockLevel;
      } else if (entry.unlockLevel === undefined && source.unlockLevel !== undefined) {
        entry.unlockLevel = source.unlockLevel;
      }
      if (entry.name) entry.name = toUpperSafe(entry.name);
      if (entry.type) entry.type = toUpperSafe(entry.type);
      if (entry.replaced) {
        entry.replaced = normalizeReplaced(entry.replaced, dbName);
      }
      return entry;
    }

    const SLOT_KEY_BY_TYPE = {
      BARREL: '1',
      UNDERBARREL: '2',
      AMMUNITION: '3',
      MUZZLE: '4',
      'RIGHT ACCESSORY': '5',
      MAGAZINE: '6',
      SCOPE: '7',
      'LEFT ACCESSORY': '8',
      'TOP ACCESSORY': '9',
      'OPTIC ACCESSORY': '10',
      ERGONOMICS: '11'
    };

    function getTypeFromPayload(payload, dbName) {
      if (payload && typeof payload === 'object' && typeof payload.type === 'string') {
        return payload.type;
      }
      const baseName =
        typeof payload === 'string'
          ? payload
        : payload && typeof payload.name === 'string'
          ? payload.name
          : payload && typeof payload.remove === 'string'
          ? payload.remove
          : null;
      if (!baseName || !dbName) return null;
      const lookup = resolveAttachmentFromDb(dbName, baseName);
      return lookup && lookup.type ? lookup.type : null;
    }

    function normalizeSlotKeyFromPayload(payload, dbName) {
      if (payload && typeof payload === 'object') {
        if (payload.slot !== undefined && payload.slot !== null) return String(payload.slot);
        if (payload.slotKey !== undefined && payload.slotKey !== null) return String(payload.slotKey);
        if (payload.slotName) return String(payload.slotName);
      }
      const type = getTypeFromPayload(payload, dbName);
      if (!type) return null;
      const normalized = type.toString().trim().toUpperCase();
      return SLOT_KEY_BY_TYPE[normalized] || normalized;
    }

    function sanitizePayloadForStorage(payload) {
      if (!payload || typeof payload !== 'object') return payload;
      const copy = { ...payload };
      delete copy.slot;
      delete copy.slotKey;
      delete copy.slotName;
      delete copy.slotId;
      delete copy.remove;
      delete copy.removed;
      delete copy.action;
      return copy;
    }

    function isRemovalPayload(payload) {
      if (!payload || typeof payload !== 'object') return false;
      if (payload.remove === true || payload.removed === true) return true;
      if (typeof payload.remove === 'string' && payload.remove.trim()) return true;
      if (typeof payload.action === 'string' && payload.action.trim().toLowerCase() === 'remove') {
        return true;
      }
      return false;
    }

    function normalizeBaselineConfig(raw, dbName) {
      if (!raw) return {};
      if (Array.isArray(raw)) {
        const map = {};
        for (const entry of raw) {
          if (entry == null) continue;
          const slotKey = normalizeSlotKeyFromPayload(entry, dbName);
          if (!slotKey) continue;
          map[slotKey] = sanitizePayloadForStorage(entry);
        }
        return map;
      }
      return typeof raw === 'object' ? raw : {};
    }

    function normalizeChangesConfig(raw, dbName) {
      if (!raw || typeof raw !== 'object') return raw || {};
      const normalized = {};
      const updatedByLevel = {};
      for (const [level, definition] of Object.entries(raw)) {
        if (Array.isArray(definition)) {
          const map = {};
          for (const entry of definition) {
            if (entry == null) continue;
            const updatedMarker = isUpdatedMarker(entry);
            if (updatedMarker) {
              updatedByLevel[level] = updatedMarker;
              continue;
            }
            const slotKey = normalizeSlotKeyFromPayload(entry, dbName);
            if (!slotKey) continue;
            if (isRemovalPayload(entry)) {
              map[slotKey] = null;
            } else {
              map[slotKey] = sanitizePayloadForStorage(entry);
            }
          }
          normalized[level] = map;
        } else {
          normalized[level] = definition;
        }
      }
      normalized.__updatedByLevel = updatedByLevel;
      return normalized;
    }

    const storage = (() => {
      const KEY = 'bf6-meta-state-v2';
      const store = typeof window !== 'undefined' && window.localStorage ? window.localStorage : null;
      let data = { weapons: {}, order: [] };

      function safeGet(key) {
        if (!store) return null;
        try {
          return store.getItem(key);
        } catch (error) {
          console.warn('Unable to read persisted state from localStorage', error);
          return null;
        }
      }

      function safeSet(key, value) {
        if (!store) return;
        try {
          store.setItem(key, value);
        } catch (error) {
          console.warn('Unable to save persisted state to localStorage', error);
        }
      }

      function safeRemove(key) {
        if (!store) return;
        try {
          store.removeItem(key);
        } catch (error) {
          console.warn('Unable to clear invalid persisted state in localStorage', error);
        }
      }

      const raw = safeGet(KEY);
      const sanitized = typeof raw === 'string' ? raw.trim() : '';
      if (sanitized && (sanitized.startsWith('{') || sanitized.startsWith('['))) {
        try {
          const parsed = JSON.parse(sanitized);
          if (parsed && typeof parsed === 'object') {
            data = {
              weapons: parsed.weapons && typeof parsed.weapons === 'object' ? parsed.weapons : {},
              order: Array.isArray(parsed.order) ? parsed.order : []
            };
          }
        } catch (error) {
          safeRemove(KEY);
          console.warn('Ignoring invalid persisted state in localStorage', error);
        }
      }

      function save() {
        safeSet(KEY, JSON.stringify(data));
      }

      function ensureWeapon(id) {
        if (!data.weapons[id]) {
          data.weapons[id] = {};
          save();
        }
      }

      return {
        getWeaponState(id) {
          ensureWeapon(id);
          return { ...data.weapons[id] };
        },
        updateWeaponState(id, patch) {
          ensureWeapon(id);
          data.weapons[id] = { ...data.weapons[id], ...patch };
          save();
        },
        getOrder() {
          return Array.isArray(data.order) ? [...data.order] : [];
        },
        setOrder(order) {
          if (!Array.isArray(order)) return;
          data.order = [...order];
          save();
        }
      };
    })();

    let currentDraggedId = null;
    let cardDropPlaceholder = null;
    let navDropPlaceholder = null;
    let dragActive = false;

    function getCardDropPlaceholder() {
      if (!cardDropPlaceholder) {
        cardDropPlaceholder = document.createElement('div');
        cardDropPlaceholder.className = 'weapon-drop-placeholder';
        cardDropPlaceholder.setAttribute('aria-hidden', 'true');
        cardDropPlaceholder.textContent = 'Drop weapon here';
      }
      return cardDropPlaceholder;
    }

    function clearCardDropPlaceholder() {
      if (cardDropPlaceholder && cardDropPlaceholder.parentNode) {
        cardDropPlaceholder.parentNode.removeChild(cardDropPlaceholder);
      }
    }

    function getNavDropPlaceholder() {
      if (!navDropPlaceholder) {
        navDropPlaceholder = document.createElement('li');
        navDropPlaceholder.className = 'side-nav-item nav-drop-placeholder';
        navDropPlaceholder.setAttribute('aria-hidden', 'true');
        navDropPlaceholder.textContent = 'Drop weapon here';
        navDropPlaceholder.draggable = false;
      }
      return navDropPlaceholder;
    }

    function clearNavDropPlaceholder() {
      if (navDropPlaceholder && navDropPlaceholder.parentNode) {
        navDropPlaceholder.parentNode.removeChild(navDropPlaceholder);
      }
    }

    function setDragActiveState(active) {
      if (dragActive === active) return;
      dragActive = active;
      document.body.classList.toggle('drag-active', active);
    }

    function enableNavDrag(item) {
      if (!item) return;
      item.setAttribute('draggable', 'true');
      item.addEventListener('dragstart', handleNavItemDragStart);
      item.addEventListener('dragend', handleNavItemDragEnd);
    }

    function handleNavItemDragStart(event) {
      const item = event.currentTarget;
      if (!item) return;
      const id = item.dataset.weaponId;
      if (!id) return;
      currentDraggedId = id;
      setDragActiveState(true);
      item.classList.add('dragging');
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = 'move';
        try {
          event.dataTransfer.setData('text/plain', id);
        } catch (_) {}
      }
    }

    function handleNavItemDragEnd(event) {
      const item = event && event.currentTarget;
      if (item) item.classList.remove('dragging');
      clearNavDropPlaceholder();
      clearCardDropPlaceholder();
      currentDraggedId = null;
      setDragActiveState(false);
    }

    const chipFlameEffects = new Set();

    function resizeActiveChipFlames() {
      chipFlameEffects.forEach((effect) => effect.resize());
    }

    function updateChipFlameReducedMotion() {
      const disabled = document.documentElement.classList.contains('reduce-animations');
      chipFlameEffects.forEach((effect) => effect.handleReducedMotion(disabled));
    }

    class ChipFlameEffect {
      constructor(chipEl) {
        this.chipEl = chipEl;
        this.wrapEl = chipEl ? chipEl.closest('.chip-flame-wrap') : null;
        this.canvasEl = this.wrapEl ? this.wrapEl.querySelector('.chip-flame-canvas') : null;
        this.ctx = this.canvasEl ? this.canvasEl.getContext('2d') : null;
        this.isValid = Boolean(this.wrapEl && this.canvasEl && this.ctx);
        if (!this.isValid) return;
        this.visible = false;
        this.reducedMotion = document.documentElement.classList.contains('reduce-animations');
        this.particles = [];
        this.pool = [];
        this.maxParticles = 90;
        this.emissionRate = 58;
        this.emissionCarry = 0;
        this.hoverBoost = 1;
        this.running = false;
        this.frameId = null;
        this.pendingResize = true;
        this.dpr = window.devicePixelRatio || 1;
        this.spread = 0;
        this.handlePointerEnter = () => {
          this.hoverBoost = 1.2;
        };
        this.handlePointerLeave = () => {
          this.hoverBoost = 1;
        };
        this.chipEl.addEventListener('pointerenter', this.handlePointerEnter);
        this.chipEl.addEventListener('pointerleave', this.handlePointerLeave);
        chipFlameEffects.add(this);
      }

      setDisplayed(displayed) {
        if (!this.isValid) return;
        this.visible = displayed;
        if (!displayed || this.reducedMotion) {
          this.stop();
          if (this.wrapEl) this.wrapEl.classList.remove('has-flame');
          return;
        }
        if (this.wrapEl) this.wrapEl.classList.add('has-flame');
        this.resize();
        this.start();
      }

      handleReducedMotion(disabled) {
        this.reducedMotion = disabled;
        if (disabled) {
          this.stop();
          if (this.wrapEl) this.wrapEl.classList.remove('has-flame');
        } else if (this.visible) {
          if (this.wrapEl) this.wrapEl.classList.add('has-flame');
          this.resize();
          this.start();
        }
      }

      resize() {
        if (!this.isValid) return;
        if (!this.visible || this.reducedMotion || !this.chipEl.isConnected) {
          this.pendingResize = true;
          return;
        }
        const rect = this.chipEl.getBoundingClientRect();
        if (!rect.width || !rect.height) {
          this.pendingResize = true;
          return;
        }
        const width = rect.width + 26;
        const height = rect.height * 1.6;
        this.canvasEl.style.width = `${width}px`;
        this.canvasEl.style.height = `${height}px`;
        this.dpr = window.devicePixelRatio || 1;
        this.canvasEl.width = Math.max(1, Math.round(width * this.dpr));
        this.canvasEl.height = Math.max(1, Math.round(height * this.dpr));
        this.originX = this.canvasEl.width / 2;
        this.originY = this.canvasEl.height - Math.max(this.canvasEl.height * 0.18, 10 * this.dpr);
        this.spread = Math.max(10, rect.width * 0.25) * this.dpr;
        this.pendingResize = false;
      }

      start() {
        if (!this.isValid || this.running || !this.visible || this.reducedMotion) return;
        if (this.pendingResize) this.resize();
        if (this.pendingResize) return;
        this.running = true;
        this.emissionCarry = 0;
        this.lastTime = performance.now();
        const loop = (time) => {
          if (!this.running) return;
          if (!this.visible || this.reducedMotion || !this.chipEl.isConnected) {
            this.stop();
            return;
          }
          const delta = Math.min(time - this.lastTime, 64);
          this.lastTime = time;
          this.step(delta / 1000);
          this.frameId = requestAnimationFrame(loop);
        };
        this.frameCallback = loop;
        this.frameId = requestAnimationFrame(loop);
      }

      step(dt) {
        this.emit(dt);
        this.updateParticles(dt);
        this.draw();
      }

      emit(dt) {
        this.emissionCarry += this.emissionRate * dt * this.hoverBoost;
        let count = Math.floor(this.emissionCarry);
        this.emissionCarry -= count;
        while (count-- > 0 && this.particles.length < this.maxParticles) {
          this.spawnParticle();
        }
      }

      spawnParticle() {
        const particle = this.pool.pop() || {};
        particle.x = this.originX + (Math.random() - 0.5) * this.spread * 1.4;
        particle.y = this.originY + Math.random() * 4 * this.dpr;
        particle.vx = (Math.random() - 0.5) * 26 * this.dpr;
        particle.vy = -(48 + Math.random() * 60) * this.dpr;
        particle.size = (5 + Math.random() * 7) * this.dpr;
        particle.life = 0.55 + Math.random() * 0.4;
        particle.age = 0;
        particle.alpha = 1;
        this.particles.push(particle);
      }

      updateParticles(dt) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
          const particle = this.particles[i];
          particle.age += dt;
          if (particle.age >= particle.life) {
            this.pool.push(particle);
            this.particles.splice(i, 1);
            continue;
          }
          const t = particle.age / particle.life;
          particle.x += particle.vx * dt;
          particle.y += particle.vy * dt;
          particle.vx *= 0.97;
          particle.size += dt * 10 * this.dpr;
          particle.alpha = 1 - t;
        }
      }

      draw() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        if (!this.particles.length) return;
        this.ctx.globalCompositeOperation = 'lighter';
        for (const particle of this.particles) {
          const alpha = particle.alpha;
          const gradient = this.ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size);
          gradient.addColorStop(0, `rgba(255,255,255,${0.75 * alpha})`);
          gradient.addColorStop(0.35, `rgba(255,200,80,${0.55 * alpha})`);
          gradient.addColorStop(0.7, `rgba(255,90,0,${0.32 * alpha})`);
          gradient.addColorStop(1, 'rgba(0,0,0,0)');
          this.ctx.fillStyle = gradient;
          this.ctx.beginPath();
          this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          this.ctx.fill();
        }
        this.ctx.globalCompositeOperation = 'source-over';
      }

      stop() {
        if (this.frameId) {
          cancelAnimationFrame(this.frameId);
          this.frameId = null;
        }
        this.running = false;
        this.emissionCarry = 0;
        this.particles.length = 0;
        if (this.ctx) {
          this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        }
      }

      destroy() {
        if (!this.isValid) return;
        this.stop();
        if (this.wrapEl) this.wrapEl.classList.remove('has-flame');
        this.visible = false;
        this.chipEl.removeEventListener('pointerenter', this.handlePointerEnter);
        this.chipEl.removeEventListener('pointerleave', this.handlePointerLeave);
        chipFlameEffects.delete(this);
        this.isValid = false;
      }
    }

    class WeaponTracker {
      constructor(config) {
        this.config = config;
        this.id = config.id;
        this.minLevel = Number.isFinite(config.minLevel) ? config.minLevel : 1;
        this.dbname =
          typeof config.dbname === 'string' && config.dbname.trim()
            ? config.dbname.trim()
            : null;
        this.dbEntry = this.dbname ? getWeaponDb(this.dbname) : null;
        const meta = this.dbEntry && typeof this.dbEntry === 'object' ? this.dbEntry : null;
        const configName = typeof config.name === 'string' ? config.name.trim() : '';
        const configType = typeof config.type === 'string' ? config.type.trim() : '';
        const configImage = typeof config.image === 'string' ? config.image.trim() : '';
        const metaName = meta && typeof meta.name === 'string' ? meta.name.trim() : '';
        const metaType = meta && typeof meta.type === 'string' ? meta.type.trim() : '';
        const metaImage = meta && typeof meta.image === 'string' ? meta.image.trim() : '';
        const metaMaxLevel = meta && Number.isFinite(meta.maxLevel) ? meta.maxLevel : null;
        const metaApMax = meta && Number.isFinite(meta.apMax) ? meta.apMax : null;
        this.displayName = configName || metaName || this.id;
        this.displayType = configType || metaType || '';
        this.displayImage = configImage || metaImage || '';
        this.typeKey = formatTypeKey(this.displayType || '');
        const trCode = (config.tr || '').toString().trim();
        const trValue = parseInt(trCode, 10);
        this.typeRatingValue = Number.isFinite(trValue) ? trValue : Number.MAX_SAFE_INTEGER;
        this.maxLevel = Number.isFinite(config.maxLevel)
          ? config.maxLevel
          : Number.isFinite(metaMaxLevel)
          ? metaMaxLevel
          : 40;
        this.apMax = Number.isFinite(config.apMax)
          ? config.apMax
          : Number.isFinite(metaApMax)
          ? metaApMax
          : 100;
        this.slotLabels = { ...(config.slotLabels || {}) };
        for (const key of Object.keys(this.slotLabels)) {
        this.slotLabels[key] = toUpperSafe(this.slotLabels[key]);
      }
        const hasBaselineConfig = Boolean(config.baseline);
        const hasChangesConfig = Boolean(config.changes);
        this.baseline = normalizeBaselineConfig(config.baseline, this.dbname);
        this.changes = normalizeChangesConfig(config.changes, this.dbname);
        this.changeUpdatedByLevel =
          (this.changes && this.changes.__updatedByLevel) || {};
        if (this.changes && this.changes.__updatedByLevel) {
          delete this.changes.__updatedByLevel;
        }
        this.baselineUpdated = normalizeUpdatedAt(config.baselineUpdated);
        if (!this.baselineUpdated && hasBaselineConfig) {
          this.baselineUpdated = DEFAULT_BASELINE_CHANGES_UPDATED_AT;
        }
        this.changesUpdated = normalizeUpdatedAt(config.changesUpdated);
        if (!this.changesUpdated && hasChangesConfig) {
          this.changesUpdated = DEFAULT_BASELINE_CHANGES_UPDATED_AT;
        }
        this.slotKeys = this.buildSlotKeys();
        this.updatedFallback = resolveBuildUpdatedAt(config, null, null);
        this.activeBuildUpdatedAt = this.updatedFallback;
        this.buildDefinitions = this.resolveBuildDefinitions();
        this.buildById = this.buildDefinitions.reduce((map, build) => {
          map[build.id] = build;
          return map;
        }, {});
        this.activeBuildId = this.buildDefinitions.length ? this.buildDefinitions[0].id : null;
        const savedTab = activeTabMap[this.id];
        if (savedTab && this.buildById[savedTab]) {
          this.activeBuildId = savedTab;
        }
        this.activeBuildNote = null;
        this.activeBuildApStats = null;

        const saved = storage.getWeaponState(this.id);
        const defaultLevel = Number.isFinite(config.initialLevel) ? config.initialLevel : this.minLevel;
        this.state = {
          level: this.clampLevel(Number.isFinite(saved.level) ? saved.level : defaultLevel),
          collapsed: Boolean(saved.collapsed),
          favorite: Boolean(saved.favorite)
        };

        this.arrowLayerEl = document.createElement('div');
        this.arrowLayerEl.className = 'arrow-layer';
        this.rankFlameEffect = null;
        this.isDisplayed = false;
      }

      resolveSlotType(payload) {
        if (!payload) return undefined;
        if (typeof payload === 'string') {
          const match = resolveAttachmentFromDb(this.dbname, payload);
          return match && match.type ? match.type : undefined;
        }
        if (payload.type) return payload.type;
        if (payload.name) {
          const match = resolveAttachmentFromDb(this.dbname, payload.name);
          if (match && match.type) return match.type;
        }
        return undefined;
      }

      buildSlotKeys() {
        const manualOrder = Array.isArray(this.config.slotOrder) ? this.config.slotOrder.map((slot) => String(slot)) : [];
        const manualIndex = new Map();
        manualOrder.forEach((slot, idx) => manualIndex.set(String(slot), idx));
        const firstSeen = new Map();
        let serial = 0;

        const recordSlot = (slot, label, levelHint, opts = {}) => {
          if (slot === undefined || slot === null) return;
          const key = String(slot);
          if (label && !this.slotLabels[key]) {
            this.slotLabels[key] = toUpperSafe(label);
          }
          const normalizedLevel = Number.isFinite(levelHint)
            ? levelHint
            : opts.manual
            ? Number.NEGATIVE_INFINITY
            : Number.POSITIVE_INFINITY;
          const existing = firstSeen.get(key);
          if (!existing) {
            firstSeen.set(key, { level: normalizedLevel, index: serial++ });
          } else if (normalizedLevel < existing.level) {
            existing.level = normalizedLevel;
          }
        };

        manualOrder.forEach((slot) => {
          recordSlot(slot, this.slotLabels[String(slot)] || null, Number.NEGATIVE_INFINITY, { manual: true });
        });

        for (const [slot, data] of Object.entries(this.baseline || {})) {
          if (data == null) continue;
          const unlockLevel =
            data && typeof data === 'object' && Number.isFinite(data.unlockLevel) ? data.unlockLevel : this.minLevel;
          recordSlot(slot, this.resolveSlotType(data), unlockLevel);
        }

        const sortedLevels = Object.keys(this.changes || {})
          .map((value) => Number(value))
          .filter((value) => Number.isFinite(value))
          .sort((a, b) => a - b);

        for (const level of sortedLevels) {
          const changeSet = this.changes[level];
          if (!changeSet || typeof changeSet !== 'object') continue;
          for (const [slot, payload] of Object.entries(changeSet)) {
            if (payload === undefined || payload === null) {
              recordSlot(slot, null, level);
              continue;
            }
            const unlockLevel =
              payload && typeof payload === 'object' && Number.isFinite(payload.unlockLevel) ? payload.unlockLevel : level;
            recordSlot(slot, this.resolveSlotType(payload), unlockLevel);
          }
        }

        const entries = Array.from(firstSeen.entries());
        const big = Number.POSITIVE_INFINITY;
        entries.sort((a, b) => {
          const aKey = a[0];
          const bKey = b[0];
          const aManual = manualIndex.has(aKey);
          const bManual = manualIndex.has(bKey);
          if (aManual && bManual) {
            return manualIndex.get(aKey) - manualIndex.get(bKey);
          }
          if (aManual) return -1;
          if (bManual) return 1;
          const aLevel = Number.isFinite(a[1].level) ? a[1].level : big;
          const bLevel = Number.isFinite(b[1].level) ? b[1].level : big;
          if (aLevel !== bLevel) return aLevel - bLevel;
          return a[1].index - b[1].index;
        });

        return entries.map(([key]) => key);
      }

      getSlotLabel(slotKey) {
        const label = this.slotLabels[String(slotKey)];
        if (typeof label === 'string') return label;
        const snapshot = this.baseline[slotKey];
        if (snapshot) {
          if (snapshot.type) return toUpperSafe(snapshot.type);
          if (typeof snapshot === 'string') {
            const lookup = resolveAttachmentFromDb(this.dbname, snapshot);
            if (lookup && lookup.type) return toUpperSafe(lookup.type);
          } else if (snapshot.name) {
            const lookup = resolveAttachmentFromDb(this.dbname, snapshot.name);
            if (lookup && lookup.type) return toUpperSafe(lookup.type);
          }
        }
        return `SLOT ${slotKey}`;
      }

      applyRankFlameEffect(isMeta) {
        if (!this.rankChipEl) return;
        if (isMeta) {
          if (!this.rankFlameEffect) {
            this.rankFlameEffect = new ChipFlameEffect(this.rankChipEl);
          }
          if (this.rankFlameEffect) {
            this.rankFlameEffect.setDisplayed(this.isDisplayed);
          }
        } else if (this.rankFlameEffect) {
          this.rankFlameEffect.destroy();
          this.rankFlameEffect = null;
        }
      }

      setDisplayed(displayed) {
        this.isDisplayed = Boolean(displayed);
        if (this.rankFlameEffect) {
          this.rankFlameEffect.setDisplayed(this.isDisplayed);
        }
      }

      clampLevel(level) {
        const value = Math.round(level);
        return Math.max(this.minLevel, Math.min(this.maxLevel, value));
      }

  mount(template) {
    const fragment = template.content.cloneNode(true);
    this.cardEl = fragment.querySelector('.weapon-card');
    this.cardEl.dataset.weaponId = this.id;

        this.headerEl = this.cardEl.querySelector('.weapon-header');
        this.headerTextEl = this.cardEl.querySelector('.weapon-header-text');
        this.chevronBtn = this.cardEl.querySelector('.chevron-toggle');
        this.headerLevelEl = this.cardEl.querySelector('.header-level');
        this.dragHandleBtn = this.cardEl.querySelector('.drag-handle');
        this.favoriteBtn = this.cardEl.querySelector('.favorite-toggle');
        this.collapseBoxBtn = this.cardEl.querySelector('.collapse-box');
        this.favoriteIcon = this.favoriteBtn ? this.favoriteBtn.querySelector('span[aria-hidden="true"]') : null;
        this.favoriteText = this.favoriteBtn ? this.favoriteBtn.querySelector('.favorite-text') : null;
        this.collapseBtn = this.cardEl.querySelector('.collapse-toggle');
        this.weaponNameEl = this.cardEl.querySelector('.weapon-name');
        this.weaponTypeEl = this.cardEl.querySelector('.weapon-subtitle');
        this.typeChipEl = this.cardEl.querySelector('.type-chip');
        this.rankChipEl = this.cardEl.querySelector('.rank-chip');
        this.rangeChipEl = this.cardEl.querySelector('.range-chip');
        this.weaponImageWrapEl = this.cardEl.querySelector('.weapon-image-wrap');
        this.weaponImageEl = this.cardEl.querySelector('.weapon-image');
        this.weaponImagePhEl = this.cardEl.querySelector('.weapon-image-ph');
        this.levelPillEl = this.cardEl.querySelector('.level-pill');
        this.levelDisplayEl = this.cardEl.querySelector('.level-display');
        this.progressBarEl = this.cardEl.querySelector('.level-slider');
        this.levelDownBtn = this.cardEl.querySelector('.level-down');
        this.levelUpBtn = this.cardEl.querySelector('.level-up');
        this.apMeterEl = this.cardEl.querySelector('.ap-meter');
        this.apValueEl = this.cardEl.querySelector('.ap-value');
        this.apMaxEl = this.cardEl.querySelector('.ap-max');
        this.slotsEl = this.cardEl.querySelector('.slots');
        this.changesPanelEl = this.cardEl.querySelector('.changes-panel');
        this.recommendedPanelEl = this.cardEl.querySelector('.recommended-panel');
        this.recommendedListEl = this.cardEl.querySelector('.recommended-list');
        // Mini AP meter inside Recommended panel
        this.recommendedApMeterEl = this.recommendedPanelEl ? this.recommendedPanelEl.querySelector('.ap-meter') : null;
        this.recommendedApValueEl = this.recommendedPanelEl ? this.recommendedPanelEl.querySelector('.ap-value') : null;
        this.recommendedApMaxEl = this.recommendedPanelEl ? this.recommendedPanelEl.querySelector('.ap-max') : null;
        this.buildTabsEl = this.cardEl.querySelector('.build-tabs');
        this.buildTabListEl = this.cardEl.querySelector('.build-tablist');
        this.buildTabButtons = [];
        this.setupBuildTabs();

        if (this.weaponNameEl) this.weaponNameEl.textContent = toUpperSafe(this.displayName || this.id);
        if (this.weaponTypeEl) this.weaponTypeEl.textContent = toUpperSafe(this.displayType || 'Mastery Loadout Progression');
        if (this.typeChipEl) {
          const typeLabel = toUpperSafe(this.displayType || 'Type Not Found');
          this.typeChipEl.textContent = typeLabel;
        }
        if (this.rankChipEl) {
          const r = (this.config.rank || '').toString().trim().toLowerCase();
          const labelMap = { s: 'META', m: 'META', a: 'A TIER', b: 'B TIER', c: 'C TIER', d: 'D TIER', f: 'F TIER' };
          const classMap = {
            s: 'tier-s',
            m: 'tier-meta',
            a: 'tier-a',
            b: 'tier-b',
            c: 'tier-c',
            d: 'tier-d',
            f: 'tier-f'
          };
          const label = labelMap[r] || 'UNRANKED';
          this.rankChipEl.textContent = label;
          this.rankChipEl.classList.remove('tier-s','tier-meta','tier-a','tier-b','tier-c','tier-d','tier-f');
          const tierClass = classMap[r] || 'tier-f';
          this.rankChipEl.classList.add('chip', tierClass);
          this.applyRankFlameEffect(r === 's');
        }
        if (this.rangeChipEl) {
          const code = (this.config.tr || '').toString().trim().toUpperCase();
          const num = parseInt(code, 10);
          const typeLabel = toUpperSafe(this.displayType || 'TYPE');
          if (Number.isFinite(num) && num >= 1 && typeLabel) {
            const cssIndex = Math.min(4, num);
            this.rangeChipEl.textContent = '#' + num + ' ' + typeLabel;
            this.rangeChipEl.classList.remove('range-1','range-2','range-3','range-4','range-unranked');
            this.rangeChipEl.classList.add('range-' + cssIndex);
          } else {
            this.rangeChipEl.textContent = 'UNRANKED';
            this.rangeChipEl.classList.remove('range-1','range-2','range-3','range-4');
            this.rangeChipEl.classList.add('range-unranked');
          }
          if (!this.rangeChipEl.textContent || !this.rangeChipEl.textContent.trim()) {
            this.rangeChipEl.textContent = 'UNRANKED';
            this.rangeChipEl.classList.add('range-unranked');
          }
        }
        if (this.weaponImageWrapEl && this.weaponImageEl) {
          const imgName = this.displayImage;
          if (imgName) {
            const nameOrId = toUpperSafe(this.displayName || this.id);
            const hasPath = /[\\/]/.test(imgName) || /^(https?:)?\/\//i.test(imgName);
            const primary = hasPath ? imgName : `style/images/${imgName}`;
            const alternate = hasPath ? imgName : `Images/${imgName}`;
            let triedAlt = false;

            this.weaponImageWrapEl.classList.remove('placeholder');
            this.weaponImageEl.alt = nameOrId;
            const onError = () => {
              if (!triedAlt && alternate !== primary) {
                triedAlt = true;
                this.weaponImageEl.src = alternate;
              } else {
                this.weaponImageEl.removeEventListener('error', onError);
                this.weaponImageEl.removeAttribute('src');
                this.weaponImageWrapEl.classList.add('placeholder');
                this.weaponImageEl.alt = '';
              }
            };
            this.weaponImageEl.addEventListener('error', onError);
            this.weaponImageEl.addEventListener('load', () => {
              // On success, ensure placeholder is hidden and stop error fallback
              this.weaponImageWrapEl.classList.remove('placeholder');
              this.weaponImageEl.removeEventListener('error', onError);
            }, { once: true });
            this.weaponImageEl.src = primary;
          } else {
            this.weaponImageWrapEl.classList.add('placeholder');
            this.weaponImageEl.removeAttribute('src');
            this.weaponImageEl.alt = '';
          }
        }
        if (this.apMaxEl) this.apMaxEl.textContent = `/${this.apMax}`;

        if (this.progressBarEl) {
          this.progressBarEl.setAttribute('min', String(this.minLevel));
          this.progressBarEl.setAttribute('max', String(this.maxLevel));
          this.progressBarEl.setAttribute('step', '1');
          this.progressBarEl.setAttribute('aria-valuemin', String(this.minLevel));
          this.progressBarEl.setAttribute('aria-valuemax', String(this.maxLevel));
          this.progressBarEl.setAttribute('draggable', 'false');
        }

        if (this.levelDownBtn) this.levelDownBtn.addEventListener('click', () => this.setLevel(this.state.level - 1));
        if (this.levelUpBtn) this.levelUpBtn.addEventListener('click', () => this.setLevel(this.state.level + 1));
        if (this.progressBarEl) {
          const stopPropagation = (event) => {
            event.stopPropagation();
          };
          const disableHeaderDrag = () => {
            if (this.headerEl) this.headerEl.setAttribute('draggable', 'false');
          };
          const enableHeaderDrag = () => {
            if (this.headerEl) this.headerEl.setAttribute('draggable', 'true');
          };
          const pointerDownHandler = (event) => {
            stopPropagation(event);
            disableHeaderDrag();
          };
          this.progressBarEl.addEventListener('pointerdown', pointerDownHandler);
          this.progressBarEl.addEventListener('mousedown', pointerDownHandler);
          this.progressBarEl.addEventListener('touchstart', pointerDownHandler, { passive: true });
          ['pointerup', 'pointerleave', 'pointercancel', 'touchend', 'touchcancel', 'keyup', 'blur'].forEach((type) => {
            this.progressBarEl.addEventListener(type, enableHeaderDrag);
          });
          this.progressBarEl.addEventListener('dragstart', (event) => event.preventDefault());
          this.progressBarEl.addEventListener('input', (event) => {
            const target = event.currentTarget;
            if (!(target instanceof HTMLInputElement)) return;
            const raw = Number(target.value);
            if (!Number.isFinite(raw)) return;
            this.setLevel(raw);
          });
        }
        if (this.weaponImageWrapEl) {
          // Prevent drag-to-reorder from the image area
          this.weaponImageWrapEl.setAttribute('draggable', 'false');
          this.weaponImageWrapEl.addEventListener('dragstart', (e) => { e.preventDefault(); });
          this.weaponImageWrapEl.addEventListener('pointerdown', (e) => { e.stopPropagation(); });
        }
        const controlStack = this.cardEl.querySelector('.control-stack');
        if (controlStack) {
          controlStack.setAttribute('draggable', 'false');
          controlStack.addEventListener('dragstart', (e) => { e.preventDefault(); });
          controlStack.addEventListener('pointerdown', (e) => { e.stopPropagation(); });
        }
        if (this.favoriteBtn) this.favoriteBtn.addEventListener('click', () => this.toggleFavorite());
        if (this.collapseBtn) this.collapseBtn.addEventListener('click', () => this.toggleCollapse());
        if (this.collapseBoxBtn) this.collapseBoxBtn.addEventListener('click', () => this.toggleCollapse());

        // Title block and chevron toggle collapse
        if (this.headerTextEl) {
          this.headerTextEl.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.closest && target.closest('.header-controls')) return;
            this.toggleCollapse();
          });
          this.headerTextEl.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              this.toggleCollapse();
            }
          });
        }
        if (this.chevronBtn) {
          this.chevronBtn.addEventListener('click', () => this.toggleCollapse());
        }

        if (this.dragHandleBtn) {
          this.dragHandleBtn.addEventListener('dragstart', (event) => this.handleDragStart(event));
          this.dragHandleBtn.addEventListener('dragend', () => this.handleDragEnd());
          // Remove legacy drag handle from DOM to slim header
          if (this.dragHandleBtn.parentElement) {
            this.dragHandleBtn.parentElement.removeChild(this.dragHandleBtn);
          }
        }
        if (this.headerEl) {
          this.headerEl.setAttribute('draggable', 'true');
          this.headerEl.addEventListener('dragstart', (event) => this.handleDragStart(event));
          this.headerEl.addEventListener('dragend', () => this.handleDragEnd());
        }

        this.cardEl.addEventListener('keydown', (event) => {
          const step = event.shiftKey ? 5 : 1;
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            this.setLevel(this.state.level - step);
          } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            this.setLevel(this.state.level + step);
          } else if (event.key === 'Home') {
            event.preventDefault();
            this.setLevel(this.minLevel);
          } else if (event.key === 'End') {
            event.preventDefault();
            this.setLevel(this.maxLevel);
          }
        });

        this.applyFavoriteUI();
        this.applyCollapseState();
        if (this.progressBarEl) this.updateProgressUI(this.state.level);
        // Ensure recommended panel starts hidden unless data populates it.
        if (this.recommendedPanelEl) this.recommendedPanelEl.hidden = true;
        this.render();

        this.cardEl.remove();
      }
      attach(container) {
        if (!this.cardEl) return;
        container.appendChild(this.cardEl);
      }

      isFavorite() {
        return Boolean(this.state.favorite);
      }

      handleDragStart(event) {
        // Do not start reordering when dragging from interactive header controls or image
        if (event && event.target && event.target.closest && (event.target.closest('.header-controls') || event.target.closest('.weapon-image') || event.target.closest('.weapon-image-wrap') || event.target.closest('.control-stack') || event.target.closest('.collapse-box') || event.target.closest('.favorite-toggle'))) {
          event.preventDefault();
          return;
        }
        if (currentDraggedId && currentDraggedId !== this.id) {
          event.preventDefault();
          return;
        }
        currentDraggedId = this.id;
        setDragActiveState(true);
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', this.id);
        this.cardEl.classList.add('dragging');
      }

      handleDragEnd() {
        this.cardEl.classList.remove('dragging');
        clearCardDropPlaceholder();
        clearNavDropPlaceholder();
        currentDraggedId = null;
        setDragActiveState(false);
      }

      toggleFavorite() {
        this.state.favorite = !this.state.favorite;
        storage.updateWeaponState(this.id, { favorite: this.state.favorite });
        this.applyFavoriteUI();
        renderWeaponList();
      }

                  applyFavoriteUI() {
        if (this.cardEl) this.cardEl.classList.toggle('favorite', this.state.favorite);
        if (this.favoriteBtn) this.favoriteBtn.setAttribute('aria-pressed', this.state.favorite ? 'true' : 'false');
        if (this.favoriteIcon) {
          this.favoriteIcon.textContent = this.state.favorite ? '\u2605' : '\u2606';
        }
        if (this.favoriteText) {
          this.favoriteText.textContent = this.state.favorite ? 'Favorited' : 'Favorite';
        }
        if (this.favoriteBtn) {
          this.favoriteBtn.title = this.state.favorite ? 'Unfavorite' : 'Favorite';
        }
      }

      toggleCollapse() {
        this.state.collapsed = !this.state.collapsed;
        storage.updateWeaponState(this.id, { collapsed: this.state.collapsed });
        this.applyCollapseState();
        if (!this.state.collapsed) {
          this.render();
        }
      }

      applyCollapseState() {
        if (this.cardEl) this.cardEl.classList.toggle('collapsed', this.state.collapsed);
        if (this.collapseBtn) {
          this.collapseBtn.setAttribute('aria-expanded', this.state.collapsed ? 'false' : 'true');
          this.collapseBtn.textContent = this.state.collapsed ? 'Show' : 'Hide';
        }
        if (this.chevronBtn) this.chevronBtn.setAttribute('aria-expanded', this.state.collapsed ? 'false' : 'true');
        if (this.collapseBoxBtn) {
          this.collapseBoxBtn.textContent = this.state.collapsed ? '\u25B8' : '\u25BE';
          this.collapseBoxBtn.setAttribute('aria-expanded', this.state.collapsed ? 'false' : 'true');
        }
        if (this.headerTextEl) this.headerTextEl.setAttribute('aria-expanded', this.state.collapsed ? 'false' : 'true');
      }

      setLevel(level) {
        const next = this.clampLevel(level);
        if (next === this.state.level) return;
        this.state.level = next;
        storage.updateWeaponState(this.id, { level: next });
        this.render();
      }

      updateProgressUI(level) {
        if (!this.progressBarEl) return;
        this.progressBarEl.value = String(level);
        this.progressBarEl.setAttribute('aria-valuenow', String(level));
        const denominator = Math.max(1, this.maxLevel - this.minLevel);
        const percent = denominator === 0 ? 0 : ((level - this.minLevel) / denominator) * 100;
        this.progressBarEl.style.setProperty('--level-slider-fill', `${percent}%`);
      }
      ensureApMeterCells() {
        if (!this.apMeterEl || this.apMeterEl.children.length) return;
        const cellCount = Math.max(1, Math.round(this.apMax / 10));
        const frag = document.createDocumentFragment();
        for (let i = 0; i < cellCount; i++) {
          const cell = document.createElement('span');
          cell.className = 'ap-cell';
          const iconWrapper = document.createElement('span');
          iconWrapper.className = 'ap-icon';

          const icon = document.createElement('img');
          icon.src = AP_ICON;
          icon.alt = 'Attachment Points';
          iconWrapper.appendChild(icon);

          const firstFill = document.createElement('span');
          firstFill.className = 'ap-fill first';
          iconWrapper.appendChild(firstFill);

          const secondFill = document.createElement('span');
          secondFill.className = 'ap-fill second';
          iconWrapper.appendChild(secondFill);

          cell.appendChild(iconWrapper);
          frag.appendChild(cell);
        }
        this.apMeterEl.appendChild(frag);
      }

      updateApMeter(total, overcap = false) {
        this.ensureApMeterCells();
        if (this.apMeterEl) {
          this.apMeterEl.classList.toggle('ap-overcap', overcap);
        }
        if (!this.apMeterEl) return;
        const cells = Array.from(this.apMeterEl.children);
        if (!cells.length) return;
        if (this.apMax <= 0) {
          cells.forEach((cell) => cell.classList.remove('half', 'full'));
          return;
        }
        const cappedTotal = Math.max(0, Math.min(total, this.apMax));
        const perCell = this.apMax / cells.length;
        cells.forEach((cell, index) => {
          const cellMin = perCell * index;
          const cellMax = cellMin + perCell;
          const amountInCell = Math.max(0, Math.min(cappedTotal, cellMax) - cellMin);
          const halfThreshold = perCell / 2;
          const isFull = amountInCell >= perCell - 0.01;
          const isHalf = !isFull && amountInCell >= halfThreshold - 0.01;
          cell.classList.remove('half', 'full');
          if (isFull) {
            cell.classList.add('full');
          } else if (isHalf) {
            cell.classList.add('half');
          }
        });
      }

      // Helpers to drive an AP meter for a specific element (used by Recommended panel)
      ensureApMeterCellsFor(meterEl) {
        if (!meterEl || meterEl.children.length) return;
        const cellCount = Math.max(1, Math.round(this.apMax / 10));
        const frag = document.createDocumentFragment();
        for (let i = 0; i < cellCount; i++) {
          const cell = document.createElement('span');
          cell.className = 'ap-cell';
          const iconWrapper = document.createElement('span');
          iconWrapper.className = 'ap-icon';
          const icon = document.createElement('img');
          icon.src = AP_ICON;
          icon.alt = 'Attachment Points';
          iconWrapper.appendChild(icon);
          const firstFill = document.createElement('span');
          firstFill.className = 'ap-fill first';
          iconWrapper.appendChild(firstFill);
          const secondFill = document.createElement('span');
          secondFill.className = 'ap-fill second';
          iconWrapper.appendChild(secondFill);
          cell.appendChild(iconWrapper);
          frag.appendChild(cell);
        }
        meterEl.appendChild(frag);
      }

      updateApMeterFor(meterEl, total, overcap = false) {
        if (!meterEl) return;
        this.ensureApMeterCellsFor(meterEl);
        meterEl.classList.toggle('ap-overcap', overcap);
        const cells = Array.from(meterEl.children);
        if (!cells.length) return;
        const max = this.apMax;
        if (max <= 0) {
          cells.forEach((cell) => cell.classList.remove('half', 'full'));
          return;
        }
        const cappedTotal = Math.max(0, Math.min(total, max));
        const perCell = max / cells.length;
        cells.forEach((cell, index) => {
          const cellMin = perCell * index;
          const cellMax = cellMin + perCell;
          const amountInCell = Math.max(0, Math.min(cappedTotal, cellMax) - cellMin);
          const halfThreshold = perCell / 2;
          const isFull = amountInCell >= perCell - 0.01;
          const isHalf = !isFull && amountInCell >= halfThreshold - 0.01;
          cell.classList.remove('half', 'full');
          if (isFull) cell.classList.add('full');
          else if (isHalf) cell.classList.add('half');
        });
      }

      createApDisplay(value) {
        if (!Number.isFinite(value)) return null;
        const wrapper = document.createElement('span');
        wrapper.className = 'ap-inline';
        const icon = document.createElement('img');
        icon.src = AP_ICON;
        icon.alt = 'Attachment Points';
        wrapper.appendChild(icon);
        const text = document.createElement('span');
        text.textContent = `${value}`;
        wrapper.appendChild(text);
        return wrapper;
      }

      createCard(data, options = {}) {
        if (!data) return null;
        const card = document.createElement('div');
        card.className = 'slot-card';
        if (options.old) card.classList.add('old');
        if (options.changed) card.classList.add('changed');
        if (options.indented) card.classList.add('indented');
        if (options.removed) card.classList.add('removed');

        const top = document.createElement('div');
        top.className = 'card-top';

        const info = document.createElement('div');
        info.className = 'card-info';

        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = toUpperSafe(data.name);
        info.appendChild(title);

        const meta = document.createElement('div');
        meta.className = 'card-meta';
        const type = document.createElement('span');
        type.className = 'meta-type';
        type.textContent = toUpperSafe(data.type || 'ATTACHMENT');
        meta.appendChild(type);

        if (typeof data.pts === 'number') {
          const separator = document.createElement('span');
          separator.className = 'meta-separator';
          separator.textContent = '\u2022';
          meta.appendChild(separator);

          const pts = this.createApDisplay(data.pts);
          if (pts) {
            pts.classList.add('meta-pts');
            meta.appendChild(pts);
          }
        }

        info.appendChild(meta);
        top.appendChild(info);

        const levelBadge = document.createElement('div');
        levelBadge.className = 'card-level';
        const displayLevelRaw = options.level ?? data.unlockLevel;
        const displayLevel =
          typeof displayLevelRaw === 'string' ? displayLevelRaw.trim() : displayLevelRaw;
        const matchesSeasonHardware =
          typeof displayLevel === 'string' && /season\s+\d+\s+hardware\s+\d+/i.test(displayLevel);
        const assignmentDetails = matchesSeasonHardware ? getSeasonHardwareAssignment(displayLevel) : null;
        const isDefaultLevel =
          displayLevel === 0 ||
          displayLevel === '0' ||
          (typeof displayLevel === 'number' && Number.isFinite(displayLevel) && displayLevel === 0);
        if (options.hideLevel) {
          levelBadge.textContent = 'Unlocked';
        } else if (isDefaultLevel) {
          levelBadge.textContent = 'Default';
        } else if (assignmentDetails) {
          const displayText =
            typeof displayLevel === 'string' && displayLevel !== ''
              ? displayLevel
              : assignmentDetails.label;
          levelBadge.textContent = displayText;
          this.applyAssignmentTooltip(levelBadge, assignmentDetails);
        } else if (matchesSeasonHardware && typeof displayLevel === 'string') {
          levelBadge.textContent = displayLevel;
        } else if (displayLevel !== undefined && displayLevel !== null && displayLevel !== '') {
          const levelText =
            typeof displayLevel === 'string' ? displayLevel : `Level ${displayLevel}`;
          levelBadge.textContent = levelText;
          this.applyMasteryLevelTooltip(levelBadge, levelText);
        } else {
          levelBadge.textContent = 'Unlocked';
        }
        top.appendChild(levelBadge);

        card.appendChild(top);

        if (typeof data.description === 'string' && data.description.trim()) {
          const description = document.createElement('div');
          description.className = 'card-description';
          description.textContent = data.description.trim();
          card.appendChild(description);
        }

        return card;
      }

      applyAssignmentTooltip(target, assignmentDetails) {
        if (!target || !assignmentDetails) return;
        target.classList.add('assignment-hardware', 'has-tooltip');
        target.setAttribute('tabindex', '0');
        target.setAttribute('role', 'note');
        const criteriaText = Array.isArray(assignmentDetails.criteria)
          ? assignmentDetails.criteria.join('; ')
          : '';
        if (criteriaText) {
          const ariaDescription = `${assignmentDetails.label} assignment criteria: ${criteriaText}`;
          target.setAttribute('aria-label', ariaDescription);
          target.setAttribute('aria-description', ariaDescription);
        }
        const tooltip = document.createElement('div');
        tooltip.className = 'assignment-tooltip tooltip-bubble';
        tooltip.setAttribute('role', 'tooltip');
        const heading = document.createElement('div');
        heading.className = 'assignment-tooltip-heading';
        heading.textContent = 'Assignment Criteria';
        tooltip.appendChild(heading);
        if (Array.isArray(assignmentDetails.criteria) && assignmentDetails.criteria.length) {
          const list = document.createElement('ul');
          list.className = 'assignment-tooltip-list';
          assignmentDetails.criteria.forEach((criterion) => {
            const item = document.createElement('li');
            item.textContent = criterion;
            list.appendChild(item);
          });
          tooltip.appendChild(list);
        }
        target.appendChild(tooltip);
        attachFloatingTooltip(target, tooltip);
      }

      applyMasteryLevelTooltip(target, levelText) {
        if (!target || levelText === undefined || levelText === null) return;
        const normalizedText =
          typeof levelText === 'string' ? levelText : `Level ${levelText}`;
        if (!/level/i.test(normalizedText)) return;
        const match = normalizedText.match(/(\d+)/);
        if (!match) return;
        const masteryLevel = Number.parseInt(match[1], 10);
        if (!Number.isFinite(masteryLevel)) return;
        const weaponNameRaw =
          (typeof this.displayName === 'string' && this.displayName.trim()) ||
          (this.dbEntry && typeof this.dbEntry.name === 'string' && this.dbEntry.name.trim()) ||
          'this weapon';
        const weaponName = toUpperSafe(weaponNameRaw);
        const tooltip = `Reach mastery ${masteryLevel} with the ${weaponName}`;
        target.classList.add('mastery-hint', 'has-tooltip');
        target.setAttribute('tabindex', '0');
        target.setAttribute('role', 'note');
        target.setAttribute('aria-description', tooltip);
        target.setAttribute('aria-label', `${normalizedText}. ${tooltip}`);
        const tooltipEl = document.createElement('div');
        tooltipEl.className = 'mastery-tooltip tooltip-bubble';
        tooltipEl.setAttribute('role', 'tooltip');
        const prefix = document.createElement('span');
        prefix.textContent = 'Reach mastery ';
        const levelSpan = document.createElement('span');
        levelSpan.className = 'mastery-highlight';
        levelSpan.textContent = masteryLevel;
        const middle = document.createElement('span');
        middle.textContent = ' with the ';
        const weaponSpan = document.createElement('span');
        weaponSpan.className = 'mastery-highlight';
        weaponSpan.textContent = weaponName;
        tooltipEl.append(prefix, levelSpan, middle, weaponSpan);
        target.appendChild(tooltipEl);
        attachFloatingTooltip(target, tooltipEl);
      }

      createPlaceholderCard() {
        // Placeholder no longer renders a visible box; return an empty fragment
        const frag = document.createDocumentFragment();
        return frag;
      }
      computeState(level) {
        const snapshot = {};
        for (const slot of this.slotKeys) {
          snapshot[slot] = null;
        }

        for (const [slot, data] of Object.entries(this.baseline || {})) {
          if (data == null) continue;
          const slotKey = String(slot);
          const hasExplicitLevel = data && typeof data === 'object' && Number.isFinite(data.unlockLevel);
          const unlockLevel = hasExplicitLevel ? data.unlockLevel : undefined;
          const entry = normalizeEntry(data, hasExplicitLevel ? unlockLevel : undefined, this.dbname);
          if (entry) {
            if (!Number.isFinite(entry.unlockLevel)) {
              entry.unlockLevel = hasExplicitLevel ? unlockLevel : this.minLevel;
            }
            snapshot[slotKey] = entry;
          }
        }

        const sortedLevels = Object.keys(this.changes || {})
          .map((value) => Number(value))
          .filter((value) => !Number.isNaN(value))
          .sort((a, b) => a - b);

        for (const changeLevel of sortedLevels) {
          if (changeLevel > level) break;
          const changeSet = this.changes[changeLevel];
          if (!changeSet || typeof changeSet !== 'object') continue;
          for (const [slot, payload] of Object.entries(changeSet)) {
            const slotKey = String(slot);
            if (payload === null) {
              snapshot[slotKey] = null;
            } else {
              const hasExplicitLevel =
                payload && typeof payload === 'object' && Number.isFinite(payload.unlockLevel);
              const unlockLevel = hasExplicitLevel ? payload.unlockLevel : changeLevel;
              const entry = normalizeEntry(payload, unlockLevel, this.dbname);
              if (entry) {
                snapshot[slotKey] = entry;
              }
            }
          }
        }

        return snapshot;
      }

      diffAtLevel(level) {
        const changeSet = this.changes[level];
        if (!changeSet || typeof changeSet !== 'object') return {};
        const diff = {};
        for (const [slot, payload] of Object.entries(changeSet)) {
          const slotKey = String(slot);
          if (payload === null) {
            diff[slotKey] = null;
          } else {
            const hasExplicitLevel =
              payload && typeof payload === 'object' && Number.isFinite(payload.unlockLevel);
            const unlockLevel = hasExplicitLevel ? payload.unlockLevel : level;
            const entry = normalizeEntry(payload, unlockLevel, this.dbname);
            if (entry) {
              diff[slotKey] = entry;
            }
          }
        }
        return diff;
      }

      renderSlots(level) {
        this.slotsEl.innerHTML = '';
        const current = this.computeState(level);
        const previous = this.computeState(Math.max(this.minLevel - 1, level - 1));
        const diff = this.diffAtLevel(level);
        const arrowPairs = [];

        for (const slot of this.slotKeys) {
          const wrapper = document.createElement('div');
          wrapper.className = 'slot-wrapper';
          const label = document.createElement('div');
          label.className = 'slot-label';
          label.textContent = this.getSlotLabel(slot);
          wrapper.appendChild(label);
          let hasCard = false;

          const change = diff.hasOwnProperty(slot) ? diff[slot] : undefined;

          if (change !== undefined) {
            const previousData = previous[slot];
            if (change === null) {
              if (previousData) {
                const oldLevel = Number.isFinite(previousData.unlockLevel)
                  ? previousData.unlockLevel
                  : level;
                const oldCard = this.createCard(previousData, {
                  old: true,
                  removed: true,
                  level: oldLevel
                });
                if (oldCard) {
                  wrapper.appendChild(oldCard);
                  hasCard = true;
                }
              } else {
                // No previous attachment; do not render a placeholder box
              }
            } else {
              const replacedMeta = Array.isArray(change.replaced) ? change.replaced : [];
              let oldCardData = previousData ? { ...previousData } : null;
              let oldLevel = oldCardData && Number.isFinite(oldCardData.unlockLevel)
                ? oldCardData.unlockLevel
                : level;

              if (replacedMeta.length) {
                const match = oldCardData
                  ? replacedMeta.find((entry) => entry.name === oldCardData.name)
                  : replacedMeta[0];
                if (match) {
                  if (oldCardData) {
                    oldCardData = { ...oldCardData, ...match };
                  } else {
                    oldCardData = {
                      name: match.name || 'Previous attachment',
                      pts: match.pts ?? 0,
                      type: match.type || this.getSlotLabel(slot),
                      unlockLevel: Number.isFinite(match.unlockLevel) ? match.unlockLevel : level
                    };
                  }
                  oldLevel = Number.isFinite(match.unlockLevel)
                    ? match.unlockLevel
                    : oldCardData.unlockLevel ?? level;
                  const normalized = normalizeEntry(
                    oldCardData,
                    Number.isFinite(oldCardData.unlockLevel) ? oldCardData.unlockLevel : oldLevel,
                    this.dbname
                  );
                  if (normalized) {
                    oldCardData = normalized;
                  }
                }
              }

              let oldCard = null;
              if (oldCardData) {
                oldCard = this.createCard(oldCardData, { old: true, level: oldLevel });
                if (oldCard) {
                  wrapper.appendChild(oldCard);
                  hasCard = true;
                }
              }

              const newCard = this.createCard(change, {
                changed: true,
                indented: Boolean(oldCard),
                level: Number.isFinite(change.unlockLevel) ? change.unlockLevel : level
              });
              if (newCard) {
                wrapper.appendChild(newCard);
                hasCard = true;
              }
              if (oldCard && newCard) {
                arrowPairs.push({ oldEl: oldCard, newEl: newCard });
              }
            }
          } else {
            const currentData = current[slot];
            if (currentData) {
              const prevData = previous[slot];
              const changed = prevData ? prevData.name !== currentData.name : level > this.minLevel;
              const card = this.createCard(currentData, {
                changed,
                level: currentData.unlockLevel,
                hideLevel: currentData.unlockLevel ? currentData.unlockLevel > level : false
              });
              if (card) {
                wrapper.appendChild(card);
                hasCard = true;
              }
            } else {
              // No current attachment; do not render a placeholder box
            }
          }

          if (hasCard) {
            this.slotsEl.appendChild(wrapper);
          }
        }

        this.arrowLayerEl.innerHTML = '';
        this.slotsEl.appendChild(this.arrowLayerEl);
        requestAnimationFrame(() => this.drawArrows(arrowPairs));
      }

      renderChanges(level) {
        if (!this.changesPanelEl) return;
        const container = this.changesPanelEl;
        container.innerHTML = '';
        const appendUpdatedAt = (mode, level) => {
          const pieces = [];
          if (mode === 'build') {
            const buildUpdated = normalizeUpdatedAt(
              this.activeBuildUpdatedAt || this.updatedFallback || DEFAULT_BUILD_UPDATED_AT
            );
            if (buildUpdated) pieces.push(`Last Updated: ${buildUpdated}`);
          } else {
            const baselineUpdated = normalizeUpdatedAt(this.baselineUpdated) || DEFAULT_BASELINE_CHANGES_UPDATED_AT;
            const changesUpdated =
              normalizeUpdatedAt(this.changeUpdatedByLevel && this.changeUpdatedByLevel[level]) ||
              normalizeUpdatedAt(this.changesUpdated) ||
              DEFAULT_BASELINE_CHANGES_UPDATED_AT;
            if (level <= this.minLevel && baselineUpdated) {
              pieces.push(`Baseline: ${baselineUpdated}`);
            } else if (level > this.minLevel && changesUpdated) {
              pieces.push(`Changes: ${changesUpdated}`);
            }
          }
          if (!pieces.length) return;
          const footer = document.createElement('div');
          footer.className = 'build-updated';
          footer.textContent = mode === 'build' ? pieces[0] : `Last Updated — ${pieces.join(' • ')}`;
          container.appendChild(footer);
        };

        const activeBuild = this.buildById ? this.buildById[this.activeBuildId] : null;
        const viewingBuild = activeBuild && activeBuild.type !== 'mastery';
        if (viewingBuild) {
          const title = document.createElement('h3');
          title.textContent = this.activeBuildNote ? `${activeBuild.label} Notes` : `${activeBuild.label}`;
          container.appendChild(title);
          const body = document.createElement('div');
          body.className = 'changes-empty';
          if (this.activeBuildNote) {
            body.innerHTML = this.formatNotesText(this.activeBuildNote);
          } else {
            body.textContent = 'No notes available for this build.';
          }
          container.appendChild(body);
          appendUpdatedAt('build', level);
          return;
        }

        const diff = this.diffAtLevel(level);
        const previous = this.computeState(Math.max(this.minLevel - 1, level - 1));
        const entries = Object.entries(diff);
        const title = document.createElement('h3');
        title.textContent = 'Changes at this Level';
        container.appendChild(title);

        if (!entries.length) {
          const empty = document.createElement('div');
          empty.className = 'changes-empty';
          empty.textContent = 'No changes unlocked at this level.';
          container.appendChild(empty);
          appendUpdatedAt('mastery', level);
          return;
        }

        for (const [slot, change] of entries) {
          const row = document.createElement('div');
          row.className = 'change-row';
          const slotName = this.getSlotLabel(slot) || `SLOT ${slot}`;
          const heading = document.createElement('div');
          heading.className = 'change-heading';

          if (change === null) {
            const prev = previous[slot];
            const prevName = prev ? prev.name : 'Previous attachment';
            const prevNameDisplay = toUpperSafe(prevName);
            // Normalize corrupted separators in some encodings
            heading.textContent = `${slotName} \u2014 Removed`;
            const detail = document.createElement('div');
            detail.className = 'change-detail';
            detail.textContent = `${prevNameDisplay} removed at Level ${level}.`;
            row.appendChild(heading);
            row.appendChild(detail);
          } else {
            const prev = previous[slot];
            const replacedMeta = Array.isArray(change.replaced) ? change.replaced : [];
            const fallbackPrev = prev
              ? null
              : replacedMeta.find((entry) => entry && entry.name) || replacedMeta[0] || null;
            const prevName = prev
              ? prev.name
              : fallbackPrev && fallbackPrev.name
              ? fallbackPrev.name
              : 'Baseline';
            const changeLevel = Number.isFinite(change.unlockLevel) ? change.unlockLevel : level;
            // Normalize corrupted separators in some encodings
            heading.textContent = `${slotName} \u2014 Level ${changeLevel}`;
            const detail = document.createElement('div');
            detail.className = 'change-detail';

            const prevSpan = document.createElement('span');
            prevSpan.className = 'change-prev';
            prevSpan.textContent = toUpperSafe(prevName);

            const arrow = document.createElement('span');
            arrow.className = 'change-arrow';
            arrow.textContent = '\u2192';

            const nextSpan = document.createElement('span');
            nextSpan.className = 'change-next';
            nextSpan.textContent = toUpperSafe(change.name);

            detail.appendChild(prevSpan);
            detail.appendChild(arrow);
            detail.appendChild(nextSpan);

            row.appendChild(heading);
            row.appendChild(detail);
          }

          container.appendChild(row);
        }
        appendUpdatedAt('mastery', level);
      }

      formatNotesText(note) {
        if (!note || typeof note !== 'string') return '';
        let text = note.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const mapping = [
          { tag: 'b', open: '<b>', close: '</b>' },
          { tag: 'i', open: '<i>', close: '</i>' },
          { tag: 'hl', open: '<span class="notes-highlight">', close: '</span>' },
          { tag: 'c', open: '<span class="notes-color">', close: '</span>' }
        ];
        for (const item of mapping) {
          const openPattern = new RegExp(`&lt;${item.tag}&gt;`, 'gi');
          const closePattern = new RegExp(`&lt;/${item.tag}&gt;`, 'gi');
          text = text.replace(openPattern, item.open);
          text = text.replace(closePattern, item.close);
        }
        return text;
      }

      hasMasteryData() {
        const baselineKeys = this.baseline ? Object.keys(this.baseline) : [];
        const changeKeys = this.changes ? Object.keys(this.changes) : [];
        return baselineKeys.length > 0 || changeKeys.length > 0;
      }

      resolveBuildDefinitions() {
      const recognized = [
        { id: 'recommended', label: 'Recommended', keys: ['recommended', 'recommendedBuild', 'recommended_build'] },
        { id: 'versatile', label: 'Versatile', keys: ['versatile'] },
        { id: 'close', label: 'Close Range', keys: ['close'] },
        { id: 'long', label: 'Long Range', keys: ['long'] },
        { id: 'sniper', label: 'Sniper', keys: ['sniper'] },
        { id: 'ss', label: 'Sniper Support', keys: ['ss', 'snipersupport'] },
        { id: 'mid', label: 'Medium Range', keys: ['mid', 'mediumrange'] },
        { id: 'custom', label: 'Custom', keys: ['custom'] }
      ];
        const defaultUpdatedAt = this.updatedFallback || DEFAULT_BUILD_UPDATED_AT;
        const updatedRaw = this.config.buildUpdated || this.config.updatedByBuild || this.config.buildUpdatedAt;
        const updatedMap = {};
        if (updatedRaw && typeof updatedRaw === 'object') {
          for (const [key, value] of Object.entries(updatedRaw)) {
            if (!key) continue;
            const normalizedKey = key.toString().trim().toLowerCase();
            const normalizedValue = normalizeUpdatedAt(value);
            if (normalizedKey && normalizedValue) {
              updatedMap[normalizedKey] = normalizedValue;
            }
          }
        }
        const lookup = {};
        for (const info of recognized) {
          for (const key of info.keys) {
            lookup[key.toLowerCase()] = info.id;
          }
        }
        const builds = [];
        if (this.hasMasteryData()) {
          builds.push({ id: 'mastery', label: 'Mastery', type: 'mastery', updatedAt: defaultUpdatedAt });
        }
        const seen = new Set(builds.map((build) => build.id));
        for (const key of Object.keys(this.config)) {
          const normalized = key.toString().trim().toLowerCase();
          const buildId = lookup[normalized];
        if (!buildId || seen.has(buildId)) continue;
        const info = recognized.find((entry) => entry.id === buildId);
        let payload = this.config[key];
        let label = info ? info.label : buildId;
        if (buildId === 'custom' && Array.isArray(payload)) {
          const first = payload[0];
          if (first && typeof first === 'object' && typeof first.custom === 'string') {
            label = first.custom;
            payload = payload.slice(1);
          }
        }
        if (payload == null) continue;
        seen.add(buildId);
        const buildKey = buildId ? buildId.toString().toLowerCase() : '';
        const updatedAt = updatedMap[buildKey] || updatedMap[normalized] || defaultUpdatedAt;
        builds.push({
          id: buildId,
          label,
          type: 'list',
          payload,
          sourceKey: key,
          updatedAt
          });
        }
        return builds;
      }

      getBuildPayloadEntries(build) {
        if (!build || build.type !== 'list') return { entries: [], note: null, updatedAt: null };
        const payload = build.payload;
        let items = [];
        if (Array.isArray(payload)) {
          items = payload.slice();
        } else if (payload && typeof payload === 'object') {
          try {
            items = Object.values(payload);
          } catch (_) {
            items = [];
          }
        }
        let note = null;
        let updatedAt = null;
        const filtered = [];
        for (const item of items) {
          if (item && typeof item === 'object') {
            const noteValue = item.Notes || item.notes;
            if (typeof noteValue === 'string' && noteValue.trim()) {
              note = noteValue.trim();
              continue;
            }
            if (!updatedAt && (item.Updated || item.updated || item.updatedAt)) {
              updatedAt = normalizeUpdatedAt(item.Updated || item.updated || item.updatedAt);
              continue;
            }
          }
          filtered.push(item);
        }
        return { entries: filtered, note, updatedAt };
      }

      renderBuildAttachments(build) {
        if (!this.slotsEl) return null;
        const { entries, note, updatedAt: payloadUpdatedAt } = this.getBuildPayloadEntries(build);
        this.activeBuildNote = note;
        this.activeBuildUpdatedAt =
          payloadUpdatedAt ||
          (build && normalizeUpdatedAt(build.updatedAt)) ||
          this.updatedFallback ||
          DEFAULT_BUILD_UPDATED_AT;
        this.slotsEl.innerHTML = '';
        this.arrowLayerEl.innerHTML = '';
        if (!entries.length) {
          this.activeBuildApStats = null;
          return null;
        }
        const frag = document.createDocumentFragment();
        let totalAp = 0;
        let highestLevel = Number.NEGATIVE_INFINITY;
        for (const payload of entries) {
          if (!payload) continue;
          const unlock = Number.isFinite(payload.unlockLevel) ? payload.unlockLevel : undefined;
          const entry = normalizeEntry(payload, unlock, this.dbname);
          if (!entry) continue;
          const card = this.createCard(entry, { changed: true, hideLevel: false, level: entry.unlockLevel });
          if (card) frag.appendChild(card);
          if (typeof entry.pts === 'number') totalAp += entry.pts;
          if (Number.isFinite(entry.unlockLevel)) {
            highestLevel = Math.max(highestLevel, entry.unlockLevel);
          }
        }
        if (!frag.childElementCount) {
          this.activeBuildApStats = null;
          return null;
        }
        this.slotsEl.appendChild(frag);
        const stats = { totalAp, overcap: Number.isFinite(this.apMax) && totalAp > this.apMax };
        stats.requiredLevel = Number.isFinite(highestLevel) ? highestLevel : null;
        this.activeBuildApStats = stats;
        return stats;
      }

      setupBuildTabs() {
        if (!this.buildTabsEl || !this.buildTabListEl) return;
        this.buildTabListEl.innerHTML = '';
        this.buildTabButtons = [];
        if (!this.buildDefinitions.length) {
          this.buildTabsEl.hidden = true;
          return;
        }
        this.buildTabsEl.hidden = this.buildDefinitions.length === 0;
        for (const build of this.buildDefinitions) {
          const tab = document.createElement('button');
          tab.type = 'button';
          tab.className = 'build-tab';
          tab.dataset.build = build.id;
          tab.setAttribute('role', 'tab');
          tab.textContent = build.label;
          tab.addEventListener('click', () => this.setActiveBuild(build.id));
          this.buildTabListEl.appendChild(tab);
          this.buildTabButtons.push(tab);
        }
        this.updateBuildTabSelection();
        this.renderBuildView();
      }

      updateBuildTabSelection() {
        if (!this.buildTabButtons.length) return;
        for (const tab of this.buildTabButtons) {
          const isActive = tab.dataset.build === this.activeBuildId;
          tab.classList.toggle('active', isActive);
          tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        }
      }

      setActiveBuild(buildId) {
        if (!buildId || buildId === this.activeBuildId) return;
        this.activeBuildId = buildId;
        this.updateBuildTabSelection();
        if (this.cardEl) {
          this.cardEl.dataset.activeBuild = buildId;
        }
        persistActiveTab(this.id, buildId);
        this.renderBuildView();
        this.render();
      }

      renderBuildView() {
        if (!this.cardEl) return;
        if (this.buildTabsEl) {
          this.buildTabsEl.hidden = this.buildDefinitions.length === 0;
        }
        if (this.activeBuildId) {
          this.cardEl.dataset.activeBuild = this.activeBuildId;
        } else {
          this.cardEl.removeAttribute('data-active-build');
        }
      }

      updateAp(level) {
        const snapshot = this.computeState(level);
        let total = 0;
        for (const value of Object.values(snapshot)) {
          if (value && typeof value.pts === 'number') {
            total += value.pts;
          }
        }
        const overcap = Number.isFinite(this.apMax) && total > this.apMax;
        if (this.apValueEl) {
          this.apValueEl.textContent = `${Math.round(total)}`;
        }
        if (this.apMaxEl) this.apMaxEl.textContent = `/${this.apMax}`;
        const readout = this.apValueEl ? this.apValueEl.closest('.ap-readout') : null;
        if (readout) readout.classList.toggle('ap-overcap', overcap);
        this.updateApMeter(total, overcap);
        return total;
      }

      applyBuildApStats(stats) {
        if (!stats || !this.apValueEl) return;
        const totalAp = Number.isFinite(stats.totalAp) ? stats.totalAp : 0;
        const overcap = Boolean(stats.overcap);
        if (this.apValueEl) {
          const displayValue = Number.isFinite(totalAp) && totalAp > 0 ? `${Math.round(totalAp)}` : '';
          this.apValueEl.textContent = displayValue;
        }
        if (this.apMaxEl) this.apMaxEl.textContent = `/${this.apMax}`;
        const readout = this.apValueEl ? this.apValueEl.closest('.ap-readout') : null;
        if (readout) readout.classList.toggle('ap-overcap', overcap);
        this.updateApMeter(totalAp, overcap);
      }

      updateLevelDisplayForBuild(stats) {
        if (!this.levelDisplayEl) return;
        if (stats && Number.isFinite(stats.requiredLevel)) {
          this.levelDisplayEl.textContent = `Full build requires Mastery ${Math.round(stats.requiredLevel)}.`;
        } else {
          this.levelDisplayEl.textContent = '';
        }
      }

      updateLevelDisplayDefault(level) {
        if (!this.levelDisplayEl) return;
        this.levelDisplayEl.textContent = `Viewing mastery unlocks at level ${level}.`;
      }

      drawArrows(pairs) {
        this.arrowLayerEl.innerHTML = '';
        if (!pairs.length) return;
        const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#00e5ff';

        for (const pair of pairs) {
          if (!pair.oldEl || !pair.newEl) continue;
          const startY = this.offsetWithinContainer(pair.oldEl) + pair.oldEl.offsetHeight;
          const endY = this.offsetWithinContainer(pair.newEl) + pair.newEl.offsetHeight / 2;
          const vertical = Math.max(0, endY - startY);
          const height = vertical + 16;
          const arrowSize = 6;
          const oldLeft = this.offsetLeftWithinContainer(pair.oldEl);
          const newLeft = this.offsetLeftWithinContainer(pair.newEl);
          const baseLeft = Math.min(oldLeft, newLeft);
          const startX = CARD_PAD + 1 + (oldLeft - baseLeft);
          const rawTargetX = newLeft - baseLeft;
          const targetX = Math.max(startX, rawTargetX);
          const horizontal = Math.max(0, targetX - startX);
          const tipX = startX + horizontal;
          const width = Math.max(startX, tipX) + arrowSize + 4;

          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.classList.add('arrow-svg');
          svg.setAttribute('width', width);
          svg.setAttribute('height', height);
          svg.style.left = `${baseLeft}px`;
          svg.style.top = `${startY}px`;

          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', `M${startX} 1 v${vertical} h${horizontal}`);
          path.setAttribute('fill', 'none');
          path.setAttribute('stroke', accent.trim() || '#00e5ff');
          path.setAttribute('stroke-width', ARROW_STROKE);
          path.setAttribute('stroke-linejoin', 'round');
          path.setAttribute('stroke-linecap', 'round');

          const arrowHead = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          const tipY = vertical + 1;
          arrowHead.setAttribute('d', `M${tipX - arrowSize} ${tipY - arrowSize} L${tipX} ${tipY} L${tipX - arrowSize} ${tipY + arrowSize}`);
          arrowHead.setAttribute('fill', 'none');
          arrowHead.setAttribute('stroke', accent.trim() || '#00e5ff');
          arrowHead.setAttribute('stroke-width', ARROW_STROKE);
          arrowHead.setAttribute('stroke-linecap', 'round');
          arrowHead.setAttribute('stroke-linejoin', 'round');

          svg.appendChild(path);
          svg.appendChild(arrowHead);
          this.arrowLayerEl.appendChild(svg);
        }
      }

      offsetWithinContainer(element) {
        if (!element) return 0;
        let offset = 0;
        let node = element;
        const container = this.slotsEl;
        while (node && node !== container) {
          offset += node.offsetTop || 0;
          node = node.offsetParent;
        }
        return offset;
      }

      offsetLeftWithinContainer(element) {
        if (!element) return 0;
        let offset = 0;
        let node = element;
        const container = this.slotsEl;
        while (node && node !== container) {
          offset += node.offsetLeft || 0;
          node = node.offsetParent;
        }
        return offset;
      }

      render() {
        const level = this.state.level;
        if (this.levelPillEl) this.levelPillEl.textContent = `Level ${level}`;
        if (this.headerLevelEl) this.headerLevelEl.textContent = `LEVEL ${level}`;
        if (this.levelDisplayEl) this.levelDisplayEl.textContent = `Viewing mastery unlocks at level ${level}.`;
        if (this.levelDownBtn) this.levelDownBtn.disabled = level === this.minLevel;
        if (this.levelUpBtn) this.levelUpBtn.disabled = level === this.maxLevel;
        if (this.progressBarEl) this.updateProgressUI(level);
        this.updateAp(level);
        if (!this.state.collapsed) {
          const build = this.buildById[this.activeBuildId];
          if (build && build.type !== 'mastery') {
            const stats = this.renderBuildAttachments(build);
            this.applyBuildApStats(stats);
            this.updateLevelDisplayForBuild(stats);
            this.renderChanges(level);
          } else {
            this.activeBuildUpdatedAt = this.updatedFallback || DEFAULT_BUILD_UPDATED_AT;
            this.renderSlots(level);
            this.renderChanges(level);
            this.activeBuildNote = null;
            this.activeBuildApStats = null;
            this.updateLevelDisplayDefault(level);
          }
        }
        this.renderBuildView();
      }

      refreshLayout() {
        if (this.state.collapsed) return;
        this.renderSlots(this.state.level);
      }
    }
    const template = document.getElementById('weaponTemplate');
    const weaponListEl = document.getElementById('weaponList');
    const weaponNavEl = document.getElementById('weaponNav');
const layoutGridEl = document.querySelector('.layout-grid');
const floatingOptionsBtn = document.getElementById('optionsFloatingButton');
const debugPanelEl = document.getElementById('debugPanel');
const debugPanelCloseBtn = document.getElementById('debugPanelClose');
const debugCommandInput = document.getElementById('debugCommandInput');
const debugCardListEl = document.getElementById('debugCardList');
const debugStatusEl = document.getElementById('debugStatusMessage');
const DEBUG_STATUS_DEFAULT = 'Available commands: chips';

    function setTypeFilter(value) {
      currentTypeFilter = formatTypeKey(value || '');
      saveTypeFilter(value || '');
      updateTypeFilterSelection();
      renderWeaponList();
    }

    function updateTypeFilterSelection() {
      if (!typeFilterList) return;
      const buttons = Array.from(typeFilterList.querySelectorAll('.type-filter-item'));
      buttons.forEach((button) => {
        const key = formatTypeKey(button.dataset.type || '');
        button.classList.toggle('active', key === currentTypeFilter);
      });
    }

    function attachFavoritesEmptyInteractions(container) {
      if (!container) return;
      const demoBtn = container.querySelector('.favorite-toggle.favorite-demo');
      if (demoBtn) {
        demoBtn.addEventListener('click', () => {
          const pressed = demoBtn.getAttribute('aria-pressed') === 'true';
          const next = !pressed;
          demoBtn.setAttribute('aria-pressed', next ? 'true' : 'false');
          const icon = demoBtn.querySelector('.favorite-icon');
          const label = demoBtn.querySelector('.favorite-text');
          if (icon) icon.textContent = next ? '★' : '☆';
          if (label) label.textContent = next ? 'Favorited' : 'Favorite';
        });
      }

      const resetButtons = container.querySelectorAll('[data-reset-filter]');
      resetButtons.forEach((btn) => {
        btn.addEventListener('click', () => setTypeFilter(''));
      });
    }

    function createFavoritesEmptyCard() {
      const card = document.createElement('div');
      card.className = 'favorites-empty-card';
      card.innerHTML = `
        <div class="favorites-empty-title">You don't have any favorites 😢</div>
        <p class="favorites-empty-body">Click the star on a weapon card to pin it to your favorites.</p>
        <div class="favorites-empty-actions">
          <button type="button" class="favorite-toggle favorite-demo" aria-pressed="false" title="Demo favorite toggle">
            <span aria-hidden="true" class="favorite-icon">☆</span>
          </button>
          <span class="favorites-empty-body">(try it out — this one doesn't save)</span>
        </div>
        <p class="favorites-empty-body">Click <button type="button" class="return-link" data-reset-filter>HERE</button> to return to All weapons.</p>
      `;
      attachFavoritesEmptyInteractions(card);
      return card;
    }

    function createFavoritesNavEmpty() {
      const box = document.createElement('div');
      box.className = 'side-nav-empty';
      box.innerHTML = `
        <div class="side-nav-empty-title">You don't have any favorites 😢</div>
        <p class="side-nav-empty-note">Tap the star on a weapon to pin it HERE.</p>
        </div>
      `;
      attachFavoritesEmptyInteractions(box);
      return box;
    }

  function deriveDefaultTypeOrder(trackersList) {
    const trackersCopy = [...trackersList];
    trackersCopy.sort((a, b) => {
      const aIndex = TYPE_INDEX[a.typeKey] ?? TYPE_ORDER.length;
      const bIndex = TYPE_INDEX[b.typeKey] ?? TYPE_ORDER.length;
      if (aIndex !== bIndex) return aIndex - bIndex;
      return (a.displayName || '').localeCompare(b.displayName || '');
    });
    return trackersCopy.map((tracker) => tracker.id);
  }

    function populateTypeFilterList(trackersList) {
        if (!typeFilterList) return;
        const typeMap = new Map();
        for (const tracker of trackersList) {
          if (!tracker || !tracker.typeKey) continue;
          if (!typeMap.has(tracker.typeKey)) {
            const label = (tracker.displayType && tracker.displayType.trim()) || tracker.typeKey;
            typeMap.set(tracker.typeKey, label);
          }
        }
      const entries = Array.from(typeMap.entries()).sort((a, b) => a[1].localeCompare(b[1]));
      const chips = [
        '<button type="button" class="type-filter-item" data-type="">All</button>',
        '<button type="button" class="type-filter-item" data-type="favorites">Favorites</button>'
      ];
      for (const [key, label] of entries) {
        chips.push(`<button type="button" class="type-filter-item" data-type="${key}">${label}</button>`);
      }
      typeFilterList.innerHTML = chips.join('');
      updateTypeFilterSelection();
    }

    function computeBaseOrder(idToTracker) {
      const storedOrder = storage.getOrder();
      const baseOrder = [];
      const seen = new Set();
      for (const id of storedOrder) {
        if (idToTracker.has(id) && !seen.has(id)) {
          baseOrder.push(id);
          seen.add(id);
        }
      }
      for (const tracker of trackers) {
        if (!seen.has(tracker.id)) {
          baseOrder.push(tracker.id);
          seen.add(tracker.id);
        }
      }
      return baseOrder;
    }

    function mergeVisibleOrderWithFullList(visibleOrder, idToTracker) {
      const baseOrder = computeBaseOrder(idToTracker);
      const normalizedVisible = visibleOrder.filter((id) => idToTracker.has(id));
      const visibleSet = new Set(normalizedVisible);
      const remainder = baseOrder.filter((id) => !visibleSet.has(id));
      return normalizedVisible.concat(remainder);
    }

    function supportsLocalStorage() {
      try {
        if (typeof window === 'undefined' || !window.localStorage) return false;
        const testKey = '__bf6_meta_test';
        window.localStorage.setItem(testKey, testKey);
        window.localStorage.removeItem(testKey);
        return true;
      } catch {
        return false;
      }
    }

    function loadTypeFilter() {
      if (!supportsLocalStorage()) return '';
      try {
        const stored = window.localStorage.getItem(TYPE_FILTER_KEY);
        return typeof stored === 'string' ? stored : '';
      } catch {
        return '';
      }
    }

    function saveTypeFilter(value) {
      if (!supportsLocalStorage()) return;
      try {
        window.localStorage.setItem(TYPE_FILTER_KEY, value || '');
      } catch {}
    }

    function loadActiveTabs() {
      if (!supportsLocalStorage()) return {};
      try {
        const stored = window.localStorage.getItem(ACTIVE_TAB_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
      } catch {
        return {};
      }
    }

    function persistActiveTab(id, buildId) {
      if (!supportsLocalStorage()) return;
      try {
        activeTabMap[id] = buildId;
        window.localStorage.setItem(ACTIVE_TAB_STORAGE_KEY, JSON.stringify(activeTabMap));
      } catch {}
    }


    const trackers = weaponConfigs.map((config) => {
      const tracker = new WeaponTracker(config);
      tracker.mount(template);
      return tracker;
    });
    const trackerMap = new Map(trackers.map((tracker) => [tracker.id, tracker]));

    if (typeFilterList) {
      typeFilterList.addEventListener('click', (event) => {
        const button = event.target.closest('.type-filter-item');
        if (!button) return;
        setTypeFilter(button.dataset.type || '');
      });
    }
    populateTypeFilterList(trackers);

    function updateWeaponNav(order) {
      if (!weaponNavEl) return;
      const isFavoritesEmpty = currentTypeFilter === FAVORITES_FILTER && (!order || order.length === 0);
      weaponNavEl.innerHTML = '';
      if (isFavoritesEmpty) {
        weaponNavEl.appendChild(createFavoritesNavEmpty());
        weaponNavEl.classList.add('nav-ready');
        return;
      }

      const idToTracker = trackerMap;
      const ul = document.createElement('ul');
      ul.className = 'side-nav-list';
      for (const id of order) {
        const tracker = idToTracker.get(id);
        if (!tracker) continue;
        const li = document.createElement('li');
        li.className = 'side-nav-item';
        li.setAttribute('role', 'button');
        li.tabIndex = 0;
        li.dataset.weaponId = id;
        enableNavDrag(li);
        const name = document.createElement('span');
        name.className = 'side-nav-name';
        const navName = tracker.displayName || (tracker.config && tracker.config.name) || id;
        name.textContent = toUpperSafe(navName);
        li.appendChild(name);
        const navType = tracker.displayType || (tracker.config && tracker.config.type);
        if (navType) {
          const type = document.createElement('span');
          type.className = 'side-nav-type';
          type.textContent = toUpperSafe(navType);
          li.appendChild(type);
        }
        if (tracker.isFavorite()) {
          const fav = document.createElement('span');
          fav.className = 'side-nav-fav';
          fav.setAttribute('aria-hidden', 'true');
          fav.textContent = '\u2605';
          li.appendChild(fav);
        }
        ul.appendChild(li);
      }
      weaponNavEl.appendChild(ul);
      weaponNavEl.classList.add("nav-ready");
    }

    function scrollToTracker(tracker) {
      if (!tracker || !tracker.cardEl) return;
      const rect = tracker.cardEl.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      let targetTop;
      if (!tracker.state.collapsed) {
        const mid = rect.top + scrollTop + rect.height / 2;
        targetTop = Math.max(0, Math.round(mid - viewportH / 2));
      } else {
        targetTop = Math.max(0, Math.round(rect.top + scrollTop - 24));
      }
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }

    function handleNavActivation(target) {
      const item = target.closest('.side-nav-item');
      if (!item) return;
      const id = item.dataset.weaponId;
      const tracker = trackers.find((t) => t.id === id);
      scrollToTracker(tracker);
    }

    if (weaponNavEl) {
      weaponNavEl.addEventListener('click', (event) => {
        handleNavActivation(event.target);
      });

      weaponNavEl.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        handleNavActivation(event.target);
        event.preventDefault();
      });

      weaponNavEl.addEventListener('dragover', (event) => {
        if (!currentDraggedId) return;
        if (!weaponNavEl.contains(event.target)) return;
        const listEl = weaponNavEl.querySelector('.side-nav-list');
        if (!listEl) return;
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
        const placeholder = getNavDropPlaceholder();
        if (event.target === placeholder) return;
        const dropItem = event.target.closest('.side-nav-item');
        if (dropItem && dropItem !== placeholder) {
          const rect = dropItem.getBoundingClientRect();
          const before = event.clientY < rect.top + rect.height / 2;
          if (before) listEl.insertBefore(placeholder, dropItem);
          else listEl.insertBefore(placeholder, dropItem.nextSibling);
        } else if (placeholder.parentNode !== listEl) {
          listEl.appendChild(placeholder);
        }
      });

      weaponNavEl.addEventListener('drop', (event) => {
        if (!currentDraggedId) return;
        const listEl = weaponNavEl.querySelector('.side-nav-list');
        if (!listEl) return;
        const navItems = Array.from(listEl.children);
        if (!navItems.length) return;
        event.preventDefault();
        const dropItem = event.target.closest('.side-nav-item');
        const domOrder = navItems.map((item) => item.dataset.weaponId);
        const filteredOrder = domOrder.filter(Boolean);
        let insertIndex = filteredOrder.length;
        if (navDropPlaceholder && navDropPlaceholder.parentNode === listEl) {
          const placeholderIndex = navItems.indexOf(navDropPlaceholder);
          if (placeholderIndex !== -1) {
            const beforeNodes = navItems.slice(0, placeholderIndex);
            insertIndex = beforeNodes.reduce((count, node) => count + (node.dataset && node.dataset.weaponId ? 1 : 0), 0);
          }
        } else if (dropItem) {
          const dropId = dropItem.dataset.weaponId;
          if (dropId) {
            const dropIndex = filteredOrder.indexOf(dropId);
            if (dropIndex !== -1) {
              const rect = dropItem.getBoundingClientRect();
              const before = event.clientY < rect.top + rect.height / 2;
              insertIndex = before ? dropIndex : dropIndex + 1;
            }
          }
        }
        const order = filteredOrder.filter((id) => id && id !== currentDraggedId);
        if (insertIndex > order.length) insertIndex = order.length;
        order.splice(insertIndex, 0, currentDraggedId);
        const mergedOrder = mergeVisibleOrderWithFullList(order, trackerMap);
        storage.setOrder(mergedOrder);
        clearNavDropPlaceholder();
        renderWeaponList();
        currentDraggedId = null;
        setDragActiveState(false);
      });
    }

    function renderWeaponList() {
      const storedOrder = storage.getOrder();
      const idToTracker = trackerMap;
      const baseOrder = computeBaseOrder(idToTracker);

      const favorites = baseOrder.filter((id) => idToTracker.get(id).isFavorite());
      const others = baseOrder.filter((id) => !idToTracker.get(id).isFavorite());
      const finalOrder = favorites.concat(others);

      const storedMatches =
        storedOrder.length === finalOrder.length &&
        finalOrder.every((id, index) => storedOrder[index] === id);
      if (!storedMatches) {
        storage.setOrder(finalOrder);
      }

      weaponListEl.innerHTML = '';
      let displayOrder = finalOrder;
      const isFavoritesFilter = currentTypeFilter === FAVORITES_FILTER;
      if (isFavoritesFilter) {
        displayOrder = finalOrder.filter((id) => {
          const tracker = idToTracker.get(id);
          return tracker && tracker.isFavorite();
        });
      } else if (currentTypeFilter) {
        const filtered = finalOrder
          .map((id) => idToTracker.get(id))
          .filter((tracker) => tracker && tracker.typeKey === currentTypeFilter);
        filtered.sort((a, b) => {
          const aVal = Number.isFinite(a.typeRatingValue) ? a.typeRatingValue : Number.MAX_SAFE_INTEGER;
          const bVal = Number.isFinite(b.typeRatingValue) ? b.typeRatingValue : Number.MAX_SAFE_INTEGER;
          if (aVal !== bVal) return aVal - bVal;
          return (a.displayName || '').localeCompare(b.displayName || '');
        });
        displayOrder = filtered.map((tracker) => tracker.id);
      } else {
        const defaultOrder = deriveDefaultTypeOrder(trackers);
        const matchesDefault =
          defaultOrder.length === finalOrder.length &&
          defaultOrder.every((id, index) => finalOrder[index] === id);
        displayOrder = matchesDefault ? defaultOrder : finalOrder;
      }

      const visibleIdSet = new Set(displayOrder);
      trackers.forEach((tracker) => {
        if (!visibleIdSet.has(tracker.id)) {
          tracker.setDisplayed(false);
        }
      });

      if (displayOrder.length === 0) {
        if (isFavoritesFilter) {
          weaponListEl.appendChild(createFavoritesEmptyCard());
        }
      } else {
        for (const id of displayOrder) {
          const tracker = idToTracker.get(id);
          tracker.attach(weaponListEl);
          tracker.setDisplayed(true);
        }
      }
      const navOrder = currentTypeFilter ? displayOrder : finalOrder;
      updateWeaponNav(navOrder);
    }

    renderWeaponList();

    weaponListEl.addEventListener('dragover', (event) => {
      if (!currentDraggedId) return;
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
      const placeholder = getCardDropPlaceholder();
      if (event.target === placeholder) return;
      const dropCard = event.target.closest('.weapon-card');
      if (dropCard && dropCard !== placeholder) {
        const rect = dropCard.getBoundingClientRect();
        const before = event.clientY < rect.top + rect.height / 2;
        if (before) weaponListEl.insertBefore(placeholder, dropCard);
        else weaponListEl.insertBefore(placeholder, dropCard.nextSibling);
      } else if (placeholder.parentNode !== weaponListEl) {
        weaponListEl.appendChild(placeholder);
      }
    });

    weaponListEl.addEventListener('drop', (event) => {
      if (!currentDraggedId) return;
      event.preventDefault();
      const dropCard = event.target.closest('.weapon-card');
      const children = Array.from(weaponListEl.children);
      const domOrder = children.map((el) => el.dataset.weaponId);
      let insertIndex = domOrder.filter(Boolean).length;

      if (cardDropPlaceholder && cardDropPlaceholder.parentNode === weaponListEl) {
        const placeholderIndex = children.indexOf(cardDropPlaceholder);
        if (placeholderIndex !== -1) {
          const beforeNodes = children.slice(0, placeholderIndex);
          insertIndex = beforeNodes.reduce((count, node) => count + (node.dataset && node.dataset.weaponId ? 1 : 0), 0);
        }
      } else if (dropCard) {
        const dropId = dropCard.dataset.weaponId;
        const filteredOrder = domOrder.filter(Boolean);
        const dropIndex = filteredOrder.indexOf(dropId);
        if (dropIndex !== -1) {
          const rect = dropCard.getBoundingClientRect();
          const before = event.clientY < rect.top + rect.height / 2;
          insertIndex = before ? dropIndex : dropIndex + 1;
        }
      }

      const order = domOrder.filter((id) => id && id !== currentDraggedId);
      if (insertIndex > order.length) insertIndex = order.length;
      order.splice(insertIndex, 0, currentDraggedId);
      const mergedOrder = mergeVisibleOrderWithFullList(order, trackerMap);
      storage.setOrder(mergedOrder);
      clearCardDropPlaceholder();
      renderWeaponList();
      currentDraggedId = null;
    });

    if (debugStatusEl && typeof DEBUG_STATUS_DEFAULT === 'string') {
      debugStatusEl.textContent = DEBUG_STATUS_DEFAULT;
    }
    if (debugPanelEl) {
      debugPanelEl.setAttribute('aria-hidden', 'true');
    }

    let debugPanelVisible = false;
    const EDITABLE_INPUT_TYPES = ['text', 'search', 'url', 'tel', 'email', 'password', 'number'];

    function isTextEntryElement(element) {
      if (!element) return false;
      if (element.isContentEditable) return true;
      const tag = element.tagName ? element.tagName.toLowerCase() : '';
      if (tag === 'textarea') return true;
      if (tag === 'input') {
        const type = (element.getAttribute('type') || 'text').toLowerCase();
        return EDITABLE_INPUT_TYPES.includes(type);
      }
      return false;
    }

    function setDebugPanelVisible(visible) {
      if (!debugPanelEl) return;
      debugPanelVisible = Boolean(visible);
      debugPanelEl.hidden = !debugPanelVisible;
      debugPanelEl.classList.toggle('visible', debugPanelVisible);
      debugPanelEl.setAttribute('aria-hidden', debugPanelVisible ? 'false' : 'true');
      if (!debugPanelVisible && debugCommandInput && document.activeElement === debugCommandInput) {
        debugCommandInput.blur();
      }
      if (!debugPanelVisible) {
        setDebugStatus(DEBUG_STATUS_DEFAULT);
      }
    }

    function focusDebugInput(selectText = true) {
      if (!debugCommandInput) return;
      debugCommandInput.focus();
      if (selectText) {
        debugCommandInput.select();
      }
    }

    function ensureDebugPanelVisible() {
      if (!debugPanelVisible) {
        setDebugPanelVisible(true);
      }
    }

    function setDebugStatus(message) {
      if (debugStatusEl) {
        debugStatusEl.textContent = message || DEBUG_STATUS_DEFAULT;
      }
    }

    function renderDebugChipsCard() {
      if (!debugCardListEl) return;
      let card = debugCardListEl.querySelector('[data-debug-card="chips"]');
      if (!card) {
        card = document.createElement('div');
        card.className = 'debug-card';
        card.dataset.debugCard = 'chips';
        card.innerHTML = `
          <div class="debug-card-title">Tier Chips</div>
          <div class="debug-chip-list"></div>
        `;
        debugCardListEl.appendChild(card);
      }
      const list = card.querySelector('.debug-chip-list');
      if (!list) return;
      list.innerHTML = '';
      const tiers = [
        { label: 'META', className: 'tier-s' },
        { label: 'META', className: 'tier-meta' },
        { label: 'A TIER', className: 'tier-a' },
        { label: 'B TIER', className: 'tier-b' },
        { label: 'C TIER', className: 'tier-c' },
        { label: 'D TIER', className: 'tier-d' },
        { label: 'F TIER', className: 'tier-f' }
      ];
      tiers.forEach((tier) => {
        const chip = document.createElement('span');
        chip.className = `chip ${tier.className}`;
        chip.textContent = tier.label;
        list.appendChild(chip);
      });
    }

    function handleDebugCommand(inputValue) {
      const raw = (inputValue || '').trim();
      if (!raw) {
        setDebugStatus('Enter a command (e.g., chips).');
        return;
      }
      const normalized = raw.toLowerCase();
      if (normalized === 'chips') {
        ensureDebugPanelVisible();
        renderDebugChipsCard();
        setDebugStatus('Rendering tier chip preview.');
      } else {
        setDebugStatus(`Unknown command "${raw}". Try: chips.`);
      }
    }

    if (debugCommandInput) {
      debugCommandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          handleDebugCommand(debugCommandInput.value);
          debugCommandInput.value = '';
        } else if (event.key === 'Escape') {
          setDebugPanelVisible(false);
        }
      });
    }

    if (debugPanelCloseBtn) {
      debugPanelCloseBtn.addEventListener('click', () => setDebugPanelVisible(false));
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === '/' && !event.altKey && !event.ctrlKey && !event.metaKey) {
        const active = document.activeElement;
        if (!isTextEntryElement(active)) {
          event.preventDefault();
          setDebugPanelVisible(true);
          focusDebugInput(true);
        }
      } else if (event.key === 'Escape' && debugPanelVisible && (!debugCommandInput || document.activeElement !== debugCommandInput)) {
        setDebugPanelVisible(false);
      }
    });

    window.addEventListener('resize', () => {
      trackers.forEach((tracker) => tracker.refreshLayout());
      resizeActiveChipFlames();
    });

    // UI Scale control & options setup
    (function setupUiScale() {
      const KEY = 'bf6-meta-ui-scale';
      const REDUCE_KEY = 'bf6-meta-reduce-animations';
      const OPTIONS_KEY = 'bf6-meta-options-visible';
      const valueEl = document.getElementById('uiScaleValue');
      const sliderEl = document.getElementById('uiScaleSlider');
      const optionsPanelEl = document.getElementById('uiScalePanel');
      const optionsGearBtn = document.getElementById('optionsGearButton');
      const reduceToggleEl = document.getElementById('reduceAnimationsToggle');
      const reduceToggleSwitch = reduceToggleEl ? reduceToggleEl.querySelector('.toggle-switch') : null;

      const MIN = 50;
      const MAX = 200;
      const STEP = 5;

      function loadBool(key, fallback) {
        if (!supportsLocalStorage()) return fallback;
        try {
          const stored = localStorage.getItem(key);
          if (stored === null || stored === undefined) return fallback;
          return stored === '1';
        } catch {
          return fallback;
        }
      }

      function saveBool(key, value) {
        if (!supportsLocalStorage()) return;
        try {
          localStorage.setItem(key, value ? '1' : '0');
        } catch (_) {}
      }

      function clampPercent(p) {
        p = Math.round(Number(p) || 100);
        if (p < MIN) p = MIN;
        if (p > MAX) p = MAX;
        return p;
      }

      function quantize(p) {
        const clamped = clampPercent(p);
        const stepsFromMin = Math.round((clamped - MIN) / STEP);
        return MIN + stepsFromMin * STEP;
      }

      function updateUiScaleUI(value, syncSlider = true) {
        if (valueEl) valueEl.textContent = value + '%';
        if (sliderEl) {
          if (syncSlider) sliderEl.value = String(value);
          const fill = ((value - MIN) / (MAX - MIN)) * 100;
          sliderEl.style.setProperty('--slider-fill', fill + '%');
          sliderEl.setAttribute('aria-valuenow', String(value));
        }
      }

      function applyScale(percent) {
        const p = quantize(percent);
        document.documentElement.style.setProperty('--ui-scale', (p / 100).toString());
        try { localStorage.setItem(KEY, String(p)); } catch (_) {}
        pendingScale = p;
        updateUiScaleUI(p);
      }

      let initial = 100;
      try {
        const raw = localStorage.getItem(KEY);
        const num = parseInt(raw || '100', 10);
        if (Number.isFinite(num)) initial = clampPercent(num);
      } catch (_) {}
      let pendingScale = initial;
      function applyReduceAnimationsPref(enabled) {
        document.documentElement.classList.toggle('reduce-animations', enabled);
        if (reduceToggleEl) {
          reduceToggleEl.setAttribute('aria-pressed', enabled ? 'true' : 'false');
        }
        if (reduceToggleSwitch) {
          reduceToggleSwitch.classList.toggle('on', enabled);
        }
        updateChipFlameReducedMotion();
      }

      function applyOptionsVisibility(visible) {
        if (!optionsPanelEl) return;
        optionsPanelEl.hidden = !visible;
        optionsPanelEl.classList.toggle('collapsed', !visible);
        optionsPanelEl.setAttribute('aria-hidden', visible ? 'false' : 'true');
        if (layoutGridEl) {
          layoutGridEl.classList.toggle('options-hidden', !visible);
        }
        if (optionsGearBtn) {
          optionsGearBtn.setAttribute('aria-expanded', visible ? 'true' : 'false');
          optionsGearBtn.setAttribute('aria-label', visible ? 'Hide options' : 'Show options');
        }
        if (floatingOptionsBtn) {
          floatingOptionsBtn.hidden = visible;
          floatingOptionsBtn.setAttribute('aria-hidden', visible ? 'true' : 'false');
          floatingOptionsBtn.setAttribute('aria-expanded', visible ? 'true' : 'false');
          floatingOptionsBtn.setAttribute('aria-label', visible ? 'Hide options' : 'Show options');
        }
      }

      const reducePref = loadBool(REDUCE_KEY, false);
      applyReduceAnimationsPref(reducePref);

      if (reduceToggleEl) {
        reduceToggleEl.addEventListener('click', () => {
          const next = reduceToggleEl.getAttribute('aria-pressed') !== 'true';
          applyReduceAnimationsPref(next);
          saveBool(REDUCE_KEY, next);
        });
      }

      const optionsVisible = loadBool(OPTIONS_KEY, true);
      applyOptionsVisibility(optionsVisible);

      if (optionsGearBtn && optionsPanelEl) {
        optionsGearBtn.addEventListener('click', () => {
          const currentlyVisible = !optionsPanelEl.hidden;
          const next = !currentlyVisible;
          applyOptionsVisibility(next);
          saveBool(OPTIONS_KEY, next);
        });
      }

      if (floatingOptionsBtn) {
        floatingOptionsBtn.addEventListener('click', () => {
          applyOptionsVisibility(true);
          saveBool(OPTIONS_KEY, true);
        });
      }

      if (sliderEl) {
        sliderEl.setAttribute('min', String(MIN));
        sliderEl.setAttribute('max', String(MAX));
        sliderEl.setAttribute('step', String(STEP));
        sliderEl.addEventListener('input', (event) => {
          const target = event.currentTarget;
          if (!(target instanceof HTMLInputElement)) return;
          const raw = Number(target.value);
          if (!Number.isFinite(raw)) return;
          const preview = quantize(raw);
          pendingScale = preview;
          updateUiScaleUI(preview, false);
        });
        const commitScale = () => applyScale(pendingScale);
        sliderEl.addEventListener('change', commitScale);
        sliderEl.addEventListener('pointerup', commitScale);
      }

      applyScale(initial);
    })();
})();

