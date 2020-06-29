$.fn.andSelf = function() {
  return this.addBack.apply(this, arguments);
}

// CLICK MENU //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
  });


  return false;
});


function mobileMenuOpen() {
    document.getElementById("gmDropdown").classList.toggle("show");
}

$('.btn_nueva_cotizacion').click(function(e) {
    e.preventDefault();
  $(".modal-alert").fadeIn();
});

$('.go_close').click(function(e) {
    e.preventDefault();
  $(".modal-success").fadeOut();
});

$('.go_close_alert').click(function(e) {
    e.preventDefault();
  $(".modal-alert").fadeOut();
});

$('.btn_enviar_cotizacion').click(function(e) {
    e.preventDefault();
  $(".modal-success").fadeIn();
});

$('.close-modal-success').click(function(e) {
    e.preventDefault();
  $(".modal-success").fadeOut();
});

$('.close-modal-alert').click(function(e) {
    e.preventDefault();
  $(".modal-alert").fadeOut();
});
