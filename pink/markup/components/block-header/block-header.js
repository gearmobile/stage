window.addEventListener( 'load', function () {
    //---------------------------
    // variables
    // --------------------------
    let center = document.querySelector( '.header__primary > .center' );
    let headerSecondary = document.querySelector( '.header__secondary' );
    const mobileWidth = 500;
    let flag = true;
    // --------------------------
    // check and replace
    // --------------------------
    if ( window.innerWidth > mobileWidth && flag ) {
        center.insertBefore( headerSecondary.cloneNode( true ), center.childNodes[0] );
        headerSecondary.parentNode.removeChild( headerSecondary );
        flag = false;
    }
}, false );
