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



// Proveedor - Cotizar

$(".btn_cotizar").click(function (e) {
  e.preventDefault();
  $(".btn_cotizar").addClass("active");
  $(".btn_proveedor").removeClass("active");
  $(".cotizar_content").css('display', 'flex');
  $(".proveedor_content").css('display', 'none');
});
$(".btn_proveedor").click(function (e) {
  e.preventDefault();
  $(".btn_proveedor").addClass("active");
  $(".btn_cotizar").removeClass("active");
  $(".proveedor_content").css('display', 'flex');
  $(".cotizar_content").css('display', 'none');
});


// Testimonios
$('.owl-testimonios').owlCarousel({
   
    dots: true,
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:1,
            stagePadding: 150,
        },
        1300:{
            items:1,
             stagePadding: 350,
        },
        1500:{
            items:1,
            stagePadding: 550,
        }
    }
});


// Proveedores destacados general
$('.owl-proveedores').owlCarousel({
    dots: true,
    loop:true,
    margin:20,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:1,
            stagePadding: 120,
            startPosition: 1
        },
        1020:{
            items:1,
             stagePadding: 200,
             startPosition: 1
        },
        1300:{
            items:1,
             stagePadding: 400,
             startPosition: 1
        },
        1500:{
            items:1,
            stagePadding: 600,
            startPosition: 1
        }
    }
});

$('.owl-proveedores-single').owlCarousel({
    dots: false,
    loop:true,
    margin:0,
    autoplay:false,
    nav:true,
    navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:1
        },
        1300:{
            items:1
        },
        1500:{
            items:1
        }
    }
});