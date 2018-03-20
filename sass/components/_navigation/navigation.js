(() => {
  'use strict';
  window.onload = expandNav;

  function expandNav() {
    const navbarToggler = document.querySelector('.navbar-primary__toggler');
    const navbarIcon = document.querySelector('.navbar-primary__icon');
    const navbarMenu = document.querySelector('.navbar-primary__nav');
    const navFadeLayout= document.querySelector('.navbar-primary__fadelayout');

    navbarToggler.addEventListener('click' , () => {
     // navbarIcon.classList.toggle('navbar-primary__icon--expanded');
      navbarMenu.classList.toggle('navbar-primary__nav--expanded');
      navFadeLayout.classList.toggle('navbar-primary__fadelayout--expanded');
    
      document.querySelector('.wrapper').classList.toggle('wrapper--navopen');

      // if(document.querySelector('.wrapper').classList.contains('wrapper--navopen')) {
      //   setTimeout(() => {
      //     document.querySelector('.wrapper').style.overflowX = 'hidden';
      //   }, 500);
      // } 
    });

    navFadeLayout.addEventListener('click', () => {
      //navbarIcon.classList.toggle('navbar-primary__icon--expanded');
      navbarMenu.classList.toggle('navbar-primary__nav--expanded');
      navFadeLayout.classList.toggle('navbar-primary__fadelayout--expanded');
      
      document.querySelector('.wrapper').classList.toggle('wrapper--navopen');
      
      if(!document.querySelector('.wrapper').classList.contains('wrapper--navopen')) {
        setTimeout(() => {
          document.querySelector('.wrapper').style.overflowX = 'visible';
        }, 500);
      } 
    });
  }
})();