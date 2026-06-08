/* ============================================================
   Ganga Mahavidyalaya — nav.js
   Injects shared navbar + footer, handles mobile drawer,
   active-page highlighting, dropdown, back-to-top
   ============================================================ */

(function () {
  /* ---------- Helpers ---------- */
  const esc = (s) => s.replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  /* ---------- Nav HTML ---------- */
  const NAV_HTML = `
<div class="tricolor-stripe"></div>
<!-- Top Bar -->
<div class="top-bar">
  <div class="top-bar-inner">
    <a class="top-bar-brand" href="index.html">
      <div class="top-bar-logo" aria-hidden="true">
        <span class="material-symbols-outlined">school</span>
      </div>
      <div class="top-bar-name">
        <span class="name-hindi">गंगा महाविद्यालय</span>
        <span class="name-en">Ganga Mahavidyalaya</span>
      </div>
    </a>
    <div class="top-bar-links">
      <a href="tel:+919400000000"><span class="material-symbols-outlined">call</span>+91 94XXX XXXXX</a>
      <a href="mailto:info@gangamahavidyalaya.ac.in"><span class="material-symbols-outlined">mail</span>info@gangamahavidyalaya.ac.in</a>
      <a href="https://www.kksu.ac.in" target="_blank" rel="noopener" class="univ-link"><span class="material-symbols-outlined">open_in_new</span>KKS University</a>
    </div>
  </div>
</div>
<!-- Sticky Nav -->
<nav class="main-nav" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a class="nav-logo-mobile" href="index.html">Ganga MV</a>
    <div class="nav-links">
      <a href="index.html" data-page="index">Home</a>

      <div class="nav-dropdown">
        <button class="nav-trigger" aria-haspopup="true" aria-expanded="false" data-page-group="about">
          About <span class="material-symbols-outlined">expand_more</span>
        </button>
        <div class="dropdown-menu" role="menu">
          <a href="about-college.html"   data-page="about-college"><span class="material-symbols-outlined">info</span>About College</a>
          <a href="governing-body.html"  data-page="governing-body"><span class="material-symbols-outlined">account_balance</span>Governing Body</a>
          <a href="principal-desk.html"  data-page="principal-desk"><span class="material-symbols-outlined">person</span>Principal's Desk</a>
          <a href="faculty.html"         data-page="faculty"><span class="material-symbols-outlined">groups</span>Faculty Details</a>
        </div>
      </div>

      <div class="nav-dropdown">
        <button class="nav-trigger" aria-haspopup="true" aria-expanded="false" data-page-group="dept">
          Departments <span class="material-symbols-outlined">expand_more</span>
        </button>
        <div class="dropdown-menu" role="menu">
          <a href="dept-ba-civil.html"        data-page="dept-ba-civil"><span class="material-symbols-outlined">gavel</span>B.A. Civil Services</a>
          <a href="dept-bsc-hospitality.html" data-page="dept-bsc-hospitality"><span class="material-symbols-outlined">restaurant</span>B.Sc. Hospitality</a>
          <a href="dept-bba.html"             data-page="dept-bba"><span class="material-symbols-outlined">trending_up</span>BBA</a>
          <a href="dept-bcom.html"            data-page="dept-bcom"><span class="material-symbols-outlined">payments</span>B.Com</a>
          <a href="dept-mlib.html"            data-page="dept-mlib"><span class="material-symbols-outlined">menu_book</span>M.Lib</a>
        </div>
      </div>

      <a href="admissions.html" data-page="admissions">Admissions</a>

      <div class="nav-dropdown">
        <button class="nav-trigger" aria-haspopup="true" aria-expanded="false" data-page-group="activities">
          Activities <span class="material-symbols-outlined">expand_more</span>
        </button>
        <div class="dropdown-menu" role="menu">
          <a href="activities-guest.html"        data-page="activities-guest"><span class="material-symbols-outlined">mic</span>Guest Lectures</a>
          <a href="activities-achievements.html" data-page="activities-achievements"><span class="material-symbols-outlined">emoji_events</span>Achievements</a>
          <a href="activities-events.html"       data-page="activities-events"><span class="material-symbols-outlined">event</span>Events</a>
        </div>
      </div>

      <div class="nav-dropdown">
        <button class="nav-trigger" aria-haspopup="true" aria-expanded="false" data-page-group="committee">
          Committees <span class="material-symbols-outlined">expand_more</span>
        </button>
        <div class="dropdown-menu" role="menu">
          <a href="committee-iqac.html"            data-page="committee-iqac"><span class="material-symbols-outlined">verified</span>IQAC</a>
          <a href="committee-library.html"         data-page="committee-library"><span class="material-symbols-outlined">library_books</span>Library</a>
          <a href="committee-antiragging.html"     data-page="committee-antiragging"><span class="material-symbols-outlined">security</span>Anti-Ragging</a>
          <a href="committee-career.html"          data-page="committee-career"><span class="material-symbols-outlined">work</span>Career Counselling</a>
          <a href="committee-development.html"     data-page="committee-development"><span class="material-symbols-outlined">construction</span>CDC</a>
          <a href="committee-grievance.html"       data-page="committee-grievance"><span class="material-symbols-outlined">support_agent</span>Grievance</a>
          <a href="committee-nss.html"             data-page="committee-nss"><span class="material-symbols-outlined">volunteer_activism</span>NSS</a>
          <a href="committee-sexualharassment.html" data-page="committee-sexualharassment"><span class="material-symbols-outlined">shield</span>POSH / SHC</a>
          <a href="committee-studentcouncil.html"  data-page="committee-studentcouncil"><span class="material-symbols-outlined">diversity_3</span>Student Council</a>
          <a href="committee-alumni.html"          data-page="committee-alumni"><span class="material-symbols-outlined">handshake</span>Alumni</a>
        </div>
      </div>

      <a href="placement.html" data-page="placement">Placement</a>

      <div class="nav-dropdown">
        <button class="nav-trigger" aria-haspopup="true" aria-expanded="false" data-page-group="facility">
          Facilities <span class="material-symbols-outlined">expand_more</span>
        </button>
        <div class="dropdown-menu" role="menu">
          <a href="facility-library.html"  data-page="facility-library"><span class="material-symbols-outlined">library_books</span>Library</a>
          <a href="facility-sports.html"   data-page="facility-sports"><span class="material-symbols-outlined">sports_cricket</span>Sports</a>
          <a href="facility-seminar.html"  data-page="facility-seminar"><span class="material-symbols-outlined">co_present</span>Seminar Hall</a>
        </div>
      </div>

      <a href="naac.html"    data-page="naac">NAAC</a>
      <a href="contact.html" data-page="contact">Contact</a>
    </div>
    <a href="admissions.html" class="nav-cta">
      <span class="material-symbols-outlined">how_to_reg</span>Apply Now
    </a>
    <button class="hamburger" id="hamburger-btn" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-drawer">
      <span class="material-symbols-outlined">menu</span>
    </button>
  </div>
</nav>

<!-- Mobile Drawer -->
<div class="mobile-drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Site navigation">
  <div class="mobile-drawer-header">
    <span>Ganga Mahavidyalaya</span>
    <button class="drawer-close" id="drawer-close-btn" aria-label="Close menu">
      <span class="material-symbols-outlined">close</span>
    </button>
  </div>
  <div class="mobile-nav-links">
    <a href="index.html" data-page="index"><span class="material-symbols-outlined">home</span>Home</a>
    <div class="mobile-nav-section">About</div>
    <a href="about-college.html"   data-page="about-college"><span class="material-symbols-outlined">info</span>About College</a>
    <a href="governing-body.html"  data-page="governing-body"><span class="material-symbols-outlined">account_balance</span>Governing Body</a>
    <a href="principal-desk.html"  data-page="principal-desk"><span class="material-symbols-outlined">person</span>Principal's Desk</a>
    <a href="faculty.html"         data-page="faculty"><span class="material-symbols-outlined">groups</span>Faculty Details</a>
    <div class="mobile-nav-section">Departments</div>
    <a href="dept-ba-civil.html"        data-page="dept-ba-civil"><span class="material-symbols-outlined">gavel</span>B.A. Civil Services</a>
    <a href="dept-bsc-hospitality.html" data-page="dept-bsc-hospitality"><span class="material-symbols-outlined">restaurant</span>B.Sc. Hospitality</a>
    <a href="dept-bba.html"             data-page="dept-bba"><span class="material-symbols-outlined">trending_up</span>BBA</a>
    <a href="dept-bcom.html"            data-page="dept-bcom"><span class="material-symbols-outlined">payments</span>B.Com</a>
    <a href="dept-mlib.html"            data-page="dept-mlib"><span class="material-symbols-outlined">menu_book</span>M.Lib</a>
    <a href="admissions.html"           data-page="admissions"><span class="material-symbols-outlined">how_to_reg</span>Admissions</a>
    <div class="mobile-nav-section">Activities</div>
    <a href="activities-guest.html"        data-page="activities-guest"><span class="material-symbols-outlined">mic</span>Guest Lectures</a>
    <a href="activities-achievements.html" data-page="activities-achievements"><span class="material-symbols-outlined">emoji_events</span>Achievements</a>
    <a href="activities-events.html"       data-page="activities-events"><span class="material-symbols-outlined">event</span>Events</a>
    <div class="mobile-nav-section">Committees</div>
    <a href="committee-iqac.html"            data-page="committee-iqac"><span class="material-symbols-outlined">verified</span>IQAC</a>
    <a href="committee-library.html"         data-page="committee-library"><span class="material-symbols-outlined">library_books</span>Library Committee</a>
    <a href="committee-antiragging.html"     data-page="committee-antiragging"><span class="material-symbols-outlined">security</span>Anti-Ragging</a>
    <a href="committee-career.html"          data-page="committee-career"><span class="material-symbols-outlined">work</span>Career Counselling</a>
    <a href="committee-development.html"     data-page="committee-development"><span class="material-symbols-outlined">construction</span>CDC</a>
    <a href="committee-grievance.html"       data-page="committee-grievance"><span class="material-symbols-outlined">support_agent</span>Grievance</a>
    <a href="committee-nss.html"             data-page="committee-nss"><span class="material-symbols-outlined">volunteer_activism</span>NSS</a>
    <a href="committee-sexualharassment.html" data-page="committee-sexualharassment"><span class="material-symbols-outlined">shield</span>POSH / SHC</a>
    <a href="committee-studentcouncil.html"  data-page="committee-studentcouncil"><span class="material-symbols-outlined">diversity_3</span>Student Council</a>
    <a href="committee-alumni.html"          data-page="committee-alumni"><span class="material-symbols-outlined">handshake</span>Alumni</a>
    <a href="placement.html" data-page="placement"><span class="material-symbols-outlined">business_center</span>Placement</a>
    <div class="mobile-nav-section">Facilities</div>
    <a href="facility-library.html"  data-page="facility-library"><span class="material-symbols-outlined">library_books</span>Library</a>
    <a href="facility-sports.html"   data-page="facility-sports"><span class="material-symbols-outlined">sports_cricket</span>Sports</a>
    <a href="facility-seminar.html"  data-page="facility-seminar"><span class="material-symbols-outlined">co_present</span>Seminar Hall</a>
    <a href="naac.html"    data-page="naac"><span class="material-symbols-outlined">verified_user</span>NAAC</a>
    <a href="contact.html" data-page="contact"><span class="material-symbols-outlined">contact_page</span>Contact Us</a>
  </div>
</div>
<div class="drawer-overlay" id="drawer-overlay"></div>
`;

  /* ---------- Footer HTML ---------- */
  const FOOTER_HTML = `
<footer class="site-footer" role="contentinfo">
  <div class="footer-inner">
    <div class="footer-col">
      <span class="brand-name">Ganga Mahavidyalaya</span>
      <p class="tagline">Empowering Rural Youth Through Quality Education since 2020.</p>
      <address>
        <span class="material-symbols-outlined">location_on</span>
        Kumbhphal Village, Chh. Sambhajinagar, Maharashtra – 431XXX
      </address>
      <address>
        <span class="material-symbols-outlined">call</span>+91 94XXX XXXXX
      </address>
      <address>
        <span class="material-symbols-outlined">mail</span>info@gangamahavidyalaya.ac.in
      </address>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="index.html"><span class="material-symbols-outlined">home</span>Home</a></li>
        <li><a href="about-college.html"><span class="material-symbols-outlined">info</span>About College</a></li>
        <li><a href="admissions.html"><span class="material-symbols-outlined">how_to_reg</span>Admissions</a></li>
        <li><a href="naac.html"><span class="material-symbols-outlined">verified_user</span>NAAC</a></li>
        <li><a href="contact.html"><span class="material-symbols-outlined">contact_page</span>Contact Us</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Courses Offered</h4>
      <ul>
        <li><a href="dept-ba-civil.html">B.A. Civil Services (3 Yrs)</a></li>
        <li><a href="dept-bsc-hospitality.html">B.Sc. Hospitality Studies (3 Yrs)</a></li>
        <li><a href="dept-bba.html">BBA (3 Yrs)</a></li>
        <li><a href="dept-bcom.html">B.Com (3 Yrs)</a></li>
        <li><a href="dept-mlib.html">M.Lib (Library Science)</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact Info</h4>
      <div class="footer-contact-item"><span class="material-symbols-outlined">call</span>+91 94XXX XXXXX</div>
      <div class="footer-contact-item"><span class="material-symbols-outlined">call</span>+91 94XXX XXXXX</div>
      <div class="footer-contact-item"><span class="material-symbols-outlined">mail</span>info@gangamahavidyalaya.ac.in</div>
      <div class="footer-contact-item"><span class="material-symbols-outlined">language</span>www.gangamahavidyalaya.ac.in</div>
      <div class="footer-contact-item" style="align-items:flex-start"><span class="material-symbols-outlined">location_on</span><span>Kumbhphal Village,<br>Chh. Sambhajinagar,<br>Maharashtra – 431XXX</span></div>
    </div>
  </div>
  <div class="footer-media-bar">
    <span>Media &amp; Links:</span>
    <a href="#">Video Gallery</a>
    <a href="#">Feedbacks</a>
    <a href="#">About VBSS</a>
    <a href="#">Code of Conduct</a>
    <a href="https://www.kksu.ac.in" target="_blank" rel="noopener">KKS University</a>
    <a href="#">College Prospectus</a>
    <a href="#">NEP 2020</a>
    <a href="#">Results</a>
  </div>
  <div class="footer-bottom">
    <p>© 2024 Ganga Mahavidyalaya &nbsp;|&nbsp; Governed by VBSS, Chh. Sambhajinagar &nbsp;|&nbsp; Affiliated to KKS University, Ramtek, Nagpur &nbsp;|&nbsp; Approved by Govt. of Maharashtra</p>
    <div class="footer-bottom-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Sitemap</a>
      <a href="admissions.html">Admissions</a>
    </div>
  </div>
</footer>
`;

  /* ---------- Back-to-Top HTML ---------- */
  const BTT_HTML = `<button id="back-to-top" aria-label="Back to top" title="Back to top">
    <span class="material-symbols-outlined">arrow_upward</span>
  </button>`;

  /* ---------- Determine current page ---------- */
  function getCurrentPage() {
    const path = window.location.pathname;
    const file = path.split('/').pop().replace('.html', '') || 'index';
    return file;
  }

  /* ---------- Inject navbar ---------- */
  function injectNav() {
    const slot = document.getElementById('navbar');
    if (!slot) return;
    slot.innerHTML = NAV_HTML;

    const currentPage = getCurrentPage();

    // Highlight active nav link
    document.querySelectorAll('.nav-links [data-page], .mobile-nav-links [data-page]').forEach(el => {
      if (el.dataset.page === currentPage) {
        el.classList.add('active');
      }
    });

    // Highlight parent dropdown if child is active
    const pageGroups = {
      'about-college': 'about', 'governing-body': 'about', 'principal-desk': 'about', 'faculty': 'about',
      'dept-ba-civil': 'dept', 'dept-bsc-hospitality': 'dept', 'dept-bba': 'dept', 'dept-bcom': 'dept', 'dept-mlib': 'dept',
      'activities-guest': 'activities', 'activities-achievements': 'activities', 'activities-events': 'activities',
      'committee-iqac': 'committee', 'committee-library': 'committee', 'committee-antiragging': 'committee',
      'committee-career': 'committee', 'committee-development': 'committee', 'committee-grievance': 'committee',
      'committee-nss': 'committee', 'committee-sexualharassment': 'committee', 'committee-studentcouncil': 'committee',
      'committee-alumni': 'committee',
      'facility-library': 'facility', 'facility-sports': 'facility', 'facility-seminar': 'facility',
    };
    const group = pageGroups[currentPage];
    if (group) {
      document.querySelectorAll(`.nav-trigger[data-page-group="${group}"]`).forEach(btn => {
        btn.classList.add('active');
        btn.closest('.nav-dropdown')?.classList.add('active');
      });
    }

    // Hamburger / Drawer
    const hamburger = document.getElementById('hamburger-btn');
    const drawer    = document.getElementById('mobile-drawer');
    const overlay   = document.getElementById('drawer-overlay');
    const closeBtn  = document.getElementById('drawer-close-btn');

    function openDrawer() {
      drawer.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      hamburger.setAttribute('aria-expanded', 'true');
    }
    function closeDrawer() {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger?.addEventListener('click', openDrawer);
    closeBtn?.addEventListener('click', closeDrawer);
    overlay?.addEventListener('click', closeDrawer);
    document.querySelectorAll('.mobile-nav-links a').forEach(a => a.addEventListener('click', closeDrawer));

    // Keyboard: Escape closes drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  /* ---------- Inject footer ---------- */
  function injectFooter() {
    const slot = document.getElementById('footer');
    if (!slot) return;
    slot.innerHTML = FOOTER_HTML;
  }

  /* ---------- Back to Top ---------- */
  function initBackToTop() {
    document.body.insertAdjacentHTML('beforeend', BTT_HTML);
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 320);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Run on DOM ready ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    injectNav();
    injectFooter();
    initBackToTop();
  });

})();
