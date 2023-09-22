document.addEventListener( 'DOMContentLoaded', function() {
var splide = new Splide( '.splide', {
type   : 'slide',
perPage : 2,
perMove : 1,
gap : '12px',
//width : 'min(1200px, 100% - 60px)',
// rewind     : true,
breakpoints: {
992: {
perPage: 2,
}, 
480: {
perPage: 1,
rewind : true,
},
}
} );
splide.mount();
});


