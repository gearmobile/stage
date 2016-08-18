window.addEventListener( 'load', function () {
    // -----------------------------------------------------------
    let overlay = document.querySelector( '.overlay' );
    const timeOut = 500;
    // -----------------------------------------------------------
    document.querySelector( '.overlay__menu' ).addEventListener( 'click', function (event) {
        if ( event.target && event.target.nodeName === 'A' ) {
            if ( overlay.classList.contains( 'js-visible' ) ) {
                setTimeout( function () {
                    overlay.classList.remove( 'js-visible' );
                }, timeOut );
            }
        }
    }, false );
}, false );
