
const swiper = require('swiper');

window.addEventListener( 'load', function () {
    swiper( '.reviews .swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        speed: 800,
        breakpoints: {
            768: {
                autoplay: 4000,
                grabCursor: true
            }
        }
    });
}, false );
