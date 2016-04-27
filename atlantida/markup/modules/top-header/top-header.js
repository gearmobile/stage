window.addEventListener('DOMContentLoaded', function () {
    var html = document.documentElement;
    var topHeader = document.querySelectorAll('.top-header');
    if ( html.scrollTop > 0 ) {
        topHeader.classList.add('is-fixed');
    } else {
        topHeader.classList.remove('is-fixed');
    }
});
