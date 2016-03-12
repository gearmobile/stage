$( () => {

    const $playButton = $('.video__button');
    const $playLink = 'https://www.youtube.com/watch?v=TaWKUpahFZM';

    $playButton.magnificPopup({
        items: {
            src: $playLink
        },
        type: 'iframe'
    });

});
