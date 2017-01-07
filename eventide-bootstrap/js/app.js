$( document ).ready( function() {

    // ACCORDION ICONS CHANGE --------------------------------
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
    // --------------------------------------------------------

    // TITLE HIGHLIGHT ----------------------------------------
    var captions = $( '.feature-two .flipper' );
    captions.hover(
        function () {
            $( this ).next( '.thumbnail__title' ).addClass( 'thumbnail__title--highlight' );
        },
        function () {
            $( this ).next( '.thumbnail__title' ).removeClass( 'thumbnail__title--highlight' );
        }
    );
    // ---------------------------------------------------------

    // FORM VALIDATION -----------------------------------------------
    var form = $( '#featureSixForm' );
    var formOptions = {
        feedback: {
            success: 'fa-check-circle',
            error: 'fa-times-circle'
        }
    };
    form.validator( formOptions );
    // ---------------------------------------------------------

    // select styling -------------------------------------------
    var select = $( '#plan' );
    select.select2({
        minimumResultsForSearch: Infinity,
        width: '100%'
    });
    // ---------------------------------------------------------

});
