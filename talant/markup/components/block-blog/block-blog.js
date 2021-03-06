// ------------------------------------
// BLOG GRID
// ------------------------------------
function equalHeight( items ) {
    // ------------------------------------
    // MAX HEIGHT VALUE
    let maxHeight = 0;
    // ------------------------------------
    // GET ALL LIST ITEMS
    let listItems = document.querySelectorAll( items );
    // ------------------------------------
    // GET TALLEST LIST ITEM VALUE
    for ( let i = 0; i < listItems.length; i++ ) {
        listItems[i].style.height = 'auto';
        let listItemHeight = listItems[i].offsetHeight;
        maxHeight = maxHeight < listItemHeight ? listItemHeight : maxHeight;
    }
    // ------------------------------------
    // SET HEIGHT FOR ALL LIST ITEMS
    for ( let j = 0; j < listItems.length; j++ ) {
        listItems[j].style.height = maxHeight + 'px';
    }
}
// ------------------------------------
window.addEventListener( 'load', function () {
    equalHeight( '.blog__item' );
}, false );
// ------------------------------------
window.addEventListener( 'resize', function () {
    equalHeight( '.blog__item' );
}, false );
// ------------------------------------
