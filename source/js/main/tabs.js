'use strict';

(function () {

  var jsTriggers = document.querySelectorAll('.tabs__trigger');

  if (jsTriggers) {

    var activateTabsContent = function (i) {
      return function () {
        var id = jsTriggers[i].getAttribute('data-tab');
        var content = document.querySelector('.tabs__card[data-tab="' + id + '"]');
        var activeTrigger = document.querySelector('.tabs__trigger.active');
        var activeContent = document.querySelector('.tabs__card.active');

        activeTrigger.classList.remove('active');
        jsTriggers[i].classList.add('active');

        activeContent.classList.remove('active');
        content.classList.add('active');
      };
    };

    for (var i = 0; i < jsTriggers.length; i++) {
      jsTriggers[i].addEventListener('click', activateTabsContent(i));
    }
  }
})();
