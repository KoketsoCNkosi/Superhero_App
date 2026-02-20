/**
 * AVENGERS SPA — script.js
 */

const HEROES = [
  {
    id: 'iron-man',
    name: 'Iron Man',
    alias: 'Tony Stark',
    icon: '🤖',
    tag: 'Genius · Billionaire · Philanthropist',
    color: '#e63946',
    images: ['images/tony2.jpg', 'images/tony3.jpg'],
    stats: [
      { key: 'Real Name',   val: 'Tony Stark' },
      { key: 'Title',       val: 'Genius, Billionaire, Philanthropist' },
      { key: 'Origin',      val: 'Captured by terrorists in Afghanistan, Tony built his first suit to escape. The arc reactor in his chest keeps him alive and powers his suits.' },
      { key: 'Technology',  val: 'The Arc Reactor provides clean, manageable energy with incredible output, powering his advanced suits of armor.' },
      { key: 'Legacy',      val: "Built upon his father Howard Stark's designs but enhanced them with his own innovations." },
      { key: 'Mission',     val: 'Uses his technology and wealth to protect the world as Iron Man and leader of the Avengers.' },
    ]
  },
  {
    id: 'captain-america',
    name: 'Captain America',
    alias: 'Steve Rogers',
    icon: '🛡️',
    tag: 'Super Soldier · Leader',
    color: '#4895ef',
    images: ['images/captainamerica2.jpg', 'images/captainamerica3.jpg'],
    stats: [
      { key: 'Real Name',   val: 'Steve Rogers' },
      { key: 'Powers',      val: 'Enhanced strength, speed, stamina, and agility thanks to the Super-Soldier serum' },
      { key: 'Origin',      val: 'A frail young man who volunteered for the Super-Soldier program during World War II. The serum transformed him into the peak of human physical perfection.' },
      { key: 'Allies',      val: 'His longest companion is James Buchanan "Bucky" Barnes, and he\'s formed strong bonds with Natasha Romanoff and Sam Wilson.' },
      { key: 'Equipment',   val: 'Iconic vibranium shield and updated Captain America suit providing protection against elements and enemies.' },
    ]
  },
  {
    id: 'thor',
    name: 'Thor',
    alias: 'Thor Odinson',
    icon: '⚡',
    tag: 'God of Thunder · Asgard',
    color: '#f5c400',
    images: ['images/thor2.jpg', 'images/thor3.jpg'],
    stats: [
      { key: 'Real Name',   val: 'Thor Odinson' },
      { key: 'Title',       val: 'God of Thunder, Son of Odin' },
      { key: 'Age',         val: 'Born 1500 years ago to Odin and Frigga, king and queen of Asgard' },
      { key: 'Powers',      val: 'Great strength, endurance, stamina, long life, and command over lightning and thunder' },
      { key: 'Weapons',     val: 'Mjolnir (magic hammer) and later Stormbreaker, which can command the Bifrost' },
      { key: 'Enemies',     val: 'Frost Giant King Laufey, Surtur, Malekith, his half-sister Hela, and the Grandmaster' },
      { key: 'Mission',     val: 'Protector of Asgard and Earth (Midgard), member of the Avengers' },
    ]
  },
  {
    id: 'hulk',
    name: 'Hulk',
    alias: 'Bruce Banner',
    icon: '💚',
    tag: 'Strongest Avenger · Gamma',
    color: '#43b057',
    images: ['images/hulk2.jpeg', 'images/hulk4.jpg'],
    stats: [
      { key: 'Real Name',       val: 'Dr. Bruce Banner' },
      { key: 'Transformation',  val: 'Caught between the soft-spoken scientist and the uncontrollable green monster powered by rage' },
      { key: 'Origin',          val: 'Gamma radiation scientist who tested his research on himself, triggering his transformation' },
      { key: 'Powers',          val: 'Greatest raw strength of any natural being on Earth, incredible leaping ability, near-invulnerable skin' },
      { key: 'Intelligence',    val: 'The Hulk has evolved from infant-level to toddler-like personality, with improving speech over time' },
      { key: 'Relationship',    val: 'Banner refers to Hulk as "the other guy," while Hulk shows little love for the mild scientist' },
    ]
  },
  {
    id: 'black-widow',
    name: 'Black Widow',
    alias: 'Natasha Romanoff',
    icon: '🕷️',
    tag: 'Spy · Assassin · S.H.I.E.L.D.',
    color: '#c77dff',
    images: ['images/natasha4.jpg', 'images/natasha2.jpg'],
    stats: [
      { key: 'Real Name',   val: 'Natasha Romanoff' },
      { key: 'Quote',       val: '"At some point we all have to choose between who the world wants you to be, and who you are."' },
      { key: 'Origin',      val: 'Indoctrinated by the Red Room, a Russian training program that turned young girls into lethal undercover agents.' },
      { key: 'Skills',      val: 'Extensively trained in karate, judo, kung fu, wrestling, gymnastics, acrobatics, and ballet. Expert with all manner of weapons.' },
      { key: 'Equipment',   val: "Dual batons, Glock 26s, and the Black Widow's Bite bracelets that discharge electricity." },
      { key: 'Allies',      val: 'Loyal to S.H.I.E.L.D. and fights alongside the Avengers including Captain America, Iron Man, and others.' },
    ]
  },
  {
    id: 'hawkeye',
    name: 'Hawkeye',
    alias: 'Clint Barton',
    icon: '🏹',
    tag: 'Master Archer · Marksman',
    color: '#f77f00',
    images: ['images/clint4.jpg', 'images/clint2.jpg'],
    stats: [
      { key: 'Real Name',   val: 'Clint Barton' },
      { key: 'Title',       val: "Golden Archer, World's Greatest Marksman" },
      { key: 'Background',  val: 'S.H.I.E.L.D. agent and accomplished combatant with few known details about his origins' },
      { key: 'Skills',      val: 'Expert acrobat, military-trained combatant, master assassin, tactician, and spy' },
      { key: 'Equipment',   val: 'Recurve bows, compound bows, specialized arrow quiver, speed loader, Busse dagger, S.H.I.E.L.D. handgun' },
      { key: 'Notable',     val: 'Instrumental in bringing Black Widow to S.H.I.E.L.D., sparing her life and offering redemption' },
      { key: 'Status',      val: 'Retired but always shows up when heroes are needed' },
    ]
  },
];

