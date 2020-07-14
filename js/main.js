$(document).ready(function(){
    $('.services__slide-conteiner').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        prevArrow: '<div class="circle"></div>',
        nextArrow: '<div class="circle circle--right"></div>',
        dots: false,
        autoplaySpeed: 3000
    });
});

