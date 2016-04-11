var $topHeader = $('.header-fixed');

$(window).on('scroll', function () {
  if ( $(window).scrollTop() > 0 ) {
    $topHeader.addClass('is-active');
  } else {
    $topHeader.removeClass('is-active');
  }
});

$('a[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});