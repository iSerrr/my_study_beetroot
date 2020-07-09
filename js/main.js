$('.game-sale__nav-link').click( function(){
    event.preventDefault();
    
    $('.game-sale__nav-link').removeClass('game-sale__nav-link-active');
    $(this).addClass('game-sale__nav-link-active');

    
    $('.game-sale__content').removeClass('game-sale__content-active');
    $(`.${$(this).attr('href')}`).addClass('game-sale__content-active');
});

$('.ratting__star').click( function(){
    $('.ratting__star').removeClass('ratting__star-active');
    $(this).addClass('ratting__star-active').nextAll().addClass('ratting__star-active');
});

let i = 0;
function start() {
    
    let b = 220 - (220 / 120 * i);
    i++;

    $('.progres-bar__svg').css("stroke-dashoffset" , b);
    $('.progres-bar__text').text(i / 10);

    if (i === 20) clearTimeout(timer);
};

function progresBar() {
    i = 0;
    let timer;
    start();
    
};

$('.progres-bar').click(function () {
    timer = setInterval(progresBar, 50);
});