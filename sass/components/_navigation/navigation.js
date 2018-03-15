(() => {
  'use strict';
  window.onload = expandNav;

  function expandNav() {
    const navbarToggler = document.querySelector('.primary-navbar__toggler');
    const navbarIcon = document.querySelector('.primary-navbar__icon');
    const navbarMenu = document.querySelector('.primary-navbar__nav');
    const navFixLayout= document.querySelector('.primary-navbar__fixlayout');
    const headerSocialBlock = document.querySelector('.header__social');
    
    navbarToggler.addEventListener('click' , () => {
      navbarIcon.classList.toggle('primary-navbar__icon--expanded');
      navbarMenu.classList.toggle('primary-navbar__nav--expanded');
      navFixLayout.classList.toggle('primary-navbar__fixlayout--expanded');
      headerSocialBlock.classList.toggle('header__social--expanded');
      document.querySelector('.wrapper').classList.toggle('wrapper--navopen');

      if(document.querySelector('.wrapper').classList.contains('wrapper--navopen')) {
        setTimeout(() => {
          document.querySelector('.wrapper').style.overflowX = 'hidden';
        }, 500);
      } 
    });

    navFixLayout.addEventListener('click', () => {
      navbarIcon.classList.toggle('primary-navbar__icon--expanded');
      navbarMenu.classList.toggle('primary-navbar__nav--expanded');
      navFixLayout.classList.toggle('primary-navbar__fixlayout--expanded');
      headerSocialBlock.classList.toggle('header__social--expanded');
      document.querySelector('.wrapper').classList.toggle('wrapper--navopen');
      
      if(!document.querySelector('.wrapper').classList.contains('wrapper--navopen')) {
        setTimeout(() => {
          document.querySelector('.wrapper').style.overflowX = 'visible';
        }, 500);
      } 
    });
  }
})();