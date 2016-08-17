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

// MENU BUTTON && OVERLAY BUTTON
// ------------------------------------------
window.addEventListener( 'load', function () {
    // ------------------------------------------------
    // variables
    // -------------------------------------------------
    const topHeaderButton = document.querySelector( '.topheader .menu' );
    const overlay = document.querySelector( '.overlay' );
    const overlayButton = document.querySelector( '.overlay .overlay__button' );
    const overlayLinks = document.querySelectorAll( '.overlay .overlay__link' );
    // ------------------------------------------------
    // topheader button
    // -------------------------------------------------
    topHeaderButton.addEventListener( 'click', function () {
        overlay.classList.toggle( 'js-visible' );
    }, false );
    // ------------------------------------------------
    // overlay button
    // -------------------------------------------------
    overlayButton.addEventListener( 'click', function () {
        overlay.classList.remove( 'js-visible' );
    }, false );
}, false );
