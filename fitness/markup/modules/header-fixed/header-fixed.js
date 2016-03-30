const $topHeader = $('.header-fixed');

$(window).on('scroll', () => {

  if ( $(window).scrollTop() > 0 ) {
    $topHeader.addClass('is-active');
  } else {
    $topHeader.removeClass('is-active');
  }

});