// ── ROUTER ────────────────────────────────────────────────────────────────
const Router = {
  go(page, heroId = null) {
    const old = document.querySelector('.page.active');
    if (old) {
      old.style.opacity = '0';
      old.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        old.classList.remove('active');
        old.style.opacity = '';
        old.style.transform = '';
      }, 300);
    }

    setTimeout(() => {
      const pageId = page === 'detail' ? 'page-detail' : `page-${page}`;
      const next = document.getElementById(pageId);
      if (!next) return;
      if (page === 'detail' && heroId) App.renderDetail(heroId);
      if (page === 'about') App.runStatCounters();
      next.classList.add('active');
      document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.dataset.page === (page === 'detail' ? 'home' : page));
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 310);
  }
};

// ── APP ────────────────────────────────────────────────────────────────────
const App = {

  init() {
    this.renderGrid();
    this.bindNav();
    this.bindBack();
    this.bindContact();
    this.initCursor();
    this.initNavScroll();
    this.initHamburger();
    this.hideLoader();
  },

  renderGrid() {
    const grid = document.getElementById('heroesGrid');
    grid.innerHTML = HEROES.map(h => `
      <div class="hero-card" data-hero="${h.id}" role="button" tabindex="0" aria-label="View ${h.name}">
        <div class="card-bg"></div>
        <div class="card-img-wrap">
          <img class="card-img" src="${h.images[0]}" alt="${h.name}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
          <span class="card-img-fallback" style="display:none">${h.icon}</span>
        </div>
        <div class="card-body">
          <div class="card-name">${h.name}</div>
          <div class="card-alias">${h.alias}</div>
          <span class="card-tag">${h.tag}</span>
        </div>
        <span class="card-arrow">→</span>
      </div>
    `).join('');

    grid.querySelectorAll('.hero-card').forEach(card => {
      card.addEventListener('click', () => Router.go('detail', card.dataset.hero));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') Router.go('detail', card.dataset.hero);
      });
    });

    // Re-attach cursor hover for dynamically added cards
    if (window._cursorInit) {
      grid.querySelectorAll('.hero-card').forEach(el => {
        el.addEventListener('mouseenter', () => document.getElementById('cursor').classList.add('big'));
        el.addEventListener('mouseleave', () => document.getElementById('cursor').classList.remove('big'));
      });
    }
  },

  renderDetail(id) {
    const hero = HEROES.find(h => h.id === id);
    if (!hero) return;

    document.getElementById('detailBgArt').textContent = hero.name.toUpperCase();

    const statsHtml = hero.stats.map((s, i) => `
      <div class="stat-row" style="animation-delay:${i * 0.06 + 0.2}s">
        <span class="stat-key">${s.key}</span>
        <span class="stat-val">${s.val}</span>
      </div>
    `).join('');

    const imgsHtml = hero.images.map(src => `
      <img src="${src}" alt="${hero.name}" loading="lazy" onerror="this.style.display='none'" />
    `).join('');

    document.getElementById('detailCard').innerHTML = `
      <div class="detail-header" style="border-top:3px solid ${hero.color}">
        <span class="detail-icon">${hero.icon}</span>
        <div class="detail-title-wrap">
          <div class="detail-title">${hero.name}</div>
          <div class="detail-subtitle">${hero.alias}</div>
        </div>
      </div>
      <div class="detail-body">
        <div class="detail-images">${imgsHtml}</div>
        <div class="detail-stats">${statsHtml}</div>
      </div>
    `;
  },

  runStatCounters() {
    document.querySelectorAll('.stat-num[data-target]').forEach(el => {
      const target = +el.dataset.target;
      const start = performance.now();
      const duration = 1200;
      const update = (now) => {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(p * target);
        if (p < 1) requestAnimationFrame(update);
        else el.textContent = target;
      };
      requestAnimationFrame(update);
    });
  },

  bindNav() {
    document.querySelectorAll('[data-page]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        const page = el.dataset.page;
        if (page) {
          Router.go(page);
          document.getElementById('mobileNav').classList.remove('open');
          document.getElementById('hamburger').classList.remove('open');
        }
      });
    });
  },

  bindBack() {
    document.getElementById('backBtn').addEventListener('click', () => Router.go('home'));
  },

  bindContact() {
    const form = document.getElementById('contactForm');
    const toast = document.getElementById('formToast');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('.submit-btn');
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !subject || !message) {
        this.showToast(toast, 'Please fill in all fields.', 'error'); return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        this.showToast(toast, 'Please enter a valid email address.', 'error'); return;
      }
      if (message.length < 10) {
        this.showToast(toast, 'Message must be at least 10 characters.', 'error'); return;
      }

      btn.classList.add('sending');
      btn.querySelector('.btn-text').textContent = 'Sending…';
      await new Promise(r => setTimeout(r, 1800));
      btn.classList.remove('sending');
      btn.querySelector('.btn-text').textContent = 'Send Message';
      form.reset();
      this.showToast(toast, "✅ Message sent! We'll get back to you soon.", 'success');
    });
  },

  showToast(el, msg, type) {
    el.textContent = msg;
    el.className = `form-toast ${type}`;
    setTimeout(() => { el.textContent = ''; el.className = 'form-toast'; }, 5000);
  },

  initCursor() {
    const cursor = document.getElementById('cursor');
    if (window.matchMedia('(pointer:coarse)').matches) { cursor.style.display = 'none'; return; }
    window._cursorInit = true;
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    });
    document.querySelectorAll('a, button, .hero-card, input, textarea').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('big'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
    });
  },

  initNavScroll() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  },

  initHamburger() {
    const btn = document.getElementById('hamburger');
    const mob = document.getElementById('mobileNav');
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      mob.classList.toggle('open');
    });
  },

  hideLoader() {
    window.addEventListener('load', () => {
      setTimeout(() => document.getElementById('loader').classList.add('hidden'), 800);
    });
    setTimeout(() => document.getElementById('loader').classList.add('hidden'), 2500);
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
