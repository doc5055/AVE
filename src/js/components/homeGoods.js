document.addEventListener('DOMContentLoaded', function() {

  var homeGoodsSpace = {
    menu: function homeGoodsMenu() {
      document.querySelectorAll('.home-goods__menu-trigger').forEach(trigger =>
        trigger.addEventListener('click', function(event) {
          event.preventDefault();
          const id_trigger = event.target.getAttribute('href').replace('#', '');

          document.querySelectorAll('.home-goods__menu-trigger').forEach(
            child => child.classList.remove('home-goods__menu-trigger--active')
          );

          document.querySelectorAll('.home-goods__menu-item').forEach(
            child => child.classList.remove('home-goods__menu-item--active')
          );

          trigger.classList.add('home-goods__menu-trigger--active');
          document.getElementById(id_trigger).classList.add('home-goods__menu-item--active');
        })
      )
    }
  };

  homeGoodsSpace.menu();

});
