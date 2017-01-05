$( document ).ready( function() {

    // BLOCK EQUAL HEIGHT
    $( '.block-equal' ).matchHeight();

    // accordion icons change
    var blocks = $( '.tab-content .collapse' );
    blocks.on( 'shown.bs.collapse', function () {
        $( this ).prev().find( '.fa' )
            .removeClass( 'fa-plus-circle' )
            .addClass( 'fa-minus-circle' );
    });

    blocks.on( 'hidden.bs.collapse', function () {
        $( this ).prev().find( '.fa' )
            .removeClass( 'fa-minus-circle' )
            .addClass( 'fa-plus-circle' );
    });

});
