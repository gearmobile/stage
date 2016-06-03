$(document).ready( function () {

    // СЛУЧАЙНОЕ ЗНАЧЕНИЕ ДЛЯ СЧЕТЧИКА
    // ---------------------------------------------

    var likeCounters = $('.overlay__link-count');
    likeCounters.each(function () {
        var current = Math.floor( Math.random() * 100 + 1 );
        $(this).text(current);
    });

    // СЧЕТЧИК И ИКОНКА
    // ----------------------------------------------------

    var likeLinks = $('.overlay__link-heart');
    likeLinks.one('click', function () {

        // увеличить значение счетчика на единицу при клике
        // -----------------------------------------------------------
        var currentCount = $(this).find('.overlay__link-count');
        currentCount.html( currentCount.html() * 1 + 1 );

        // изменить иконку при клике
        // -----------------------------------------------------------
        var currentIcon = $(this).find('.overlay-icon');
        currentIcon.html('<use xlink:href="../svg-symbols.svg#heart-selected"></use>');
    });

    likeLinks.on('click', function (event) {
        event.preventDefault();
    });

});
