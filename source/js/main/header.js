'use strict';

(function () {

  var navMain = document.querySelector('.header');
  var navToggle = document.querySelector('.header__toggle');

  if (navMain) {

    navMain.classList.remove('header--nojs');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('header--hide')) {
        navMain.classList.remove('header--hide');
        document.body.style.overflow = 'hidden';
      } else {
        navMain.classList.add('header--hide');
        document.body.style.overflow = '';
      }
    });
  }

})();
