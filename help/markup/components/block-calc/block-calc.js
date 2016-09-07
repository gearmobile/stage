function $$( selector, context ) {
    context = context || document;
    var elements = context.querySelectorAll( selector );
    return Array.prototype.slice.call( elements );
}

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
    // filter
    // --------------------------------------------
    let listItems = $$('.list__item');

    document.querySelector( '.controls' ).addEventListener( 'click', function ( event ) {
        // filter all
        // -------------------------------------------------------------------------
        if ( event && event.target.getAttribute( 'data-filter' ).toLowerCase() === 'all' ) {
            listItems.forEach( function ( item ) {
                item.style.display = 'flex';
            });
        // filter famale
        // -------------------------------------------------------------------------
        } else if ( event && event.target.getAttribute( 'data-filter' ).toLowerCase() === 'female' ) {
            listItems.forEach( function ( item ) {
                if ( item.getAttribute( 'data-filter' ).toLowerCase() === 'female' ) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        // filter male
        // -------------------------------------------------------------------------
        } else if ( event && event.target.getAttribute( 'data-filter' ).toLowerCase() === 'male' ) {
            listItems.forEach( function ( item ) {
                if ( item.getAttribute( 'data-filter' ).toLowerCase() === 'male' ) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    }, false );

}, false );
