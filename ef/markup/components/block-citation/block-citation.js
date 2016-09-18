var swiper = require('swiper');
// ------------------------------------
window.addEventListener( 'load', function () {
    swiper( '.citation .swiper-container', {
        pagination: '.citation .swiper-pagination',
        paginationClickable: true,
        loop: true,
        500: {
            autoplay: 2000
        }
    });
}, false );
