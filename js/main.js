'use strict';

const header = document.querySelector('header');

//On scroll add header-scroll class to header
document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }
});
