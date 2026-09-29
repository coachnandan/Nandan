/* ═══════════════════════════════════════════════════════════
   SOPHIA LAURENT — JavaScript
   Scroll Reveal · Navigation · Parallax · Form · Animations
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── UTILITY ─────────────────────────────────────────── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ─── NAVIGATION ──────────────────────────────────────── */
  const nav         = $('#nav');
  const hamburger   = $('#navHamburger');
  const navLinks    = $('#navLinks');
  const overlay     = $('#navOverlay');
  const navLinkList = $$('.nav__link');

  // Scroll-based nav style
  const onScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  const openMenu = () => {
    navLinks.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    navLinks.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) closeMenu();
    else openMenu();
  });
  overlay.addEventListener('click', closeMenu);
  navLinkList.forEach(link => link.addEventListener('click', closeMenu));

  // Close menu on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });

  /* ─── SMOOTH ACTIVE LINK ──────────────────────────────── */
  const sections = $$('section[id], div[id="home"]');
  const updateActiveLink = () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.id;
    });
    navLinkList.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* ─── SCROLL REVEAL ───────────────────────────────────── */
  const reveals = $$('.reveal-up, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  reveals.forEach(el => revealObserver.observe(el));

  /* ─── PARALLAX HERO ───────────────────────────────────── */
  const heroImage = $('.hero__image');

  const onParallax = () => {
    const scrollY = window.scrollY;
    if (heroImage && scrollY < window.innerHeight) {
      heroImage.style.transform = `translateY(${scrollY * 0.18}px)`;
    }
  };
  window.addEventListener('scroll', onParallax, { passive: true });

  /* ─── HERO NUMBER COUNT-UP ────────────────────────────── */
  const statNumbers = $$('.stat__number');

  const countUp = (el, end, suffix) => {
    const duration = 1600;
    const start = performance.now();
    const startVal = 0;
    const endVal = parseInt(end);

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * endVal) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        const suffix = text.includes('+') ? '+' : '';
        const num = parseInt(text);
        countUp(el, num, suffix);
        statsObserver.unobserve(el);
      }
    });
  }, { threshold: 0.8 });

  statNumbers.forEach(el => statsObserver.observe(el));

  /* ─── TIMELINE ITEMS STAGGER ──────────────────────────── */
  const timelineItems = $$('.timeline-item');
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, i * 100);
        timelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  timelineItems.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(24px)';
    item.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
    timelineObserver.observe(item);
  });

  /* ─── CONTACT FORM ────────────────────────────────────── */
  const contactForm = $('#contactForm');
  const formSuccess = $('#formSuccess');
  const formSubmit  = $('#formSubmit');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic validation
      const inputs = $$('.form-input[required]', contactForm);
      let valid = true;
      inputs.forEach(input => {
        input.style.borderColor = '';
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = '#C0392B';
        } else if (input.type === 'email' && !input.value.includes('@')) {
          valid = false;
          input.style.borderColor = '#C0392B';
        }
      });

      if (!valid) return;

      // Simulate submission
      formSubmit.textContent = 'Sending...';
      formSubmit.disabled = true;

      setTimeout(() => {
        contactForm.reset();
        formSubmit.innerHTML = `Send Message
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
        formSubmit.disabled = false;
        formSuccess.classList.add('show');
        setTimeout(() => formSuccess.classList.remove('show'), 6000);

        // Meta Pixel Lead tracking (fired once upon verified submission)
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Lead', { content_name: 'Contact Form' });
        }
      }, 1400);
    });

    // Live border removal on type
    $$('.form-input', contactForm).forEach(input => {
      input.addEventListener('input', () => {
        input.style.borderColor = '';
      });
    });
  }

  /* ─── META PIXEL CONTACT CLICKS (WHATSAPP & PHONE) ────── */
  document.addEventListener('click', (e) => {
    try {
      const link = e.target.closest('a');
      if (!link || typeof window.fbq !== 'function') return;
      const href = (link.getAttribute('href') || '').trim();
      if (href.startsWith('tel:') || link.dataset.metaContact === 'phone') {
        window.fbq('track', 'Contact', { content_name: 'Phone Call' });
      } else if (
        href.includes('wa.me') ||
        href.includes('whatsapp.com') ||
        href.startsWith('whatsapp:') ||
        link.dataset.metaContact === 'whatsapp'
      ) {
        window.fbq('track', 'Contact', { content_name: 'WhatsApp' });
      }
    } catch (_) {}
  }, { passive: true });

  /* ─── BUTTON RIPPLE ───────────────────────────────────── */
  $$('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute;
        left:${x}px;
        top:${y}px;
        width:0;
        height:0;
        border-radius:50%;
        background:rgba(255,255,255,0.18);
        transform:translate(-50%,-50%);
        animation:ripple-anim 0.6s ease forwards;
        pointer-events:none;
      `;
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });

  // Inject ripple keyframe
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple-anim {
      to { width: 400px; height: 400px; opacity: 0; }
    }
    .nav__link.active {
      color: var(--c-primary);
      font-weight: 500;
    }
  `;
  document.head.appendChild(style);

  /* ─── CURSOR MAGNETIC (DESKTOP ONLY) ──────────────────── */
  if (window.matchMedia('(pointer: fine)').matches) {
    const magneticEls = $$('.btn--primary, .btn--champagne, .social-link');
    magneticEls.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top  - rect.height / 2;
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* ─── MARQUEE CLONE ───────────────────────────────────── */
  // Already duplicated in HTML, just ensure seamless loop
  const marqueeTrack = $('.marquee-track');
  if (marqueeTrack) {
    // Already in HTML as two copies — no-op
  }

  /* ─── IMAGE LAZY-LOAD FADE ────────────────────────────── */
  const lazyImages = $$('img[loading="lazy"]');
  lazyImages.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.6s ease';
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });
    if (img.complete) img.style.opacity = '1';
  });

  /* ─── SERVICE CARD HOVER SPARKLE ─────────────────────── */
  $$('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });

  /* ─── SCROLL TO TOP (LOGO CLICK) ─────────────────────── */
  const logo = $('.nav__logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  console.log('%cSophia Laurent — Premium Personal Brand', 'color:#C7A56A;font-family:Georgia;font-size:14px;font-style:italic;');
  console.log('%cDesigned with intention.', 'color:#18352F;font-size:11px;');

})();
