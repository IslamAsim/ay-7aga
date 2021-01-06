import 'bootstrap/scss/bootstrap.scss';
import '../styles/index.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
const $ = require('jquery');
window.jQuery = $;
window.$ = $;

$('#navIcon').on('click',function () {
    $('#navOpen').toggleClass('active');
    $(this).toggleClass('menu-open')
});

