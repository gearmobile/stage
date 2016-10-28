// ------------------------------------
// HEADER SLIDER
// ------------------------------------
const swiper = require( 'swiper' );
// ------------------------------------
window.addEventListener( 'load', function () {
    swiper( '.header .swiper-container', {
        nextButton: '.header .swiper-button-next',
        prevButton: '.header .swiper-button-prev',
        loop: true,
        breakpoints: {
            768: {
                autoplay: 2000,
                speed: 800,
                grabCursor: true
            },
            500: {
                effect: 'fade',
                grabCursor: false
            }
        }
    });
}, false );
// ------------------------------------
