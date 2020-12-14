'use strict';

(function () {

  var accordions = document.querySelectorAll('.accordion');
  var accordionBtns = document.querySelectorAll('.accordion__btn');

  if (accordions) {

    var showContent = function (j) {
      return function (evt) {
        evt.preventDefault();
        var accordionBlock = accordionBtns[j].closest('.accordion');
        if (accordionBlock.classList.contains('accordion--show')) {
          accordionBlock.classList.remove('accordion--show');
        } else {
          accordionBlock.classList.add('accordion--show');
        }
      };
    };

    for (var i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove('accordion--nojs');
    }

    for (var j = 0; j < accordionBtns.length; j++) {
      accordionBtns[j].addEventListener('click', showContent(j));
    }
  }
})();
