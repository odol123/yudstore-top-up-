(() => {
  'use strict';

  document.documentElement.classList.add('js');

  /* =========================================================
     Data
     ========================================================= */
  const GAMES = [
    {
      id: 'mobile-legends',
      name: 'Mobile Legends',
      fullName: 'Mobile Legends: Bang Bang',
      publisher: 'Moonton',
      genre: 'MOBA',
      cover: 'assets/covers/mobile-legends.svg',
      accent: '#f2cf7d',
      badge: 'Terlaris',
      badgeClass: 'game-badge--hot',
      rating: '4.9',
      unit: 'Diamond',
      fields: [
        { id: 'userId', label: 'User ID', placeholder: 'Contoh: 123456789', hint: 'Buka profil, lalu salin User ID.', icon: 'icon-user', inputMode: 'numeric' },
        { id: 'zoneId', label: 'Zone ID', placeholder: 'Contoh: 1234', hint: 'Tertera di samping User ID.', icon: 'icon-user', inputMode: 'numeric' }
      ],
      packages: [
        { amount: 5, price: 1500 },
        { amount: 12, price: 3500 },
        { amount: 19, price: 5500 },
        { amount: 36, price: 10000 },
        { amount: 86, price: 21000, tag: 'Terlaris' },
        { amount: 172, price: 42000, tag: 'Hemat' }
      ]
    },
    {
      id: 'free-fire',
      name: 'Free Fire',
      fullName: 'Free Fire',
      publisher: 'Garena',
      genre: 'Battle Royale',
      cover: 'assets/covers/free-fire.svg',
      accent: '#ff9e5d',
      badge: 'Promo',
      badgeClass: '',
      rating: '4.8',
      unit: 'Diamond',
      fields: [
        { id: 'playerId', label: 'Player ID', placeholder: 'Contoh: 1234567890', hint: 'Buka profil, lalu salin ID pemain.', icon: 'icon-user', inputMode: 'numeric', full: true }
      ],
      packages: [
        { amount: 70, price: 10000 },
        { amount: 140, price: 20000 },
        { amount: 355, price: 50000, tag: 'Terlaris' },
        { amount: 720, price: 100000 },
        { amount: 1450, price: 200000, tag: 'Hemat' },
        { amount: 2180, price: 299000 }
      ]
    },
    {
      id: 'pubg-mobile',
      name: 'PUBG Mobile',
      fullName: 'PUBG Mobile',
      publisher: 'Level Infinite',
      genre: 'Battle Royale',
      cover: 'assets/covers/pubg-mobile.svg',
      accent: '#e8ca7f',
      badge: 'Terlaris',
      badgeClass: 'game-badge--hot',
      rating: '4.8',
      unit: 'UC',
      fields: [
        { id: 'playerId', label: 'Player ID', placeholder: 'Contoh: 5123456789', hint: 'Salin dari menu profil di game.', icon: 'icon-user', inputMode: 'numeric', full: true }
      ],
      packages: [
        { amount: 60, price: 15000 },
        { amount: 325, price: 75000, tag: 'Terlaris' },
        { amount: 660, price: 150000 },
        { amount: 1800, price: 390000 },
        { amount: 3850, price: 800000, tag: 'Hemat' },
        { amount: 8100, price: 1600000 }
      ]
    },
    {
      id: 'valorant',
      name: 'VALORANT',
      fullName: 'VALORANT',
      publisher: 'Riot Games',
      genre: 'FPS',
      cover: 'assets/covers/valorant.svg',
      accent: '#ff5a68',
      badge: 'Baru',
      badgeClass: 'game-badge--new',
      rating: '4.9',
      unit: 'VP',
      fields: [
        { id: 'riotId', label: 'Riot ID', placeholder: 'NamaKamu#TAG', hint: 'Sertakan tag setelah tanda #.', icon: 'icon-user', full: true }
      ],
      packages: [
        { amount: 420, price: 35000 },
        { amount: 700, price: 60000 },
        { amount: 1375, price: 115000, tag: 'Terlaris' },
        { amount: 2400, price: 200000 },
        { amount: 4000, price: 325000 },
        { amount: 8150, price: 650000, tag: 'Hemat' }
      ]
    },
    {
      id: 'genshin-impact',
      name: 'Genshin Impact',
      fullName: 'Genshin Impact',
      publisher: 'HoYoverse',
      genre: 'RPG',
      cover: 'assets/covers/genshin-impact.svg',
      accent: '#8fe3c7',
      badge: 'Populer',
      badgeClass: '',
      rating: '4.9',
      unit: 'Genesis Crystal',
      fields: [
        { id: 'uid', label: 'UID', placeholder: 'Contoh: 812345678', hint: 'UID terdiri dari 9 digit.', icon: 'icon-user', inputMode: 'numeric' },
        { id: 'server', label: 'Server', type: 'select', options: ['Asia', 'America', 'Europe', 'TW/HK/MO'], hint: 'Pilih server tempat kamu bermain.', icon: 'icon-gamepad' }
      ],
      packages: [
        { amount: 60, price: 16000 },
        { amount: 300, price: 75000 },
        { amount: 980, price: 235000, tag: 'Terlaris' },
        { amount: 1980, price: 465000 },
        { amount: 3280, price: 775000, tag: 'Hemat' },
        { amount: 6480, price: 1500000 }
      ]
    },
    {
      id: 'honkai-star-rail',
      name: 'Honkai: Star Rail',
      fullName: 'Honkai: Star Rail',
      publisher: 'HoYoverse',
      genre: 'RPG',
      cover: 'assets/covers/honkai-star-rail.svg',
      accent: '#c5a6ff',
      badge: 'Promo',
      badgeClass: '',
      rating: '4.8',
      unit: 'Oneiric Shard',
      fields: [
        { id: 'uid', label: 'UID', placeholder: 'Contoh: 812345678', hint: 'UID terdiri dari 9 digit.', icon: 'icon-user', inputMode: 'numeric' },
        { id: 'server', label: 'Server', type: 'select', options: ['Asia', 'America', 'Europe', 'TW/HK/MO'], hint: 'Pilih server tempat kamu bermain.', icon: 'icon-gamepad' }
      ],
      packages: [
        { amount: 60, price: 16000 },
        { amount: 300, price: 75000 },
        { amount: 980, price: 235000, tag: 'Terlaris' },
        { amount: 1980, price: 465000 },
        { amount: 3280, price: 775000 },
        { amount: 6480, price: 1500000, tag: 'Hemat' }
      ]
    },
    {
      id: 'cod-mobile',
      name: 'Call of Duty: Mobile',
      fullName: 'Call of Duty: Mobile',
      publisher: 'Activision',
      genre: 'FPS',
      cover: 'assets/covers/cod-mobile.svg',
      accent: '#b9cf94',
      badge: '',
      badgeClass: '',
      rating: '4.7',
      unit: 'CP',
      fields: [
        { id: 'playerId', label: 'Player ID', placeholder: 'Contoh: 6543210987654321', hint: 'Buka pengaturan, salin Player ID.', icon: 'icon-user', inputMode: 'numeric', full: true }
      ],
      packages: [
        { amount: 80, price: 15000 },
        { amount: 420, price: 75000 },
        { amount: 880, price: 150000, tag: 'Terlaris' },
        { amount: 2400, price: 400000 },
        { amount: 5000, price: 800000, tag: 'Hemat' },
        { amount: 10800, price: 1600000 }
      ]
    },
    {
      id: 'roblox',
      name: 'Roblox',
      fullName: 'Roblox',
      publisher: 'Roblox Corporation',
      genre: 'Sandbox',
      cover: 'assets/covers/roblox.svg',
      accent: '#ffb45d',
      badge: 'Baru',
      badgeClass: 'game-badge--new',
      rating: '4.8',
      unit: 'Robux',
      fields: [
        { id: 'username', label: 'Username Roblox', placeholder: 'Contoh: GamerNusantara', hint: 'Tanpa simbol @. Pastikan username benar.', icon: 'icon-user', full: true }
      ],
      packages: [
        { amount: 80, price: 15000 },
        { amount: 400, price: 70000 },
        { amount: 800, price: 135000, tag: 'Terlaris' },
        { amount: 1700, price: 280000 },
        { amount: 4500, price: 700000 },
        { amount: 10000, price: 1500000, tag: 'Hemat' }
      ]
    }
  ];

  const PAYMENTS = [
    { id: 'qris', name: 'QRIS', mark: 'QRIS', note: 'Semua e-wallet', type: 'qr', fee: 0 },
    { id: 'dana', name: 'DANA', mark: 'DANA', note: 'E-wallet', type: 'ewallet', fee: 0 },
    { id: 'gopay', name: 'GoPay', mark: 'GP', note: 'E-wallet', type: 'ewallet', fee: 0 },
    { id: 'ovo', name: 'OVO', mark: 'OVO', note: 'E-wallet', type: 'ewallet', fee: 0 },
    { id: 'shopeepay', name: 'ShopeePay', mark: 'SP', note: 'E-wallet', type: 'ewallet', fee: 0 },
    { id: 'bca', name: 'BCA Virtual Account', mark: 'BCA', note: 'Transfer bank', type: 'va', fee: 0 },
    { id: 'bni', name: 'BNI Virtual Account', mark: 'BNI', note: 'Transfer bank', type: 'va', fee: 0 },
    { id: 'alfamart', name: 'Alfamart', mark: 'ALF', note: 'Minimarket', type: 'store', fee: 2500 }
  ];

  const VOUCHER = { code: 'KILAT10', rate: 0.1, max: 20000 };
  const STORAGE_KEY = 'kilat_orders_v1';
  const PAYMENT_WINDOW_MINUTES = 15;

  const CATEGORIES = ['Semua', ...new Set(GAMES.map((game) => game.genre))];
  const CURRENCY = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  /* =========================================================
     State + DOM
     ========================================================= */
  const state = {
    category: 'Semua',
    query: '',
    activeGame: null,
    draft: null,
    currentOrder: null,
    orderTimer: null,
    clockTimer: null
  };

  const gameGrid = document.getElementById('gameGrid');
  const emptyState = document.getElementById('emptyState');
  const resultCount = document.getElementById('resultCount');
  const gameSearch = document.getElementById('gameSearch');
  const resetFilters = document.getElementById('resetFilters');
  const filterChips = [...document.querySelectorAll('.filter-chip')];
  const orderDialog = document.getElementById('orderDialog');
  const checkDialog = document.getElementById('checkDialog');
  const orderContent = document.getElementById('orderContent');
  const checkForm = document.getElementById('checkForm');
  const orderIdInput = document.getElementById('orderIdInput');
  const checkFeedback = document.getElementById('checkFeedback');
  const recentOrders = document.getElementById('recentOrders');
  const toastRegion = document.getElementById('toastRegion');
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const siteHeader = document.getElementById('siteHeader');

  /* =========================================================
     Helpers
     ========================================================= */
  function escapeHTML(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function formatCurrency(value) {
    return CURRENCY.format(Number(value) || 0);
  }

  function getGame(id) {
    return GAMES.find((game) => game.id === id) || null;
  }

  function getPayment(id) {
    return PAYMENTS.find((payment) => payment.id === id) || PAYMENTS[0];
  }

  function getStartingPrice(game) {
    return Math.min(...game.packages.map((item) => item.price));
  }

  function formatPackage(game, item) {
    return `${Number(item.amount).toLocaleString('id-ID')} ${game.unit}`;
  }

  function hydrateText(element, text) {
    if (element) element.textContent = text;
  }

  function iconMarkup(name, className = 'icon') {
    return `<svg class="${className}" aria-hidden="true"><use href="#${name}"></use></svg>`;
  }

  function formatLongDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '-';
    return new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  function formatShortDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '-';
    return new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  function formatCountdown(milliseconds) {
    const total = Math.max(0, Math.ceil(milliseconds / 1000));
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  function hashString(value) {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function mulberry32(seed) {
    let value = seed >>> 0;
    return function random() {
      value += 0x6D2B79F5;
      let result = value;
      result = Math.imul(result ^ (result >>> 15), result | 1);
      result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
      return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
    };
  }

  function deriveDigits(seed, length) {
    const random = mulberry32(hashString(seed));
    let result = '';
    for (let index = 0; index < length; index += 1) {
      result += String(Math.floor(random() * 10));
    }
    if (result[0] === '0') result = `8${result.slice(1)}`;
    return result;
  }

  function groupDigits(value, size = 4) {
    return String(value).replace(new RegExp(`(.{${size}})`, 'g'), '$1 ').trim();
  }

  function getStatusMeta(status) {
    const statuses = {
      pending: { label: 'Menunggu', tag: 'status-tag--pending', pill: 'status-pill--waiting' },
      success: { label: 'Berhasil', tag: 'status-tag--success', pill: 'status-pill--success' },
      expired: { label: 'Kedaluwarsa', tag: 'status-tag--expired', pill: 'status-pill--expired' }
    };
    return statuses[status] || statuses.pending;
  }

  function syncBodyLock() {
    const hasOpenDialog = [...document.querySelectorAll('dialog')].some((dialog) => dialog.open);
    document.body.classList.toggle('has-dialog', hasOpenDialog);
  }

  function showToast(title, message = '', type = 'success') {
    if (!toastRegion) return;
    const icons = { success: 'icon-check', error: 'icon-close', info: 'icon-info' };
    const toast = document.createElement('div');
    toast.className = `toast${type === 'error' || type === 'info' ? ` toast--${type}` : ''}`;
    toast.setAttribute('role', 'status');

    const icon = document.createElement('span');
    icon.className = 'toast-icon';
    icon.innerHTML = iconMarkup(icons[type] || icons.success);

    const content = document.createElement('div');
    content.className = 'toast-content';
    const strong = document.createElement('strong');
    strong.textContent = title;
    content.appendChild(strong);
    if (message) {
      const span = document.createElement('span');
      span.textContent = message;
      content.appendChild(span);
    }

    toast.append(icon, content);
    toastRegion.appendChild(toast);

    const toasts = [...toastRegion.querySelectorAll('.toast')];
    if (toasts.length > 3) toasts[0].remove();

    window.setTimeout(() => {
      toast.classList.add('is-leaving');
      window.setTimeout(() => toast.remove(), 300);
    }, 3600);
  }

  async function copyToClipboard(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (error) {
      // Fallback follows.
    }

    try {
      const helper = document.createElement('textarea');
      helper.value = text;
      helper.setAttribute('readonly', '');
      helper.style.position = 'fixed';
      helper.style.opacity = '0';
      document.body.appendChild(helper);
      helper.select();
      const copied = document.execCommand('copy');
      helper.remove();
      return copied;
    } catch (error) {
      return false;
    }
  }

  /* =========================================================
     Local order storage
     ========================================================= */
  function normalizeStoredOrders(orders) {
    const now = Date.now();
    let changed = false;
    const normalized = orders.map((order) => {
      if (!order || typeof order !== 'object' || !order.id) return null;
      if (order.status === 'pending' && new Date(order.expiresAt).getTime() <= now) {
        order.status = 'expired';
        changed = true;
      }
      return order;
    }).filter(Boolean);
    return { orders: normalized, changed };
  }

  function loadOrders() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      const { orders, changed } = normalizeStoredOrders(parsed);
      if (changed) {
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
        } catch (error) {
          // Ignore storage quota issues in this demo.
        }
      }
      return orders;
    } catch (error) {
      return [];
    }
  }

  function persistOrders(orders) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
      return true;
    } catch (error) {
      return false;
    }
  }

  function saveOrder(order) {
    const orders = loadOrders();
    const existingIndex = orders.findIndex((item) => item.id === order.id);
    if (existingIndex >= 0) orders[existingIndex] = order;
    else orders.unshift(order);
    persistOrders(orders);
  }

  function findOrder(orderId) {
    const normalizedId = String(orderId || '').trim().toUpperCase();
    if (!normalizedId) return null;
    return loadOrders().find((order) => String(order.id).toUpperCase() === normalizedId) || null;
  }

  /* =========================================================
     Catalog
     ========================================================= */
  function renderGameCard(game) {
    const badge = game.badge
      ? `<span class="game-badge ${game.badgeClass || ''}">${iconMarkup(game.badge === 'Terlaris' ? 'icon-bolt' : 'icon-spark')}${escapeHTML(game.badge)}</span>`
      : '';

    return `
      <button class="game-card" type="button" data-game-id="${escapeHTML(game.id)}" aria-haspopup="dialog" aria-label="Top up ${escapeHTML(game.name)}, mulai dari ${escapeHTML(formatCurrency(getStartingPrice(game)))}">
        <span class="game-card-media">
          <img src="${escapeHTML(game.cover)}" alt="" loading="lazy" width="640" height="820">
          ${badge}
          <span class="game-rating">${iconMarkup('icon-star')}${escapeHTML(game.rating)}</span>
          <span class="game-card-hover">${iconMarkup('icon-arrow-up-right')}</span>
        </span>
        <span class="game-card-info">
          <span class="game-card-copy">
            <h3>${escapeHTML(game.name)}</h3>
            <p>${escapeHTML(game.publisher)} · ${escapeHTML(game.genre)}</p>
          </span>
          <span class="game-card-price">
            <span>Mulai dari</span>
            <strong>${escapeHTML(formatCurrency(getStartingPrice(game)))}</strong>
          </span>
        </span>
      </button>
    `;
  }

  function renderGames() {
    if (!gameGrid) return;
    const query = state.query.trim().toLowerCase();
    const filteredGames = GAMES.filter((game) => {
      const matchesCategory = state.category === 'Semua' || game.genre === state.category;
      const haystack = `${game.name} ${game.fullName} ${game.publisher} ${game.genre}`.toLowerCase();
      const matchesQuery = !query || haystack.includes(query);
      return matchesCategory && matchesQuery;
    });

    gameGrid.innerHTML = filteredGames.map(renderGameCard).join('');
    const isEmpty = filteredGames.length === 0;
    if (emptyState) emptyState.hidden = !isEmpty;
    if (resultCount) {
      resultCount.textContent = isEmpty
        ? 'Tidak ada game yang cocok'
        : `Menampilkan ${filteredGames.length} game${query ? ` untuk “${state.query.trim()}”` : ''}`;
    }
  }

  function setCategory(category) {
    state.category = category;
    filterChips.forEach((chip) => {
      const active = chip.dataset.category === category;
      chip.classList.toggle('is-active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    renderGames();
  }

  function resetAllFilters() {
    state.query = '';
    if (gameSearch) gameSearch.value = '';
    setCategory('Semua');
    if (gameSearch) gameSearch.focus();
  }

  /* =========================================================
     Clocks, navigation, reveal
     ========================================================= */
  function startClocks() {
    const announcementCountdown = document.getElementById('announcementCountdown');
    const promoCountdown = document.getElementById('promoCountdown');

    const tick = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      const remaining = Math.max(0, endOfDay.getTime() - now.getTime());
      const hours = String(Math.floor(remaining / 3600000)).padStart(2, '0');
      const minutes = String(Math.floor((remaining % 3600000) / 60000)).padStart(2, '0');
      const seconds = String(Math.floor((remaining % 60000) / 1000)).padStart(2, '0');
      const value = `${hours}:${minutes}:${seconds}`;
      hydrateText(announcementCountdown, value);
      hydrateText(promoCountdown, value);
    };

    tick();
    window.clearInterval(state.clockTimer);
    state.clockTimer = window.setInterval(tick, 1000);

    const year = document.getElementById('currentYear');
    hydrateText(year, String(new Date().getFullYear()));
  }

  function closeMobileMenu() {
    if (!mainNav || !navToggle) return;
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Buka menu');
  }

  function setupNavigation() {
    if (navToggle && mainNav) {
      navToggle.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
      });

      mainNav.querySelectorAll('a, button').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
      });

      document.addEventListener('click', (event) => {
        if (!mainNav.classList.contains('is-open')) return;
        if (mainNav.contains(event.target) || navToggle.contains(event.target)) return;
        closeMobileMenu();
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 900) closeMobileMenu();
      });
    }

    const onScroll = () => {
      if (siteHeader) siteHeader.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const navLinks = [...document.querySelectorAll('.main-nav .nav-link[href^="#"]')];
    const sections = navLinks
      .map((link) => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    if ('IntersectionObserver' in window && sections.length) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        });
      }, { rootMargin: '-30% 0px -62% 0px', threshold: 0 });

      sections.forEach((section) => sectionObserver.observe(section));
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mainNav && mainNav.classList.contains('is-open')) {
        closeMobileMenu();
        navToggle.focus();
      }

      if (event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey) {
        const target = event.target;
        const isTyping = target instanceof HTMLElement
          && (target.matches('input, textarea, select') || target.isContentEditable);
        const dialogOpen = [...document.querySelectorAll('dialog')].some((dialog) => dialog.open);
        if (!isTyping && !dialogOpen && gameSearch) {
          event.preventDefault();
          gameSearch.focus();
          gameSearch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }

  function setupReveal() {
    const elements = [...document.querySelectorAll('.reveal')];
    if (!elements.length) return;

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -7% 0px', threshold: 0.08 });

    elements.forEach((element) => revealObserver.observe(element));
  }

  /* =========================================================
     Order — shared helpers
     ========================================================= */
  function clearOrderTimer() {
    if (state.orderTimer) {
      window.clearInterval(state.orderTimer);
      state.orderTimer = null;
    }
  }

  function paymentMarkMarkup(payment, extraClass = '') {
    return `<span class="payment-mark payment-mark--${escapeHTML(payment.id)} ${extraClass}">${escapeHTML(payment.mark)}</span>`;
  }

  function accountSummary(game, account) {
    if (!game || !account) return 'Belum diisi';
    const parts = game.fields
      .map((field) => {
        const value = String(account[field.id] || '').trim();
        return value ? `${field.label}: ${value}` : '';
      })
      .filter(Boolean);
    return parts.length ? parts.join(' · ') : 'Belum diisi';
  }

  function getDraftPackage() {
    if (!state.draft || state.draft.packageIndex === null) return null;
    return state.draft.game.packages[state.draft.packageIndex] || null;
  }

  function calculateDraftTotals() {
    const draft = state.draft;
    if (!draft) return { subtotal: 0, fee: 0, discount: 0, total: 0 };
    const packageItem = getDraftPackage();
    const payment = getPayment(draft.paymentId);
    const subtotal = packageItem ? packageItem.price : 0;
    const fee = packageItem ? payment.fee : 0;
    const discount = packageItem && draft.voucherApplied
      ? Math.min(Math.round(subtotal * VOUCHER.rate), VOUCHER.max)
      : 0;
    const total = Math.max(0, subtotal + fee - discount);
    return { subtotal, fee, discount, total, packageItem, payment };
  }

  function generateOrderId() {
    const now = new Date();
    const date = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, '0'),
      String(now.getDate()).padStart(2, '0')
    ].join('');
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const existingIds = new Set(loadOrders().map((order) => order.id));
    let candidate;

    do {
      let suffix = '';
      const randomValues = new Uint32Array(4);
      if (window.crypto && window.crypto.getRandomValues) {
        window.crypto.getRandomValues(randomValues);
        suffix = [...randomValues].map((value) => alphabet[value % alphabet.length]).join('');
      } else {
        suffix = Array.from({ length: 4 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
      }
      candidate = `KLT-${date}-${suffix}`;
    } while (existingIds.has(candidate));

    return candidate;
  }

  function buildPendingOrder() {
    const draft = state.draft;
    if (!draft) return null;
    const packageItem = getDraftPackage();
    if (!packageItem) return null;
    const totals = calculateDraftTotals();
    const game = draft.game;
    const payment = getPayment(draft.paymentId);
    const now = new Date();

    const order = {
      id: generateOrderId(),
      gameId: game.id,
      gameName: game.name,
      gameCover: game.cover,
      gameUnit: game.unit,
      packageIndex: draft.packageIndex,
      packageAmount: packageItem.amount,
      packageLabel: formatPackage(game, packageItem),
      subtotal: totals.subtotal,
      paymentFee: totals.fee,
      discount: totals.discount,
      total: totals.total,
      paymentId: payment.id,
      paymentName: payment.name,
      voucherCode: draft.voucherApplied ? VOUCHER.code : null,
      account: { ...draft.account },
      status: 'pending',
      createdAt: now.toISOString(),
      expiresAt: new Date(now.getTime() + PAYMENT_WINDOW_MINUTES * 60_000).toISOString(),
      paidAt: null
    };

    saveOrder(order);
    return order;
  }

  /* =========================================================
     Order — form rendering
     ========================================================= */
  function openOrderModal(gameId) {
    const game = getGame(gameId);
    if (!game || !orderDialog) return;

    if (checkDialog && checkDialog.open) checkDialog.close();
    clearOrderTimer();

    state.activeGame = game;
    state.currentOrder = null;
    state.draft = {
      game,
      account: {},
      packageIndex: null,
      paymentId: 'qris',
      voucherApplied: false,
      termsAccepted: false
    };

    renderOrderForm();

    if (!orderDialog.open) orderDialog.showModal();
    syncBodyLock();
    if (orderContent) orderContent.scrollTop = 0;
  }

  function renderOrderForm() {
    if (!state.draft || !orderContent) return;
    const game = state.draft.game;

    orderContent.innerHTML = `
      <div class="order-top" style="--game-accent: ${escapeHTML(game.accent)}">
        <div class="order-top-main">
          <div class="order-cover"><img src="${escapeHTML(game.cover)}" alt="" width="640" height="820"></div>
          <div>
            <span class="order-kicker">TOP UP INSTAN</span>
            <h2 id="orderDialogTitle">${escapeHTML(game.name)}</h2>
            <div class="order-meta">
              <span>${escapeHTML(game.publisher)}</span><i></i>
              <span>${escapeHTML(game.genre)}</span><i></i>
              <span>Proses otomatis</span>
            </div>
          </div>
        </div>
        <div class="order-trust">
          <span>${iconMarkup('icon-shield')}Pembayaran aman</span>
          <span>${iconMarkup('icon-bolt')}Proses instan</span>
        </div>
      </div>

      <div class="order-body">
        <div class="order-form-col">
          <section class="form-block">
            <div class="form-block-head">
              <span class="form-number">01</span>
              <div><h3>Data akun</h3><p>Isi sesuai data di dalam game, ya.</p></div>
            </div>
            <div class="form-fields">
              ${game.fields.map((field) => renderAccountField(game, field)).join('')}
            </div>
            <div class="account-note">
              ${iconMarkup('icon-shield')}
              <span>Kami tidak pernah meminta password atau kode OTP. Pastikan ID tujuan sudah benar sebelum membayar.</span>
            </div>
          </section>

          <section class="form-block" id="packageSection">
            <div class="form-block-head">
              <span class="form-number">02</span>
              <div><h3>Pilih nominal ${escapeHTML(game.unit)}</h3><p>Harga sudah termasuk pajak. Tanpa biaya tersembunyi.</p></div>
            </div>
            <div class="package-grid" id="packageGrid">
              ${game.packages.map((item, index) => renderPackageOption(game, item, index)).join('')}
            </div>
          </section>

          <section class="form-block">
            <div class="form-block-head">
              <span class="form-number">03</span>
              <div><h3>Metode pembayaran</h3><p>Pilih cara bayar yang paling nyaman untukmu.</p></div>
            </div>
            <div class="payment-grid" id="paymentGrid">
              ${PAYMENTS.map((payment) => renderPaymentOption(payment)).join('')}
            </div>
          </section>
        </div>

        <aside class="summary-col">
          <div class="summary-card">
            <div class="summary-head">
              <h3>Ringkasan pesanan</h3>
              <span class="summary-status" id="summaryStatus">Belum dibayar</span>
            </div>
            <div class="summary-product">
              <div class="summary-cover"><img src="${escapeHTML(game.cover)}" alt="" width="640" height="820"></div>
              <div class="summary-product-info">
                <small>${escapeHTML(game.publisher)}</small>
                <strong>${escapeHTML(game.name)}</strong>
                <span class="summary-package" id="summaryPackage">Pilih nominal</span>
              </div>
            </div>
            <div class="summary-divider"></div>
            <div class="summary-row"><span>Harga item</span><strong id="summarySubtotal">—</strong></div>
            <div class="summary-row"><span>Biaya layanan</span><strong id="summaryFee">Rp 0</strong></div>
            <div class="summary-row"><span>Akun tujuan</span><strong id="summaryTarget">Belum diisi</strong></div>
            <div class="voucher-box" id="voucherBox">${renderVoucherBox()}</div>
            <div class="summary-row summary-row--discount" id="summaryDiscountRow" hidden><span>Diskon voucher</span><strong id="summaryDiscount">-</strong></div>
            <div class="summary-total"><span>Total pembayaran</span><strong id="summaryTotal">Rp 0</strong></div>
            <label class="check-row" id="termsRow">
              <input type="checkbox" id="termsCheck" aria-required="true">
              <span class="check-box">${iconMarkup('icon-check')}</span>
              <span>Saya sudah memastikan data akun dan nominal top up sudah benar.</span>
            </label>
            <button class="btn btn-primary btn-block checkout-btn" id="checkoutButton" type="button">
              Lanjut ke Pembayaran
              ${iconMarkup('icon-arrow-right')}
            </button>
            <div class="summary-secure">${iconMarkup('icon-lock')}Pembayaran diproses dengan aman</div>
            <p class="summary-secure-note">Dengan melanjutkan, kamu menyetujui syarat dan ketentuan YUDSTORE.</p>
          </div>
        </aside>
      </div>
    `;
  }

  function renderAccountField(game, field) {
    const inputId = `field-${game.id}-${field.id}`;
    const hintId = `${inputId}-hint`;
    const errorId = `${inputId}-error`;
    const fullClass = field.full ? ' field--full' : '';
    let control;

    if (field.type === 'select') {
      control = `
        <div class="select-wrap">
          <select class="field-input" id="${inputId}" data-field="${escapeHTML(field.id)}" aria-required="true" aria-describedby="${hintId}" aria-invalid="false">
            <option value="">Pilih ${escapeHTML(field.label)}</option>
            ${field.options.map((option) => `<option value="${escapeHTML(option)}">${escapeHTML(option)}</option>`).join('')}
          </select>
          ${iconMarkup('icon-chevron-down')}
        </div>
      `;
    } else {
      const inputMode = field.inputMode ? ` inputmode="${escapeHTML(field.inputMode)}"` : '';
      control = `
        <div class="input-wrap">
          ${iconMarkup(field.icon || 'icon-user')}
          <input class="field-input" id="${inputId}" type="text" data-field="${escapeHTML(field.id)}" placeholder="${escapeHTML(field.placeholder || '')}" autocomplete="off" spellcheck="false"${inputMode} aria-required="true" aria-describedby="${hintId}" aria-invalid="false">
        </div>
      `;
    }

    return `
      <div class="field${fullClass}" data-field-wrap="${escapeHTML(field.id)}">
        <label for="${inputId}">${escapeHTML(field.label)} <span class="required-mark">*</span></label>
        ${control}
        <span class="field-hint" id="${hintId}">${escapeHTML(field.hint || '')}</span>
        <span class="field-error" id="${errorId}" role="alert"></span>
      </div>
    `;
  }

  function renderPackageOption(game, item, index) {
    return `
      <button class="package-option" type="button" data-package-index="${index}" aria-pressed="false" aria-label="Pilih ${escapeHTML(formatPackage(game, item))}, ${escapeHTML(formatCurrency(item.price))}">
        <span class="package-unit">${iconMarkup('icon-diamond')}</span>
        <span class="package-info">
          <strong>${escapeHTML(formatPackage(game, item))}${item.tag ? `<span class="package-tag">${escapeHTML(item.tag)}</span>` : ''}</strong>
          <span>${escapeHTML(formatCurrency(item.price))}</span>
        </span>
        <span class="package-check">${iconMarkup('icon-check')}</span>
      </button>
    `;
  }

  function renderPaymentOption(payment) {
    const selected = payment.id === state.draft.paymentId;
    const feeNote = payment.fee > 0 ? ` · +${formatCurrency(payment.fee)}` : '';
    return `
      <button class="payment-option${selected ? ' is-selected' : ''}" type="button" data-payment-id="${escapeHTML(payment.id)}" aria-pressed="${selected}" aria-label="${escapeHTML(payment.name)}, ${escapeHTML(payment.note)}">
        ${paymentMarkMarkup(payment)}
        <span class="pay-info">
          <strong>${escapeHTML(payment.name)}</strong>
          <small>${escapeHTML(payment.note)}${escapeHTML(feeNote)}</small>
        </span>
        <span class="radio-dot"></span>
      </button>
    `;
  }

  function renderVoucherBox() {
    if (state.draft && state.draft.voucherApplied) {
      return `
        <label>Kode promo</label>
        <div class="voucher-applied">
          <span>${iconMarkup('icon-check')}${VOUCHER.code} aktif</span>
          <button type="button" data-remove-voucher>Hapus</button>
        </div>
        <p class="voucher-feedback is-success">Diskon 10% diterapkan. Maks. ${formatCurrency(VOUCHER.max)}.</p>
      `;
    }

    return `
      <label for="voucherInput">Kode promo</label>
      <form class="voucher-form" id="voucherForm" novalidate>
        <input id="voucherInput" type="text" placeholder="Punya kode promo?" autocomplete="off" spellcheck="false" maxlength="20" aria-label="Kode promo">
        <button class="btn btn-soft" type="submit">Pakai</button>
      </form>
      <p class="voucher-feedback" id="voucherFeedback"></p>
    `;
  }

  function updateOrderSummary() {
    if (!state.draft) return;
    const totals = calculateDraftTotals();
    const packageItem = totals.packageItem;
    const game = state.draft.game;
    const account = accountSummary(game, state.draft.account);

    const packageLabel = document.getElementById('summaryPackage');
    if (packageLabel) packageLabel.textContent = packageItem ? formatPackage(game, packageItem) : 'Pilih nominal';

    const subtotal = document.getElementById('summarySubtotal');
    if (subtotal) subtotal.textContent = packageItem ? formatCurrency(totals.subtotal) : '—';

    const fee = document.getElementById('summaryFee');
    if (fee) fee.textContent = formatCurrency(totals.fee);

    const target = document.getElementById('summaryTarget');
    if (target) {
      target.textContent = account;
      target.title = account;
    }

    const discountRow = document.getElementById('summaryDiscountRow');
    const discountValue = document.getElementById('summaryDiscount');
    if (discountRow && discountValue) {
      discountRow.hidden = totals.discount <= 0;
      discountValue.textContent = `-${formatCurrency(totals.discount)}`;
    }

    const total = document.getElementById('summaryTotal');
    if (total) total.textContent = formatCurrency(totals.total);

    const status = document.getElementById('summaryStatus');
    if (status) status.textContent = packageItem ? 'Siap dibayar' : 'Belum dibayar';
  }

  function markSelectedPackage(index) {
    document.querySelectorAll('.package-option').forEach((option) => {
      const selected = Number(option.dataset.packageIndex) === index;
      option.classList.toggle('is-selected', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
  }

  function markSelectedPayment(paymentId) {
    document.querySelectorAll('.payment-option').forEach((option) => {
      const selected = option.dataset.paymentId === paymentId;
      option.classList.toggle('is-selected', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
  }

  function clearFieldError(field) {
    if (!field) return;
    field.classList.remove('has-error');
    const input = field.querySelector('[data-field]');
    if (input) input.setAttribute('aria-invalid', 'false');
  }

  function validateOrderForm() {
    if (!state.draft) return false;
    const game = state.draft.game;
    let firstInvalidInput = null;
    let missingPackage = false;
    let missingTerms = false;

    orderContent.querySelectorAll('.field.has-error').forEach((field) => clearFieldError(field));

    game.fields.forEach((fieldConfig) => {
      const value = String(state.draft.account[fieldConfig.id] || '').trim();
      if (value) return;
      const field = orderContent.querySelector(`[data-field-wrap="${fieldConfig.id}"]`);
      if (!field) return;
      field.classList.add('has-error');
      const input = field.querySelector('[data-field]');
      if (input) {
        input.setAttribute('aria-invalid', 'true');
        if (!firstInvalidInput) firstInvalidInput = input;
      }
      const error = field.querySelector('.field-error');
      if (error) {
        error.textContent = fieldConfig.type === 'select'
          ? `Pilih ${fieldConfig.label.toLowerCase()} terlebih dahulu.`
          : `${fieldConfig.label} wajib diisi.`;
      }
    });

    if (state.draft.packageIndex === null) missingPackage = true;
    if (!state.draft.termsAccepted) missingTerms = true;

    if (firstInvalidInput || missingPackage || missingTerms) {
      if (missingTerms) {
        const termsRow = document.getElementById('termsRow');
        if (termsRow) termsRow.classList.add('has-error');
      }

      if (firstInvalidInput) {
        showToast('Data akun belum lengkap', 'Isi semua data yang wajib diisi.', 'error');
        firstInvalidInput.focus({ preventScroll: true });
        firstInvalidInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (missingPackage) {
        showToast('Nominal belum dipilih', 'Pilih nominal top up terlebih dahulu.', 'info');
        const packageGrid = document.getElementById('packageGrid');
        if (packageGrid) {
          packageGrid.classList.remove('needs-attention');
          void packageGrid.offsetWidth;
          packageGrid.classList.add('needs-attention');
          packageGrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        showToast('Konfirmasi dulu, ya', 'Centang pernyataan bahwa data akun sudah benar.', 'error');
        const terms = document.getElementById('termsCheck');
        if (terms) terms.focus({ preventScroll: true });
      }

      return false;
    }

    return true;
  }

  function handleCheckout() {
    if (!validateOrderForm()) return;
    const order = buildPendingOrder();
    if (!order) {
      showToast('Terjadi kendala', 'Pesanan belum bisa dibuat. Coba lagi.', 'error');
      return;
    }

    state.currentOrder = order;
    renderPaymentView(order);
    showToast('Pesanan dibuat', 'Selesaikan pembayaran dalam 15 menit.', 'success');
  }

  /* =========================================================
     Order events
     ========================================================= */
  if (orderContent) {
    orderContent.addEventListener('input', (event) => {
      const input = event.target.closest('[data-field]');
      if (!input || !state.draft) return;
      state.draft.account[input.dataset.field] = input.value;
      clearFieldError(input.closest('.field'));
      updateOrderSummary();
    });

    orderContent.addEventListener('change', (event) => {
      const select = event.target.closest('select[data-field]');
      if (select && state.draft) {
        state.draft.account[select.dataset.field] = select.value;
        clearFieldError(select.closest('.field'));
        updateOrderSummary();
      }

      if (event.target.id === 'termsCheck' && state.draft) {
        state.draft.termsAccepted = event.target.checked;
        const termsRow = document.getElementById('termsRow');
        if (termsRow) termsRow.classList.remove('has-error');
      }
    });

    orderContent.addEventListener('click', (event) => {
      const packageOption = event.target.closest('[data-package-index]');
      if (packageOption && state.draft) {
        state.draft.packageIndex = Number(packageOption.dataset.packageIndex);
        markSelectedPackage(state.draft.packageIndex);
        updateOrderSummary();
        const grid = document.getElementById('packageGrid');
        if (grid) grid.classList.remove('needs-attention');
        return;
      }

      const paymentOption = event.target.closest('[data-payment-id]');
      if (paymentOption && state.draft) {
        state.draft.paymentId = paymentOption.dataset.paymentId;
        markSelectedPayment(state.draft.paymentId);
        updateOrderSummary();
        return;
      }

      const removeVoucher = event.target.closest('[data-remove-voucher]');
      if (removeVoucher && state.draft) {
        state.draft.voucherApplied = false;
        const voucherBox = document.getElementById('voucherBox');
        if (voucherBox) voucherBox.innerHTML = renderVoucherBox();
        updateOrderSummary();
        showToast('Voucher dihapus', 'Kamu masih bisa memakai kode lain.', 'info');
        return;
      }

      if (event.target.closest('#checkoutButton')) {
        handleCheckout();
        return;
      }

      if (event.target.closest('#simulatePayment')) {
        completeSimulatedOrder();
      }
    });

    orderContent.addEventListener('submit', (event) => {
      if (!event.target.matches('#voucherForm')) return;
      event.preventDefault();
      if (!state.draft) return;
      const input = event.target.querySelector('#voucherInput');
      const feedback = document.getElementById('voucherFeedback');
      const code = String(input ? input.value : '').trim().toUpperCase();

      if (code === VOUCHER.code) {
        state.draft.voucherApplied = true;
        const voucherBox = document.getElementById('voucherBox');
        if (voucherBox) voucherBox.innerHTML = renderVoucherBox();
        updateOrderSummary();
        showToast('Voucher berhasil dipakai', 'Diskon 10% langsung diterapkan.', 'success');
        return;
      }

      if (feedback) {
        feedback.classList.remove('is-success');
        feedback.textContent = code
          ? 'Kode promo tidak valid atau sudah kedaluwarsa.'
          : 'Masukkan kode promo terlebih dahulu.';
      }
      if (input) input.focus();
    });
  }

  /* =========================================================
     Payment instructions
     ========================================================= */
  function getRemainingTime(order) {
    const expiresAt = new Date(order.expiresAt).getTime();
    if (Number.isNaN(expiresAt)) return 0;
    return Math.max(0, expiresAt - Date.now());
  }

  function generateFakeQR(seed) {
    const random = mulberry32(hashString(seed));
    const size = 29;
    const cells = [];
    const inQuietCenter = (x, y) => x >= 11 && x <= 17 && y >= 11 && y <= 17;

    const finderValue = (x, y, originX, originY) => {
      const localX = x - originX;
      const localY = y - originY;
      if (localX < 0 || localX > 6 || localY < 0 || localY > 6) return null;
      const border = localX === 0 || localX === 6 || localY === 0 || localY === 6;
      const center = localX >= 2 && localX <= 4 && localY >= 2 && localY <= 4;
      return border || center;
    };

    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        if (inQuietCenter(x, y)) continue;
        const finder = finderValue(x, y, 0, 0)
          ?? finderValue(x, y, size - 7, 0)
          ?? finderValue(x, y, 0, size - 7);
        if (finder !== null) {
          if (finder) cells.push(`<rect x="${x}.08" y="${y}.08" width=".84" height=".84" rx=".12"/>`);
          continue;
        }

        if (y === 6 && x > 7 && x < size - 8) {
          if (x % 2 === 0) cells.push(`<rect x="${x}.08" y="${y}.08" width=".84" height=".84" rx=".12"/>`);
          continue;
        }
        if (x === 6 && y > 7 && y < size - 8) {
          if (y % 2 === 0) cells.push(`<rect x="${x}.08" y="${y}.08" width=".84" height=".84" rx=".12"/>`);
          continue;
        }

        if (random() > 0.52) {
          cells.push(`<rect x="${x}.08" y="${y}.08" width=".84" height=".84" rx=".12"/>`);
        }
      }
    }

    return `<svg viewBox="0 0 ${size} ${size}" role="img" aria-label="Kode QR simulasi pembayaran" xmlns="http://www.w3.org/2000/svg"><rect width="${size}" height="${size}" fill="#ffffff"/><g fill="#12161b">${cells.join('')}</g></svg>`;
  }

  function buildPaymentInstructions(order, payment) {
    let body = '';
    let steps = [];

    if (payment.type === 'qr') {
      body = `
        <div class="qr-block">
          <div class="qr-frame">
            ${generateFakeQR(order.id)}
            <span class="qr-logo">QRIS</span>
          </div>
          <div class="qr-caption">
            <strong>Scan untuk membayar</strong>
            <span>Nominal ${escapeHTML(formatCurrency(order.total))}</span>
          </div>
        </div>
      `;
      steps = [
        'Buka aplikasi e-wallet atau m-banking favoritmu.',
        'Pilih menu Scan QR, lalu arahkan kamera ke kode QR di atas.',
        'Periksa nominal dan selesaikan pembayaran.'
      ];
    } else if (payment.type === 'va') {
      const number = groupDigits(deriveDigits(`${order.id}-${payment.id}`, 16));
      body = `
        <div class="transfer-block">
          <span class="transfer-icon">${iconMarkup('icon-bank')}</span>
          <span>${escapeHTML(payment.name)}</span>
          <div class="numeric-code">
            <strong>${escapeHTML(number)}</strong>
            <button class="copy-button" type="button" data-copy-text="${escapeHTML(number)}" data-copy-label="Nomor Virtual Account" aria-label="Salin nomor Virtual Account">${iconMarkup('icon-copy')}</button>
          </div>
          <span class="transfer-hint">Nomor ini khusus untuk pesananmu. Bayar sesuai nominal tepat sampai 3 digit terakhir.</span>
        </div>
      `;
      steps = [
        `Buka aplikasi m-banking dan pilih menu transfer.`,
        `Pilih ${payment.name.split(' ')[0]} Virtual Account.`,
        'Masukkan nomor di atas dan konfirmasi nominal pembayaran.'
      ];
    } else if (payment.type === 'ewallet') {
      const code = groupDigits(deriveDigits(`${order.id}-${payment.id}`, 12));
      body = `
        <div class="transfer-block">
          <span class="transfer-icon">${iconMarkup('icon-wallet')}</span>
          <span>Kode pembayaran ${escapeHTML(payment.name)}</span>
          <div class="numeric-code">
            <strong>${escapeHTML(code)}</strong>
            <button class="copy-button" type="button" data-copy-text="${escapeHTML(code)}" data-copy-label="Kode pembayaran" aria-label="Salin kode pembayaran">${iconMarkup('icon-copy')}</button>
          </div>
          <span class="transfer-hint">Masukkan kode ini di aplikasi ${escapeHTML(payment.name)} atau gunakan tombol simulasi di samping.</span>
        </div>
      `;
      steps = [
        `Buka aplikasi ${payment.name} di ponselmu.`,
        'Pilih menu pembayaran, lalu masukkan kode pembayaran di atas.',
        'Periksa nominal dan konfirmasi pembayaran.'
      ];
    } else {
      const code = groupDigits(deriveDigits(`${order.id}-${payment.id}`, 12));
      body = `
        <div class="transfer-block">
          <span class="transfer-icon">${iconMarkup('icon-store')}</span>
          <span>Kode pembayaran ${escapeHTML(payment.name)}</span>
          <div class="numeric-code">
            <strong>${escapeHTML(code)}</strong>
            <button class="copy-button" type="button" data-copy-text="${escapeHTML(code)}" data-copy-label="Kode pembayaran" aria-label="Salin kode pembayaran">${iconMarkup('icon-copy')}</button>
          </div>
          <span class="transfer-hint">Tunjukkan kode ini ke kasir. Pembayaran tunai dikenakan biaya layanan ${escapeHTML(formatCurrency(payment.fee))}.</span>
        </div>
      `;
      steps = [
        `Datang ke gerai ${payment.name} terdekat.`,
        'Sebutkan atau tunjukkan kode pembayaran kepada kasir.',
        'Bayar sesuai nominal dan simpan struk pembayaran.'
      ];
    }

    return {
      body,
      steps: steps.map((step) => `<li>${escapeHTML(step)}</li>`).join('')
    };
  }

  /* =========================================================
     Payment view
     ========================================================= */
  function renderPaymentView(order) {
    const game = getGame(order.gameId);
    if (!game || !orderContent) return;
    clearOrderTimer();
    state.currentOrder = order;
    state.activeGame = game;

    if (getRemainingTime(order) <= 0) {
      if (order.status === 'pending') {
        order.status = 'expired';
        saveOrder(order);
      }
      renderExpiredOrderView(order);
      return;
    }

    const payment = getPayment(order.paymentId);
    const account = accountSummary(game, order.account);
    const instructions = buildPaymentInstructions(order, payment);
    const remaining = getRemainingTime(order);

    orderContent.innerHTML = `
      <div class="payment-view">
        <div class="payment-view-head">
          <div class="payment-status-row">
            <span class="status-pill status-pill--waiting"><span class="live-dot"></span>Menunggu pembayaran</span>
            <span class="payment-id-mini">ID Pesanan <strong>${escapeHTML(order.id)}</strong></span>
          </div>
          <h2 id="orderDialogTitle">Selesaikan pembayaranmu</h2>
          <p>Pesanan akan otomatis kedaluwarsa jika tidak dibayar. Item dikirim otomatis setelah pembayaran berhasil.</p>
        </div>

        <div class="payment-view-grid">
          <section class="payment-instruction-card">
            <div class="payment-instruction-head">
              ${paymentMarkMarkup(payment)}
              <div>
                <span>Metode pembayaran</span>
                <strong>${escapeHTML(payment.name)}</strong>
              </div>
              <span class="instant-badge">Instan</span>
            </div>
            <div class="payment-instruction-body">${instructions.body}</div>
            <ol class="payment-steps">${instructions.steps}</ol>
            <p class="demo-note">${iconMarkup('icon-info')}Mode demo — jangan melakukan pembayaran sungguhan.</p>
          </section>

          <aside class="payment-summary">
            <div class="countdown-row">
              <span>Bayar sebelum</span>
              <strong class="countdown-value${remaining <= 120000 ? ' is-low' : ''}" id="paymentCountdown">${formatCountdown(remaining)}</strong>
            </div>
            <div class="payment-game-row">
              <div class="summary-cover"><img src="${escapeHTML(game.cover)}" alt="" width="640" height="820"></div>
              <div class="summary-product-info">
                <small>${escapeHTML(game.publisher)}</small>
                <strong>${escapeHTML(game.name)}</strong>
                <span class="summary-package">${escapeHTML(order.packageLabel)}</span>
              </div>
            </div>
            <div class="payment-summary-details">
              <div class="payment-detail-row"><span>ID Pesanan</span><strong>${escapeHTML(order.id)}</strong></div>
              <div class="payment-detail-row"><span>Akun tujuan</span><strong>${escapeHTML(account)}</strong></div>
              <div class="payment-detail-row"><span>Metode</span><strong>${escapeHTML(payment.name)}</strong></div>
              ${order.paymentFee > 0 ? `<div class="payment-detail-row"><span>Biaya layanan</span><strong>${escapeHTML(formatCurrency(order.paymentFee))}</strong></div>` : ''}
              ${order.discount > 0 ? `<div class="payment-detail-row"><span>Diskon voucher</span><strong>-${escapeHTML(formatCurrency(order.discount))}</strong></div>` : ''}
            </div>
            <div class="payment-amount">
              <span>Total pembayaran</span>
              <strong>${escapeHTML(formatCurrency(order.total))}</strong>
            </div>
            <button class="btn btn-primary btn-block" id="simulatePayment" type="button">
              Simulasikan Pembayaran
              ${iconMarkup('icon-arrow-right')}
            </button>
            <p class="demo-note">${iconMarkup('icon-info')}Klik tombol di atas untuk mensimulasikan pembayaran berhasil.</p>
          </aside>
        </div>
      </div>
    `;

    orderContent.scrollTop = 0;
    startPaymentCountdown(order);
  }

  function startPaymentCountdown(order) {
    clearOrderTimer();
    const countdown = document.getElementById('paymentCountdown');
    if (!countdown) return;

    const tick = () => {
      const remaining = getRemainingTime(order);
      if (remaining <= 0) {
        clearOrderTimer();
        if (order.status === 'pending') {
          order.status = 'expired';
          saveOrder(order);
        }
        showToast('Waktu pembayaran habis', 'Pesanan ini sudah kedaluwarsa.', 'error');
        renderExpiredOrderView(order);
        return;
      }

      countdown.textContent = formatCountdown(remaining);
      countdown.classList.toggle('is-low', remaining <= 120000);
    };

    tick();
    if (state.currentOrder && state.currentOrder.status === 'pending') {
      state.orderTimer = window.setInterval(tick, 1000);
    }
  }

  function completeSimulatedOrder() {
    const order = state.currentOrder;
    if (!order || order.status !== 'pending') return;

    if (getRemainingTime(order) <= 0) {
      order.status = 'expired';
      saveOrder(order);
      renderExpiredOrderView(order);
      showToast('Waktu pembayaran habis', 'Silakan buat pesanan baru.', 'error');
      return;
    }

    order.status = 'success';
    order.paidAt = new Date().toISOString();
    saveOrder(order);
    clearOrderTimer();
    renderReceiptView(order);
    showToast('Pembayaran berhasil', 'Item sedang diproses ke akunmu.', 'success');
  }

  /* =========================================================
     Receipt + expired view
     ========================================================= */
  function receiptDetailsMarkup(order, game, paymentName) {
    const account = accountSummary(game, order.account);
    return `
      <div class="receipt-detail">
        <span>ID Pesanan</span>
        <strong class="receipt-id-row">
          <span>${escapeHTML(order.id)}</span>
          <button class="copy-button" type="button" data-copy-text="${escapeHTML(order.id)}" data-copy-label="ID pesanan" aria-label="Salin ID pesanan">${iconMarkup('icon-copy')}</button>
        </strong>
      </div>
      <div class="receipt-detail">
        <span>Metode pembayaran</span>
        <strong>${escapeHTML(paymentName)}</strong>
      </div>
      <div class="receipt-detail">
        <span>Akun tujuan</span>
        <strong>${escapeHTML(account)}</strong>
      </div>
      <div class="receipt-detail">
        <span>Waktu transaksi</span>
        <strong>${escapeHTML(formatLongDate(order.paidAt || order.createdAt))}</strong>
      </div>
    `;
  }

  function renderReceiptView(order) {
    const game = getGame(order.gameId);
    if (!game || !orderContent) return;
    clearOrderTimer();
    state.currentOrder = order;
    state.activeGame = game;
    const payment = getPayment(order.paymentId);

    orderContent.innerHTML = `
      <div class="receipt-view">
        <div class="success-icon-wrap">
          <span class="success-icon">${iconMarkup('icon-check')}</span>
        </div>
        <span class="receipt-eyebrow">Pembayaran berhasil</span>
        <h2 id="orderDialogTitle">Top up berhasil!</h2>
        <p class="receipt-lead">${escapeHTML(order.packageLabel)} untuk ${escapeHTML(game.name)} sudah diproses. Item akan muncul di akunmu dalam beberapa detik.</p>

        <div class="receipt-card">
          <div class="receipt-card-head">
            <div class="summary-cover"><img src="${escapeHTML(game.cover)}" alt="" width="640" height="820"></div>
            <div>
              <strong>${escapeHTML(game.name)}</strong>
              <span>${escapeHTML(order.packageLabel)}</span>
            </div>
            <span class="status-tag status-tag--success">Berhasil</span>
          </div>
          <div class="receipt-detail-grid">${receiptDetailsMarkup(order, game, payment.name)}</div>
          <div class="receipt-total-row">
            <span>Total dibayar</span>
            <strong>${escapeHTML(formatCurrency(order.total))}</strong>
          </div>
        </div>

        <div class="receipt-actions">
          <button class="btn btn-primary" type="button" data-reorder-game="${escapeHTML(game.id)}">
            ${iconMarkup('icon-bolt')}Top Up Lagi
          </button>
          <button class="btn btn-outline" type="button" data-close-dialog>Tutup</button>
        </div>
        <p class="receipt-note">Simpan ID pesanan ini untuk keperluan pengecekan. Prototipe demo — pembayaran tidak diproses secara nyata.</p>
      </div>
    `;

    orderContent.scrollTop = 0;
  }

  function renderExpiredOrderView(order) {
    const game = getGame(order.gameId);
    if (!game || !orderContent) return;
    clearOrderTimer();
    state.currentOrder = order;
    state.activeGame = game;
    const payment = getPayment(order.paymentId);

    orderContent.innerHTML = `
      <div class="receipt-view">
        <div class="success-icon-wrap receipt-status-wrap receipt-status-wrap--expired">
          <span class="success-icon receipt-status-icon receipt-status-icon--expired">${iconMarkup('icon-clock')}</span>
        </div>
        <span class="receipt-eyebrow receipt-eyebrow--expired">Pesanan kedaluwarsa</span>
        <h2 id="orderDialogTitle">Waktu pembayaran habis</h2>
        <p class="receipt-lead">Pesanan ${escapeHTML(order.id)} tidak dibayar dalam 15 menit, jadi kami batalkan secara otomatis. Tenang, belum ada dana yang terpotong.</p>

        <div class="receipt-card">
          <div class="receipt-card-head">
            <div class="summary-cover"><img src="${escapeHTML(game.cover)}" alt="" width="640" height="820"></div>
            <div>
              <strong>${escapeHTML(game.name)}</strong>
              <span>${escapeHTML(order.packageLabel)}</span>
            </div>
            <span class="status-tag status-tag--expired">Kedaluwarsa</span>
          </div>
          <div class="receipt-detail-grid">${receiptDetailsMarkup(order, game, payment.name)}</div>
          <div class="receipt-total-row">
            <span>Total pesanan</span>
            <strong>${escapeHTML(formatCurrency(order.total))}</strong>
          </div>
        </div>

        <div class="receipt-actions">
          <button class="btn btn-primary" type="button" data-reorder-game="${escapeHTML(game.id)}">
            ${iconMarkup('icon-bolt')}Buat Pesanan Baru
          </button>
          <button class="btn btn-outline" type="button" data-close-dialog>Tutup</button>
        </div>
        <p class="receipt-note">Tidak ada dana yang ditarik pada prototipe demo ini.</p>
      </div>
    `;

    orderContent.scrollTop = 0;
  }

  function openTrackedOrder(order) {
    if (!order) return;
    const game = getGame(order.gameId);
    if (!game) {
      showToast('Pesanan tidak dapat dibuka', 'Data game untuk pesanan ini tidak ditemukan.', 'error');
      return;
    }

    state.activeGame = game;
    state.currentOrder = order;
    state.draft = null;

    if (order.status === 'success') {
      renderReceiptView(order);
    } else if (order.status === 'expired' || getRemainingTime(order) <= 0) {
      if (order.status === 'pending') {
        order.status = 'expired';
        saveOrder(order);
      }
      renderExpiredOrderView(order);
    } else {
      renderPaymentView(order);
    }

    if (!orderDialog.open) orderDialog.showModal();
    syncBodyLock();
  }

  /* =========================================================
     Order tracking
     ========================================================= */
  function renderRecentOrders() {
    if (!recentOrders) return;
    const orders = loadOrders()
      .slice()
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3);

    let content = '';
    if (orders.length) {
      content += `
        <div class="recent-head">
          <h3>Pesanan terakhir</h3>
          <span>${orders.length} dari perangkat ini</span>
        </div>
      `;
      content += orders.map((order) => {
        const meta = getStatusMeta(order.status);
        const game = getGame(order.gameId);
        return `
          <button class="recent-order" type="button" data-recent-order="${escapeHTML(order.id)}" aria-label="Lihat pesanan ${escapeHTML(order.id)}">
            <span class="recent-order-main">
              <strong>${escapeHTML(game ? game.name : order.gameName || 'Pesanan')}</strong>
              <span>${escapeHTML(order.id)} · ${escapeHTML(formatShortDate(order.createdAt))}</span>
            </span>
            <span class="recent-order-side">
              <span class="status-tag ${meta.tag}">${escapeHTML(meta.label)}</span>
              <strong>${escapeHTML(formatCurrency(order.total))}</strong>
            </span>
          </button>
        `;
      }).join('');
    } else {
      content += `
        <div class="recent-empty">
          ${iconMarkup('icon-receipt')}
          <strong>Belum ada pesanan</strong>
          <span>Pesanan yang kamu buat di perangkat ini akan muncul di sini.</span>
        </div>
      `;
    }

    content += `<p class="check-help">Pesanan demo disimpan secara lokal di browser ini. <strong>Jangan tutup halaman sebelum menyimpan ID pesanan.</strong></p>`;
    recentOrders.innerHTML = content;
  }

  function openCheckDialog() {
    if (!checkDialog) return;
    if (orderDialog && orderDialog.open) orderDialog.close();
    if (checkFeedback) {
      checkFeedback.textContent = '';
      checkFeedback.classList.remove('is-visible');
    }
    if (orderIdInput) orderIdInput.setAttribute('aria-invalid', 'false');
    renderRecentOrders();
    if (!checkDialog.open) checkDialog.showModal();
    syncBodyLock();
    window.setTimeout(() => {
      if (orderIdInput) orderIdInput.focus();
    }, 60);
  }

  function setupOrderTracking() {
    if (checkForm) {
      checkForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const orderId = String(orderIdInput ? orderIdInput.value : '').trim();
        if (!orderId) {
          if (checkFeedback) {
            checkFeedback.textContent = 'Masukkan ID pesanan terlebih dahulu.';
            checkFeedback.classList.add('is-visible');
          }
          if (orderIdInput) {
            orderIdInput.setAttribute('aria-invalid', 'true');
            orderIdInput.focus();
          }
          return;
        }

        const order = findOrder(orderId);
        if (!order) {
          if (checkFeedback) {
            checkFeedback.textContent = 'Pesanan tidak ditemukan. Pastikan ID sudah benar, termasuk tanda hubung.';
            checkFeedback.classList.add('is-visible');
          }
          if (orderIdInput) orderIdInput.setAttribute('aria-invalid', 'true');
          return;
        }

        if (checkFeedback) {
          checkFeedback.textContent = '';
          checkFeedback.classList.remove('is-visible');
        }
        checkDialog.close();
        openTrackedOrder(order);
      });
    }

    if (orderIdInput) {
      orderIdInput.addEventListener('input', () => {
        orderIdInput.setAttribute('aria-invalid', 'false');
        if (checkFeedback) {
          checkFeedback.textContent = '';
          checkFeedback.classList.remove('is-visible');
        }
      });
    }

    if (recentOrders) {
      recentOrders.addEventListener('click', (event) => {
        const button = event.target.closest('[data-recent-order]');
        if (!button) return;
        const order = findOrder(button.dataset.recentOrder);
        if (!order) {
          showToast('Pesanan tidak ditemukan', 'Data pesanan mungkin sudah terhapus.', 'error');
          return;
        }
        checkDialog.close();
        openTrackedOrder(order);
      });
    }
  }

  /* =========================================================
     Global interactions
     ========================================================= */
  function setupGlobalInteractions() {
    if (gameGrid) {
      gameGrid.addEventListener('click', (event) => {
        const card = event.target.closest('[data-game-id]');
        if (!card) return;
        openOrderModal(card.dataset.gameId);
      });
    }

    filterChips.forEach((chip) => {
      chip.addEventListener('click', () => setCategory(chip.dataset.category));
    });

    if (gameSearch) {
      gameSearch.addEventListener('input', (event) => {
        state.query = event.target.value;
        renderGames();
      });
    }

    if (resetFilters) resetFilters.addEventListener('click', resetAllFilters);

    [orderDialog, checkDialog].forEach((dialog) => {
      if (!dialog) return;
      dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
      });
      dialog.addEventListener('close', () => {
        if (dialog === orderDialog) clearOrderTimer();
        window.setTimeout(syncBodyLock, 0);
      });
    });

    document.addEventListener('click', (event) => {
      const copyCodeButton = event.target.closest('[data-copy-code]');
      if (copyCodeButton) {
        const code = copyCodeButton.dataset.copyCode || VOUCHER.code;
        copyToClipboard(code).then((copied) => {
          if (copied) {
            showToast('Kode promo disalin', `Gunakan ${code} saat checkout.`, 'success');
          } else {
            showToast('Gagal menyalin', `Salin kode secara manual: ${code}`, 'error');
          }
        });
        return;
      }

      const copyButton = event.target.closest('[data-copy-text]');
      if (copyButton) {
        const text = copyButton.dataset.copyText || '';
        const label = copyButton.dataset.copyLabel || 'Teks';
        copyToClipboard(text).then((copied) => {
          if (copied) {
            showToast(`${label} disalin`, 'Tempel di tempat yang kamu butuhkan.', 'success');
          } else {
            showToast('Gagal menyalin', `Salin secara manual: ${text}`, 'error');
          }
        });
        return;
      }

      const closeButton = event.target.closest('[data-close-dialog]');
      if (closeButton) {
        const dialog = closeButton.closest('dialog');
        if (dialog) dialog.close();
        return;
      }

      const checkButton = event.target.closest('[data-open-check]');
      if (checkButton) {
        event.preventDefault();
        closeMobileMenu();
        openCheckDialog();
        return;
      }

      const footerGame = event.target.closest('[data-footer-game]');
      if (footerGame) {
        event.preventDefault();
        closeMobileMenu();
        openOrderModal(footerGame.dataset.footerGame);
        return;
      }

      const reorderButton = event.target.closest('[data-reorder-game]');
      if (reorderButton) {
        event.preventDefault();
        openOrderModal(reorderButton.dataset.reorderGame);
      }
    });
  }

  /* =========================================================
     Init
     ========================================================= */
  renderGames();
  setupNavigation();
  setupReveal();
  startClocks();
  setupOrderTracking();
  setupGlobalInteractions();
})();


