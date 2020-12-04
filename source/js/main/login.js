'use strict';

(function () {

  var ESC = 27;
  var loginOpenbtn = document.querySelector('.header__link--login');
  var loginModal = document.querySelector('.login');
  var loginCloseBtn = loginModal.querySelector('.login__close');
  var form = loginModal.querySelector('form');
  var userEmail = form.querySelector('[name=email]');
  var userPassword = form.querySelector('[name=password]');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  }

  var openModal = function () {
    loginModal.classList.add('login--show');
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onModalEcsPress);
    loginCloseBtn.addEventListener('click', function () {
      closeModal();
    });
  };

  var closeModal = function () {
    if (loginModal.classList.contains('login--show')) {
      loginModal.classList.remove('login--show');
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

  loginOpenbtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    openModal();
    if (storage) {
      userEmail.value = storage;
      userPassword.focus();
    } else {
      userEmail.focus();
    }
  });

  loginModal.addEventListener('click', function (evt) {
    var loginContent = loginModal.querySelector('.login__content');
    if (!loginContent.contains(evt.target)) {
      closeModal();
    }
  });

  form.addEventListener('submit', function () {
    if (isStorageSupport) {
      localStorage.setItem('email', userEmail.value);
    }
  });

})();
