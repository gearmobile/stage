// TOPHEADER HIDE AND SHOW
// ------------------------------------

var topHeader = document.querySelector( '#topheader' );
var topOffset = 50;

window.addEventListener( 'scroll', function () {
    var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
    if ( scrollOffset > topOffset ) {
        topHeader.classList.add( 'is-hidden' );
    } else {
        topHeader.classList.remove( 'is-hidden' );
    }
}, false );

module.exports = {};
