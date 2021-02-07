const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list-link');
// console.log(navLinks);
let menuOpen = false;

function isMenuOpen() {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    nav.classList.add('show');
    // navLinks.forEach((link) => link.classList.add('display'));
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    nav.classList.remove('show');
    // navLinks.forEach((link) => link.classList.remove('display'));
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
