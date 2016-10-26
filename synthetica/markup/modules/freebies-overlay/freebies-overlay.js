$(document).ready( function () {
    // -------------------------------------------------------------
    // СЛУЧАЙНОЕ ЗНАЧЕНИЕ ДЛЯ СЧЕТЧИКА
    // -------------------------------------------------------------
    const likeCounters = $( '.overlay__link-count' );
    likeCounters.each( function () {
        let current = Math.floor( Math.random() * 100 + 1 );
        $( this ).text( current );
    });
    // -------------------------------------------------------------
    // СЧЕТЧИК И ИКОНКА
    // -------------------------------------------------------------
    const likeLinks = $( '.overlay__link-heart' );
    likeLinks.one( 'click', function () {
        // -------------------------------------------------------------
        // увеличить значение счетчика на единицу при клике
        // -------------------------------------------------------------
        let currentCount = $( this ).find( '.overlay__link-count' );
        currentCount.html( currentCount.html() * 1 + 1 );
        // -------------------------------------------------------------
        // изменить иконку при клике
        // -------------------------------------------------------------
        let currentIcon = $( this ).find( '.overlay-icon' );
        currentIcon.html( '<use xlink:href="../svg-symbols.svg#heart-selected"></use>' );
    });
    // -------------------------------------------------------------
    likeLinks.on( 'click', function ( event ) {
        event.preventDefault();
    });
    // -------------------------------------------------------------
});
