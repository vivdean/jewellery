'use strict';

(function () {

  var accordions = document.querySelectorAll('.accordion');

  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('accordion--nojs');
  }
  document.addEventListener('click', function (evt) {

    if (!evt.target.classList.contains('accordion__title')) {
      return;
    }

    var content = evt.target.parentElement;
    if (!content) {
      return;
    }

    if (content.classList.contains('accordion--show')) {
      content.classList.remove('accordion--show');
      return;
    }

    var filterAccordion = document.querySelector('.FAQ__accordion');

    if (filterAccordion) {
      var accordionsActive = document.querySelectorAll('.accordion--show');
      for (var j = 0; j < accordionsActive.length; j++) {
        accordionsActive[j].classList.remove('accordion--show');
      }
    }

    content.classList.add('accordion--show');

  }, false);
})();
