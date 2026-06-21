(function () {
  var nav = document.getElementById('site-nav');
  if (!nav) return;

  nav.innerHTML =
    '<div class="top-bar"><div class="container">' +
    '<span>📞 +91 94XXX XXXXX</span>' +
    '<span><a href="contact.html">Contact</a><a href="admissions.html">Admission</a></span>' +
    '</div></div>' +
    '<header class="site-header"><div class="container">' +
    '<p class="trust">Vishwa Bahuuddeshiya Sevabhavi Sanstha (VBSS), Chh. Sambhajinagar</p>' +
    '<h1><a href="index.html" style="color:inherit;text-decoration:none">Ganga Mahavidyalaya</a></h1>' +
    '<p class="loc">Kumbhphal Village, Chh. Sambhajinagar, Maharashtra</p>' +
    '<p class="affil">(Affiliated to Kavikulaguru Kalidas Sanskrit University, Ramtek)</p>' +
    '</div></header>' +
    '<nav class="main-nav" aria-label="Main navigation">' +
    '<div class="container" style="display:flex;align-items:center">' +
    '<button class="nav-toggle" aria-label="Menu" type="button">☰</button>' +
    '<ul class="nav-menu">' +
    '<li><a href="index.html">Home</a></li>' +
    '<li><a href="about-college.html">About HEI ▾</a>' +
    '<ul class="dropdown">' +
    '<li><a href="about-college.html">About College</a></li>' +
    '<li><a href="principal-desk.html">Principal Desk</a></li>' +
    '<li><a href="governing-body.html">Board of Management</a></li>' +
    '</ul></li>' +
    '<li><a href="#">Academic ▾</a>' +
    '<ul class="dropdown">' +
    '<li><a href="dept-ba-civil.html">B.A. Civil Services</a></li>' +
    '<li><a href="dept-bba.html">BBA</a></li>' +
    '<li><a href="dept-bcom.html">B.Com</a></li>' +
    '<li><a href="dept-bsc-hospitality.html">B.Sc. Hospitality</a></li>' +
    '<li><a href="dept-mlib.html">M.Lib.</a></li>' +
    '<li><a href="faculty.html">Teaching Faculty</a></li>' +
    '</ul></li>' +
    '<li><a href="admissions.html">Admission &amp; Fee</a></li>' +
    '<li><a href="#">Students Support ▾</a>' +
    '<ul class="dropdown">' +
    '<li><a href="facility-sports.html">Sport Facilities</a></li>' +
    '<li><a href="committee-nss.html">NSS</a></li>' +
    '<li><a href="placement.html">Placement Cell</a></li>' +
    '<li><a href="committee-antiragging.html">Anti-Ragging</a></li>' +
    '</ul></li>' +
    '<li><a href="facility-library.html">Library</a></li>' +
    '<li><a href="naac.html">NAAC / IQAC</a></li>' +
    '<li><a href="contact.html">Contact Us</a></li>' +
    '</ul></div></nav>';

  var toggle = nav.querySelector('.nav-toggle');
  var menu = nav.querySelector('.nav-menu');
  toggle.addEventListener('click', function () {
    menu.classList.toggle('open');
  });

  nav.querySelectorAll('.nav-menu > li > a').forEach(function (link) {
    if (link.nextElementSibling && link.nextElementSibling.classList.contains('dropdown')) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          link.parentElement.classList.toggle('open');
        }
      });
    }
  });

  var footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML =
      '<div class="container"><div class="footer-grid">' +
      '<div><h3>Contact Us</h3>' +
      '<p>Ganga Mahavidyalaya<br>Kumbhphal Village, Chh. Sambhajinagar<br>Maharashtra – 431XXX</p>' +
      '<p style="margin-top:8px">📞 +91 94XXX XXXXX</p>' +
      '<p>✉ info@gangamahavidyalaya.ac.in</p></div>' +
      '<div><h3>Important Links</h3><ul>' +
      '<li><a href="https://kksanskrituni.digitaluniversity.ac/" target="_blank" rel="noopener">KKSU University Ramtek</a></li>' +
      '<li><a href="https://www.maharashtra.gov.in/" target="_blank" rel="noopener">Government of Maharashtra</a></li>' +
      '<li><a href="https://www.ugc.gov.in/" target="_blank" rel="noopener">UGC</a></li>' +
      '</ul></div>' +
      '<div><h3>Useful Links</h3><ul>' +
      '<li><a href="admissions.html">Prospectus / Admission</a></li>' +
      '<li><a href="naac.html">NAAC</a></li>' +
      '<li><a href="committee-iqac.html">IQAC</a></li>' +
      '<li><a href="facility-library.html">Library</a></li>' +
      '</ul></div>' +
      '<div><h3>Map View</h3>' +
      '<p><a href="https://maps.google.com/?q=Kumbhphal+Aurangabad+Maharashtra" target="_blank" rel="noopener">📍 Open in Google Maps</a></p></div>' +
      '</div></div>' +
      '<div class="footer-bottom">Copyright © 2024 Ganga Mahavidyalaya. All rights reserved.</div>';
  }

  var slider = document.querySelector('.slider');
  if (!slider) return;
  var slides = slider.querySelector('.slides');
  var dots = slider.querySelectorAll('.slider-dots button');
  var total = slides.children.length;
  var current = 0;

  function goTo(n) {
    current = (n + total) % total;
    slides.style.transform = 'translateX(-' + current * 100 + '%)';
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === current);
    });
  }

  dots.forEach(function (d, i) {
    d.addEventListener('click', function () {
      goTo(i);
    });
  });

  setInterval(function () {
    goTo(current + 1);
  }, 5000);
})();
