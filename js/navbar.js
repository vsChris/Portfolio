const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list-link');
let menuOpen = false;

function isMenuOpen() {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    nav.classList.add('show');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    nav.classList.remove('show');
  }
}

function closeEvent(e) {
  if (menuOpen) {
    menuBtn.classList.remove('open');
    menuOpen = false;
    nav.classList.remove('show');
  }
}

menuBtn.addEventListener('click', isMenuOpen);
navLinks.forEach((navLink) => navLink.addEventListener('click', closeEvent));
