$(document).ready(function () {
  var swiper = new Swiper(".mySwiper.special-offers-slider", {
    slidesPerView: 1,
    on: {
      init: function () {
        document.querySelector(".special-offers .swiper").style.visibility =
          "visible";
      },
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    autoplay: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});

const showNav = document.getElementById("nav-show");
const hideNav = document.getElementById("nav-hide");
console.log(showNav);
showNav.addEventListener("click", () => {
  hideNav.style.display = "block";
  showNav.style.display = "none";
  document.getElementById("mobile-menu").classList.remove("hidden");
});

hideNav.addEventListener("click", () => {
  showNav.style.display = "block";
  hideNav.style.display = "none";
  document.getElementById("mobile-menu").classList.add("hidden");
});

const plusBtns = document.querySelectorAll(".accordion-btn");
const contentWrappers = document.querySelectorAll(".dropdown-wrapper");

plusBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    contentWrappers[index].classList.toggle("active");
    if (contentWrappers[index].classList.contains("active")) {
      btn.children[1].style.transform = "rotate(180deg)";
    } else {
      btn.children[1].style.transform = "rotate(0)";
    }
  });
});


