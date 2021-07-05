'use strict';

const header = document.querySelector('header');
const mobileTopBar = document.querySelector('.top-line');
const mobileBottomBar = document.querySelector('.bottom-line');
const mobileMenuIcon = document.querySelector('#mobile-menu-icon');
const mobileMenuContent = document.querySelector('.mobile-menu-content');
const menuItems = document.querySelectorAll('#mobile-menu li');

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    //Add header-scroll class to header
    header.classList.add('header-scroll');

    //Add dark-color class to top and bottom mobile menu bar
    mobileBottomBar.classList.add('dark-color');
    mobileTopBar.classList.add('dark-color');
  } else {
    header.classList.remove('header-scroll');
    mobileBottomBar.classList.remove('dark-color');
    mobileTopBar.classList.remove('dark-color');
  }
});

mobileMenuIcon.addEventListener('click', () => {
  if (mobileTopBar.classList.contains('active') && mobileBottomBar.classList.contains('active')) {
    mobileTopBar.classList.remove('active');
    mobileBottomBar.classList.remove('active');
    mobileMenuContent.classList.remove('active');
  } else {
    mobileTopBar.classList.add('active');
    mobileBottomBar.classList.add('active');
    mobileMenuContent.classList.add('active');
  }
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileTopBar.classList.remove('active');
    mobileBottomBar.classList.remove('active');
    mobileMenuContent.classList.remove('active');
  });
});
