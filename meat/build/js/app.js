




$( document ).ready( function () {

    // gallery
    // -------------------------------------------------
    function showContent( index ) {

        // MAKE THE CONTENT VISIBLE
        $( '.sidebar .content.is-visible').removeClass( 'is-visible' );
        $( '.sidebar .content:nth-of-type(' + ( index + 1 ) + ')' ).addClass( 'is-visible' );

        // SET THE TAB TO SELECTED
        $('.sidebar .nav__link.is-selected').removeClass( 'is-selected' );
        $('.sidebar .nav__link:nth-of-type(' + ( index + 1 ) + ')').addClass( 'is-selected' );
    }

    showContent( 0 );

    $( '.sidebar .nav__link' ).on( 'click', function() {
        showContent( $( this ).index() );
    });
    // ------------------------------------------------

    // show \ close sidebar
    // ------------------------------------------------
    var sideNav = $( '#mySidenav' );
    var sideBarClose = $( '#sideBarClose' );
    var sideBarOpen = $( '#sideBarOpen' );
    //
    sideBarClose.on( 'click', function ( event ) {
        event.preventDefault();
        sideNav.css( 'display', 'none' );
    });
    //
    sideBarOpen.on( 'click', function () {
        sideNav.css( 'display', 'block' );
    });

});




// function w3_open() {
//     document.getElementById("mySidenav").style.display = "block";
// }
// function w3_close() {
//     document.getElementById("mySidenav").style.display = "none";
// }