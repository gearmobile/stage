// TOPHEADER HIDE AND SHOW
// ------------------------------------
window.addEventListener( 'scroll', function () {
    const topHeader = document.querySelector( '#topheader' );
    const topOffset = 50;
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

    if ( scrollOffset > topOffset ) {
        topHeader.classList.add( 'is-hidden' );
    } else {
        topHeader.classList.remove( 'is-hidden' );
    }
}, false );
