'use strict';

(function () {

  var ESC = 27;
  var cartOpenbtn = document.querySelector('.card__add-button');

  if (cartOpenbtn) {

    var cartModal = document.querySelector('.cart');
    var cartCloseBtn = cartModal.querySelector('.cart__close');

    var openModal = function () {
      cartModal.classList.add('cart--show');
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onModalEcsPress);
      cartCloseBtn.addEventListener('click', function () {
        closeModal();
      });
    };

    var closeModal = function () {
      if (cartModal.classList.contains('cart--show')) {
        cartModal.classList.remove('cart--show');
        document.body.style.overflow = '';
      }
      window.removeEventListener('keydown', onModalEcsPress);
    };

    var onModalEcsPress = function (evt) {
      if (evt.keyCode === ESC) {
        evt.preventDefault();
        closeModal();
      }
    };

    cartOpenbtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      openModal();
    });

    cartModal.addEventListener('click', function (evt) {
      var cartContent = cartModal.querySelector('.cart__content');
      if (!cartContent.contains(evt.target)) {
        closeModal();
      }
    });
  }
})();
