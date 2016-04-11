var $button = $('.header-fixed .header-fixed__icon');
var $overlay = $('.overlay-slidedown');
var $overlayLinks = $overlay.find('.overlay__link');
var $sections = $('.page__wrapper > section, .page__footer > .footer');
var $body = $('html, body');

$button.on('click', function () {
  $overlay.toggleClass('open');
});

$overlayLinks.on('click', function () {
  if ( $overlay.hasClass('open') ) {
    $overlay.removeClass('open');
    var $ID = $(this).attr('href').replace('#', '');

    if ( $sections.length !== 0 ) {
      $sections.each( function () {
        if ( $(this).attr('id') && $(this).attr('id') === $ID ) {
          $body.stop().animate({scrollTop: $(this).offset().top}, 1500, 'swing');
        }
      });
    }
  }
});
