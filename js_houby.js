const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('mobile-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});