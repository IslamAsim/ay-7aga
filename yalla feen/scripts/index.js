import 'bootstrap/scss/bootstrap.scss';
import '../styles/index.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'

const $ = require('jquery');
window.jQuery = $;
window.$ = $;

$('#navIcon').on('click', function () {
    $('#navOpen').toggleClass('active');
    $(this).toggleClass('menu-open');
    $(".logo").toggleClass('deactivate');
    $('.search-component').toggleClass('menu-open')
});

$('.favorite-event').on('click', function () {
    $(this).toggleClass('fas');
    // $(this).toggleClass('far')
});
$('.search-component').on('click', function () {
    $(this).toggleClass('active');
    $('.search-form').toggleClass('active');
    $('.icon-change').toggleClass('fa-times')
});
