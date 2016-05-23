
$(window).on('scroll', function () {
   if ( $(window).scrollTop() > 0 ) {
       $('.top-head').addClass('is-fixed');
   } else {
       $('.top-head').removeClass('is-fixed');
   }
});
