$(document).ready(function () {

    var swiper = new Swiper(".mySwiper.special-offers-slider", {
        slidesPerView: 1,
        on: {
            init: function () {
                document.querySelector('.special-offers .swiper').style.visibility = 'visible';
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
    //

    
});