window.addEventListener( 'scroll', function () {
    var topHeader = document.querySelector( '.topheader' );
    var topOffset = 10;
    var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

    if ( scrollOffset > topOffset ) {
        topHeader.classList.add( 'is-hidden' );
    } else {
        topHeader.classList.remove( 'is-hidden' );
    }
}, false );
