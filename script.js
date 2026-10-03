// Header solid-on-scroll (skipped if header is already forced solid via .static-solid)
const header = document.getElementById('siteHeader');
if (header && !header.classList.contains('static-solid')) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('solid', window.scrollY > 40);
  });
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
}

// Menu page: jump nav active state
const jumpPills = document.querySelectorAll('.jump-pill');
const menuCats = document.querySelectorAll('.menu-cat');
if (jumpPills.length && menuCats.length) {
  const catObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const pill = document.querySelector('.jump-pill[href="#' + id + '"]');
      if (!pill) return;
      if (entry.isIntersecting) {
        jumpPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      }
    });
  }, { rootMargin: '-160px 0px -70% 0px' });
  menuCats.forEach(cat => catObserver.observe(cat));
}
