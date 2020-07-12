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

$('.cotiza').click(function(e) {
    e.preventDefault();
  $(".modal-success").fadeIn();
});

$('.cancel').click(function(e) {
    e.preventDefault();
  $(".modal-success").fadeOut();
});

$('.confirm').click(function(e) {
    e.preventDefault();
  $(".modal-success").fadeOut();
});

$('.comprar_creditos').click(function(e) {
    e.preventDefault();
    $(".modal-success").fadeOut();
  $(".modal-comprar").fadeIn();
});

$('.cotizarclose').click(function(e) {
    e.preventDefault();
  $(".modal-comprar").fadeOut();
});