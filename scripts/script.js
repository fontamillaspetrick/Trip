  // Swiper 
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
    },
    //Breakpoints
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }

  });


  // Navbar on scroll change color
  var myNav = document.getElementById('mynav');
  window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10 ) {
      myNav.classList.add("nav-colored");
      myNav.classList.remove("nav-transparent");
    } 
    else {
      myNav.classList.add("nav-transparent");
      myNav.classList.remove("nav-colored");
    }
  };

  // Tooltip
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    'customClass': 'custom-tooltip'
  })
})