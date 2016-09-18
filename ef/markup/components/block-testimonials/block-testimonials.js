var swiper = require('swiper');
// ------------------------------------
window.addEventListener( 'load', function () {
    swiper( '.testimonials .swiper-container', {
        pagination: '.testimonials .swiper-pagination',
        paginationClickable: true,
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            980: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 1
            },
            500: {
                slidesPerView: 1,
                autoplay: 2000
            }
        }
    });
}, false );
