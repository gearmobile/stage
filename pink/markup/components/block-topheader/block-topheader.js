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
    // menu button
    // ------------------------------------------
    const buttonMenu = document.querySelector( '.topheader__tertiary .menu' );
    const overlay = document.querySelector( '.overlay' );
    console.log( buttonMenu );
    buttonMenu.addEventListener( 'click', function () {
        overlay.classList.toggle( 'js-visible' );
    }, false );

}, false );
