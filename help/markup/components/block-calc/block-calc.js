window.addEventListener( 'load', function () {
    // counter
    // -------------------------------------------
    const galleryList = document.querySelector( '.block-calc .list' );
    if ( galleryList === null ) {
        return false;
    } else {
        galleryList.addEventListener( 'click', function ( event ) {
            if ( event && event.target.tagName.toLowerCase() === 'button' ) {
                let input;
                let counter;
                if ( event.target.classList.contains( 'stepper__button--left' ) ) {
                    input = event.target.parentNode.children[1];
                    counter = input.getAttribute( 'value' );
                    counter--;
                    if ( counter < 0 ) {
                        counter = 0;
                        input.setAttribute( 'value', counter );
                    } else {
                        input.setAttribute( 'value', counter );
                    }
                } else if ( event.target.classList.contains( 'stepper__button--right' ) ) {
                    input = event.target.parentNode.children[1];
                    counter = input.getAttribute( 'value' );
                    counter++;
                    input.setAttribute( 'value', counter );
                }
            }
        }, false );
    }
}, false );
