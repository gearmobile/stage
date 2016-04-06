const $button = $('.header-fixed .header-fixed__icon');
const $overlay = $('.overlay-slidedown');
const $overlayLinks = $overlay.find('.overlay__link');
const $sections = $('.page__wrapper > section, .page__footer > .footer');
const $body = $('html, body');

$button.on('click', function () {
  $overlay.toggleClass('open');
});

$overlayLinks.on('click', function () {
  if ( $overlay.hasClass('open') ) {
    $overlay.removeClass('open');
    let $ID = $(this).attr('href').replace('#', '');

    if ( $sections.length !== 0 ) {
      $sections.each( function () {
        if ( $(this).attr('id') && $(this).attr('id') === $ID ) {
          $body.stop().animate({scrollTop: $(this).offset().top}, 1500, 'swing');
        }
      });
    }
  }
});
