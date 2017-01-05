$( document ).ready( function() {

    // BLOCK EQUAL HEIGHT
    $( '.block-equal' ).matchHeight();

    //
    $('.panel-title__link').on('shown.bs.collapse', function () {
        $(".fa").removeClass("fa-minus-circle").addClass("fa-plus-circle");
    });

    $('.panel-title__link').on('hidden.bs.collapse', function () {
        $(".fa").removeClass("fa-plus-circle").addClass("fa-minus-circle");
    });


});
