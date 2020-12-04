'use strict';

(function () {

  var navMain = document.querySelector('.header');
  var navToggle = document.querySelector('.header__toggle');

  navMain.classList.remove('header--nojs');

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('header--hide');
  });

})();
