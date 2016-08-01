// TESTIMONIALS SLIDER
// ------------------------------------

var swiper = require( 'swiper' );

swiper( '.testimonials .swiper-container', {
    pagination: '.testimonials .swiper-pagination',
    paginationClickable: true,
    breakpoints: {
        500: {
            autoplay: 2000,
            speed: 1000,
            grabCursor: true
        }
    }
});

module.exports = {};
