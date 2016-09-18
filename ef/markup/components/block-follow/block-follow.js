var swiper = require('swiper');
// ------------------------------------
window.addEventListener( 'load', function () {
    swiper( '.follow .swiper-container', {
        pagination: '.follow .swiper-pagination',
        paginationClickable: true,
        loop: true,
        breakpoints: {
            500: {
                autoplay: 2000
            }
        }
    });
}, false );
