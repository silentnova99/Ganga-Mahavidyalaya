/* ============================================================
   Ganga Mahavidyalaya – main.js
   Scroll reveal animations, misc interactions
   ============================================================ */

(function () {

  /* ---------- Scroll Reveal ---------- */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => observer.observe(el));
  }

  /* ---------- Sticky header shadow ---------- */
  function initHeaderScroll() {
    const mainNav = document.querySelector('.main-nav');
    if (!mainNav) return;
    window.addEventListener('scroll', () => {
      mainNav.style.boxShadow = window.scrollY > 40
        ? '0 4px 16px rgba(26,60,110,0.12)'
        : '0 2px 8px rgba(26,60,110,0.06)';
    }, { passive: true });
  }

  /* ---------- Form submit feedback (static demo) ---------- */
  function initForms() {
    document.querySelectorAll('form[data-static]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('[type="submit"]');
        if (!btn) return;
        const orig = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<span class="material-symbols-outlined" style="animation:spin 0.8s linear infinite">sync</span> Submitting…';

        setTimeout(() => {
          btn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> Submitted Successfully!';
          btn.style.background = 'var(--success)';
          setTimeout(() => {
            btn.innerHTML = orig;
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
          }, 3000);
        }, 1200);
      });
    });
  }

  /* ---------- Counter animation ---------- */
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    if (isNaN(target)) return;
    let start = 0;
    const duration = 1400;
    const step = target / (duration / 16);
    const tick = () => {
      start = Math.min(start + step, target);
      el.textContent = Math.floor(start).toLocaleString('en-IN') + (el.dataset.suffix || '');
      if (start < target) requestAnimationFrame(tick);
    };
    tick();
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => observer.observe(el));
  }

  /* ---------- Image hover and lazy load enhancement ---------- */
  function initImages() {
    const images = document.querySelectorAll('.img-frame img, .real-img, .hero-inline-img');
    images.forEach((img, index) => {
      // Add staggered fade-in animation
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.6s ease ' + (index * 0.1) + 's, transform 0.5s ease';
      setTimeout(() => {
        img.style.opacity = '1';
      }, 100);

      // Enhanced hover effect
      img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
      });
      img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
      });
    });
  }

  /* ---------- Dynamic year update ---------- */
  function initYear() {
    const yearElements = document.querySelectorAll('.dynamic-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
      el.textContent = currentYear;
    });
  }

  /* ---------- Gallery lightbox effect ---------- */
  function initGallery() {
    const galleryItems = document.querySelectorAll('.strip-item img, .gallery-item img, .hero-inline-img');
    galleryItems.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:9999;';
        const modalImg = document.createElement('img');
        modalImg.src = img.src.replace('w=300', 'w=1200').replace('h=200', 'h=800');
        modalImg.style.cssText = 'max-width:90%;max-height:90%;border-radius:8px;';
        modal.appendChild(modalImg);
        modal.addEventListener('click', () => modal.remove());
        document.body.appendChild(modal);
      });
    });
  }

  /* ---------- Spin keyframe (for form submit) ---------- */
  const style = document.createElement('style');
  style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
  document.head.appendChild(style);

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initHeaderScroll();
    initForms();
    initCounters();
    initImages();
    initYear();
    initGallery();
  });

})();
