//---------------------------
// variables
// --------------------------
let center = document.querySelector( '.header__primary > .center' );
let headerSecondary = document.querySelector( '.header__secondary' );
const mobileWidth = 500;
let flag = true;
// ----------------------------
window.addEventListener( 'load', function () {
    if ( window.innerWidth > mobileWidth ) {
        center.insertBefore( headerSecondary.cloneNode( true ), center.childNodes[0] );
        headerSecondary.parentNode.removeChild( headerSecondary );
    }
}, false );
