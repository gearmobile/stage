const Masonry = require('masonry-layout');
const imagesLoaded = require('imagesloaded');

window.addEventListener( 'load', function () {
    const photoGallery = document.querySelector( '.photo .gallery' );
    imagesLoaded( photoGallery, function () {
        const photoLayout = new Masonry( photoGallery, {
            itemSelector: '.gallery__item',
            columnWidth: '.gallery__sizer',
            percentPosition: true
        }, false );
    }, false );
}, false );
