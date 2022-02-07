document.addEventListener('DOMContentLoaded', function() {

  var lookbookGoodsSpace = {
    menu: function lookbookGoodsMenu() {
      document.querySelectorAll('.lookbook-goods__menu-trigger').forEach(trigger =>
        trigger.addEventListener('click', function(event) {
          event.preventDefault();
          const id_trigger = event.target.getAttribute('href').replace('#', '');

          document.querySelectorAll('.lookbook-goods__menu-trigger').forEach(
            child => child.classList.remove('lookbook-goods__menu-trigger--active')
          );

          document.querySelectorAll('.lookbook-goods__menu-item').forEach(
            child => child.classList.remove('lookbook-goods__menu-item--active')
          );

          trigger.classList.add('lookbook-goods__menu-trigger--active');
          document.getElementById(id_trigger).classList.add('lookbook-goods__menu-item--active');
        })
      )
    }
  };

  lookbookGoodsSpace.menu();

});
