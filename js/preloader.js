'use strict'

var preloader = document.querySelector('.preloader');
var body = document.querySelector('body');

var hidePreloader = () => {
  
  setTimeout(()=>{
    preloader.classList.add('fadeOut', 'animated');
    body.classList.remove('js-preloader');
  }, 1500)
 
  setTimeout(()=>{
    preloader.style.zIndex = '-1';
  }, 2500)
};

window.onload = hidePreloader();