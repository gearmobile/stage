$(document).ready( function () {
    var showButton = $('.content__show');
    var collapsedBlock = $('.is-collapsed');
    showButton.on('click', function () {
        collapsedBlock.removeClass('is-collapsed').addClass('is-opened');
        showButton.parent().css('display', 'none');
    });
});
