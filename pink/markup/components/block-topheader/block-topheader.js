// TOPHEADER HIDE AND SHOW
// ------------------------------------

window.addEventListener( 'scroll', function () {
    const topHeader = document.querySelector( '.topheader' );
    const topOffset = 10;
    let scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

    if ( scrollOffset > topOffset ) {
        topHeader.classList.add( 'js-hidden' );
    } else {
        topHeader.classList.remove( 'js-hidden' );
    }
}, false );
