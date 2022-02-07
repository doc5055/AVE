document.addEventListener('DOMContentLoaded', function() {

  var productViewSpace = {

    menu: function productViewMenu() {
      document.querySelectorAll('.product-view__menu-trigger').forEach(trigger =>
        trigger.addEventListener('click', function(event) {
          event.preventDefault();
          const id_trigger = event.target.getAttribute('href').replace('#', '');

          document.querySelectorAll('.product-view__menu-trigger').forEach(
            child => child.classList.remove('product-view__menu-trigger--active')
          );

          document.querySelectorAll('.product-view__menu-item').forEach(
            child => child.classList.remove('product-view__menu-item--active')
          );

          trigger.classList.add('product-view__menu-trigger--active');
          document.getElementById(id_trigger).classList.add('product-view__menu-item--active');
        })
      )
    },

    select: function selectParam() {
      let selectHeader = document.querySelectorAll('.content-info__select-header');
      let selectItem = document.querySelectorAll('.content-info__select-item');

      selectHeader.forEach(item => {
          item.addEventListener('click', selectToggle)
          item.addEventListener('keyup', selectToggle)
      });

      selectItem.forEach(item => {
          item.addEventListener('click', selectChoose)
          item.addEventListener('keyup', selectChoose)
      });

      function selectToggle() {
          this.parentElement.classList.toggle('content-info__select--active');
      }

      function selectChoose(event) {
        if (event.key == 'Enter' || event.which == 1) {
          let text = this.innerText,
              select = this.closest('.content-info__select'),
              currentText = select.querySelector('.content-info__select-header--current');
          currentText.innerText = text;
          select.classList.remove('content-info__select--active');
        }
      }

      document.addEventListener('click', selectClose);
      document.addEventListener('keyup', selectClose);

      function selectClose (event) {
        const items = document.querySelectorAll('.content-info__select');
        items.forEach(el => {
          if (!el.contains(event.target)) el.classList.remove('content-info__select--active');
        })
      }
    },

    quantity: function productViewQuantity () {
      document.querySelector('.content-info__quantity-arrow--up').addEventListener('click', function() {
        let quantityArrowUp = this.closest('.content-info__quantity').querySelector('.content-info__quantity-val');
        let quantityArrowUpVal = Number(quantityArrowUp.value)+1;
        quantityArrowUp.value = quantityArrowUpVal;
      });

      document.querySelector('.content-info__quantity-arrow--down').addEventListener('click', function() {
        let quantityArrowDown = this.closest('.content-info__quantity').querySelector('.content-info__quantity-val');
        let quantityArrowUpVal = Number(quantityArrowDown.value)-1;
        if (quantityArrowUpVal < 1) quantityArrowUpVal = 1;
        quantityArrowDown.value = quantityArrowUpVal;
      });
    }

  };

  productViewSpace.menu();
  productViewSpace.select();
  productViewSpace.quantity();

  let productViewSwiper = new Swiper('.product-view__swiper', {
    slidesPerView: 1,

    loop: true,

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    speed: 800,

    autoplay: {
      delay: 7000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.product-view__swiper-button--next',
      prevEl: '.product-view__swiper-button--prev',
    },
  });

});
