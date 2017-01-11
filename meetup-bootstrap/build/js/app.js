$( document ).ready( function () {

    // TOPHEADER
    // -------------------------------------------------------------
    var topNavLink = document.querySelector( '#topNavLink' );
    var topHeader = document.querySelector( '#topHeader' );
    topNavLink.addEventListener( 'click', function ( event ) {
        event.preventDefault();
        if ( topHeader.className === 'topnav' ) {
            topHeader.className += ' topnav--responsive';
        } else {
            topHeader.className = 'topnav';
        }
    });


    // HERO COUNTER ------------------------------------------------
    var countDownDate = new Date( 'Feb 5, 2017 15:37:25' ).getTime();
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if ( days < 10 ) { days = '0' + days; }
      if ( hours < 10 ) { hours = '0' + hours; }
      if ( minutes < 10 ) { minutes = '0' + minutes; }
      if ( seconds < 10 ) { seconds = '0' + seconds; }

      // Display the result in the element with id='demo'
      document.getElementById( 'countdown__days' ).innerHTML = days;
      document.getElementById( 'countdown__hours' ).innerHTML = hours;
      document.getElementById( 'countdown__minutes' ).innerHTML = minutes;
      document.getElementById( 'countdown__seconds' ).innerHTML = seconds;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById( 'countdown' ).innerHTML = 'EXPIRED';
      }
    }, 1000 );
    // -----------------------------------------------------------------------

    // ACCORDION -------------------------------------------------------------
    var buttons = $( '.schedule .schedule__button' );
    buttons.on( 'click', function () {
        $( this ).toggleClass( 'is-active' );
        $( this ).next( '.schedule__panel' ).toggleClass( 'is-show' ).siblings( '.schedule__panel' ).removeClass( 'is-show' );
    });
    // -----------------------------------------------------------------------

});
