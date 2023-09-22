$('.icones-carousedesk').slick({    
nextArrow: '<i class="fa fa-angle-right slick-next"></i>',
prevArrow: '<i class="fa fa-angle-left slick-prev"></i>',
autoplay: true,
autoplaySpeed: 2500,
dots: false,
arrows: true,
infinite: true,
speed: 500,
cssEase: 'linear',
slidesToShow:5,
slidesToScroll: 1,
responsive: [{
breakpoint: 700,
settings: {
dots: false,
arrows: true,
slidesToShow:2,
slidesToScroll: 1,
}
}]
});


$('.top-cate').slick({    
nextArrow: '<i class="fa fa-angle-right slick-next"></i>',
prevArrow: '<i class="fa fa-angle-left slick-prev"></i>',
autoplay: false,
autoplaySpeed: 3500,
dots: false,
arrows: true,
infinite: true,
speed: 500,
cssEase: 'linear',
slidesToShow:5,
slidesToScroll: 1,
responsive: [{
breakpoint: 700,
settings: {
dots: false,
arrows: true,
slidesToShow:2,
slidesToScroll: 1,
}
}]
});