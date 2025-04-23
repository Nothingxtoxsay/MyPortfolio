// Scroll button show/hide logic
$(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass("show");
      } else {
        $('.scroll-up-btn').removeClass("show");
      }
    });
  
    // Slide-up script
    $('.scroll-up-btn').click(function () {
      $('html').animate({ scrollTop: 0 });
      $('html').css("scrollBehavior", "auto");
    });
  
    $('.navbar .menu li a').click(function () {
      $('html').css("scrollBehavior", "smooth");
    });
  
    // Toggle menu/navbar
    $('.menu-btn').click(function () {
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });
  
    // Carousel settings
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  
    
    var typed = new Typed(".typing", {
      strings: ["BSIT Student", "Web Developer", "UI Designer", "Tech Enthusiast"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed2 = new Typed(".typing-2", {
      strings: ["BSIT Student", "Web Developer", "UI Designer", "Tech Enthusiast"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  });
  