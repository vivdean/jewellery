'use strict';

(function () {

  var ESC = 27;
  var filter = document.querySelector('.filter');
  var filterBtnOpen = document.querySelector('.filter__btn-open');
  var filterBtnClose = document.querySelector('.filter__btn-close');

  if (filter) {

    filter.classList.remove('filter--nojs');

    filterBtnOpen.addEventListener('click', function () {
      filter.classList.remove('filter--hide');
      document.body.style.overflow = 'hidden';
    });

    filterBtnClose.addEventListener('click', function () {
      filter.classList.add('filter--hide');
      document.body.style.overflow = '';
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESC) {
        evt.preventDefault();
        filter.classList.add('filter--hide');
      }
    });
  }
})();
