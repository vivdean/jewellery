'use strict';

/* eslint-disable */
(function () {
  var swiper = document.querySelector('.swiper-container');

  if (swiper) {

    var swiper = new Swiper('.swiper-container', {
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
          pagination: {
            el: '.swiper-pagination',
            type: "custom",
            clickable: true,
            renderCustom: function (swiper, current, total) {
              return current + '  of  ' + total;
            },
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
          pagination: {
            type: 'bullets',
          },
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
          slidesPerGroup: 4,
        },
      },
      navigation: {
        nextEl: '.product-slider__control--next',
        prevEl: '.product-slider__control--prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
  }
})();

/* eslint-enable */
