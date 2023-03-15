import './style/style.scss';

const menuBtn = document.querySelector('.hamburger-menu');
const menu = document.querySelector('nav');

function openMenu() {
  menu?.classList.toggle('open-mobile');
  menuBtn?.classList.toggle('open');
}

menuBtn?.addEventListener('click', openMenu);

console.log('Is this site working???');
