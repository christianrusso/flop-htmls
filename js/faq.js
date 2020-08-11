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

$(".togglefaq i").addClass('fa');
//faq toggle
$(".togglefaq").click(function (e) {
  e.preventDefault();
  var notthis = $(".active").not(this);
  notthis.find(".fa-angle-down").addClass("fa-angle-right").removeClass("fa-angle-down");
  notthis.toggleClass("active").next(".faqanswer").slideToggle(300);
  $(this).toggleClass("active").next().slideToggle("fast");
  $(this).children("i").toggleClass("fa-angle-right fa-angle-down");
});


$(".proveedor_btn").click(function (e) {
  e.preventDefault();
  $(".proveedor_btn").addClass('active');
  $(".comprador_btn").removeClass('active');
  $(".general_btn").removeClass('active');

  $(".container_proveedor").fadeIn();
  $(".container_comprador").fadeOut();
  $(".container_general").fadeOut();
});

$(".comprador_btn").click(function (e) {
  e.preventDefault();
  $(".comprador_btn").addClass('active');
  $(".proveedor_btn").removeClass('active');
  $(".general_btn").removeClass('active');

  $(".container_comprador").fadeIn();
  $(".container_proveedor").fadeOut();
  $(".container_general").fadeOut();
});

$(".general_btn").click(function (e) {
  e.preventDefault();
  $(".general_btn").addClass('active');
  $(".comprador_btn").removeClass('active');
  $(".proveedor_btn").removeClass('active');

  $(".container_general").fadeIn();
  $(".container_comprador").fadeOut();
  $(".container_proveedor").fadeOut();
});


