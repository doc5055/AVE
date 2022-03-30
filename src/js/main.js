document.addEventListener('DOMContentLoaded', function() {

  const homeSpace = {
    selectCurrency: function selectCurrency() {
      let selectHeader = document.querySelectorAll('.header__select-header');
      let selectItem = document.querySelectorAll('.header__select-item');

      selectHeader.forEach(item => {
          item.addEventListener('click', selectToggle)
          item.addEventListener('keyup', selectToggle)
      });

      selectItem.forEach(item => {
          item.addEventListener('click', selectChoose)
          item.addEventListener('keyup', selectChoose)
      });

      function selectToggle() {
          this.parentElement.classList.toggle('header__select--active');
      }

      function selectChoose(event) {
        if (event.key == 'Enter' || event.which == 1) {
          let text = this.innerText,
              select = this.closest('.header__select'),
              currentText = select.querySelector('.header__select-header--current');
          currentText.innerText = text;
          select.classList.remove('header__select--active');
          select.querySelectorAll('.header__select-item').forEach(el => {
            el.classList.remove('header__select-item--hide');
          })
          event.currentTarget.classList.add('header__select-item--hide');
        }
      }

      document.addEventListener('click', selectClose);
      document.addEventListener('keyup', selectClose);

      function selectClose (event) {
        const items = document.querySelectorAll('.header__select');
        items.forEach(el => {
          if (!el.contains(event.target)) el.classList.remove('header__select--active');
        })
      }
    },

    menu: function heroMenu() {
      const menuLinks = document.querySelectorAll('.home-hero__menu-link');
      const menuContent = document.querySelectorAll('.menu-item__content');
      const menuArrow = document.querySelectorAll('.fa-angle-down');
      const menuItems = document.querySelectorAll('.home-hero__menu-item');

      menuLinks.forEach(link => {
        link.addEventListener('focus', menuItemCategories)
      });

      function menuItemCategories (event) {
        if (event.key != 'Enter' || event.which != 1 || event.keyCode != 9) {
          menuContent.forEach(el => {
            el.classList.remove('menu-item__content--active');
          });
          menuArrow.forEach(el => {
            el.classList.remove('fa-angle-down--active');
          });
          menuLinks.forEach(el => {
            el.classList.remove('home-hero__menu-link--active');
          });
          if(event.currentTarget.closest('.home-hero__menu-item').querySelector('.menu-item__content')) {
            let menuItem = event.currentTarget.closest('.home-hero__menu-item');
            menuItem.querySelector('.menu-item__content').classList.add('menu-item__content--active');
            menuItem.querySelector('.fa-angle-down').classList.add('fa-angle-down--active');
            menuItem.querySelector('.home-hero__menu-link').classList.add('home-hero__menu-link--active');
          }

        }
      }

      document.addEventListener('click', menuItemCategoriesClose);
      document.addEventListener('keyup', menuItemCategoriesClose);

      function menuItemCategoriesClose (event) {
        menuItems.forEach(el => {
          if (!el.contains(event.target)) {
            if(el.querySelector('.menu-item__content')) {
              el.querySelector('.menu-item__content').classList.remove('menu-item__content--active');
              el.querySelector('.fa-angle-down').classList.remove('fa-angle-down--active');
              el.querySelector('.home-hero__menu-link').classList.remove('home-hero__menu-link--active');
            }
          }
        })
      }
    },

    goods: function goodsCard() {
      const goodsLinks = document.querySelectorAll('.home-goods__card-link');
      const goodsCard = document.querySelectorAll('.home-goods__card');
      const goodsContent = document.querySelectorAll('.home-goods__card-content');

      goodsLinks.forEach(link => {
        link.addEventListener('focus', goodsCardContent);
      });

      goodsCard.forEach(card => {
        card.addEventListener('mouseover', goodsCardContent);
        card.addEventListener('mouseout', goodsCardContentOut);
      });

      function goodsCardContent (event) {
        if (event.key != 'Enter' || event.which != 1 || event.keyCode != 9) {
          goodsContent.forEach(el => {
            el.classList.remove('home-goods__card-content--active');
          });
          goodsLinks.forEach(el => {
            el.classList.remove('home-goods__card-link--active');
          });
          if(event.currentTarget.closest('.home-goods__card').querySelector('.home-goods__card-content')) {
            let menuItem = event.currentTarget.closest('.home-goods__card');
            menuItem.querySelector('.home-goods__card-content').classList.add('home-goods__card-content--active');
            menuItem.querySelector('.home-goods__card-link').classList.add('home-goods__card-link--active');
          }
        }
      }

      function goodsCardContentOut () {
        goodsContent.forEach(el => {
          el.classList.remove('home-goods__card-content--active');
        });
        goodsLinks.forEach(el => {
          el.classList.remove('home-goods__card-link--active');
        });
      }
    },

    informationMenu: function informationMenu() {
      document.querySelectorAll('.information__item-title').forEach(el => {
        el.addEventListener('click', (event) => {
          event.preventDefault();
          event.currentTarget.nextElementSibling.classList.toggle('information__item-list--active');
          event.currentTarget.querySelector('.fa-angle-down').classList.toggle('information__item-angle--active');
        });
      });

      document.addEventListener('click', listClose);

      function listClose (event) {
        const items = document.querySelectorAll('.information__item');
        items.forEach(el => {
          if (!el.contains(event.target)) {
            el.querySelector('.information__item-list').classList.remove('information__item-list--active');
            el.querySelector('.fa-angle-down').classList.remove('information__item-angle--active');
          }
        })
      }
    }
  }

  homeSpace.selectCurrency();
  homeSpace.menu();
  homeSpace.goods();
  homeSpace.informationMenu();

  let lookbookSwiper = new Swiper('.home-lookbook__content', {
    centeredSlides: true,

    slidesPerView: 3,

    loop: true,

    freeMode: true,

    spaceBetween: 30,

    initialSlide: 1,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      1301: {
        slidesPerView: 3,
      }
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    mousewheel: {
      sensitivity: 1,
      eventsTarget: '.swiper'
    },

    speed: 800,

    autoplay: {
      delay: 7000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.home-lookbook__swiper-button--next',
      prevEl: '.home-lookbook__swiper-button--prev',
    },
  });

});
