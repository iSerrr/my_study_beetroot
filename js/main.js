$(document).ready(function(){
    $('.intro__slide-wrapper').slick({
      accessibility: false,
      dots: true,
      infinite: false,
      speed: 1000,
      autoplay: true,
      prevArrow: '<i class="icon-chevron-left"></i>',
      nextArrow: '<i class="icon-chevron-right"></i>',
      dotsClass: 'slick-dots'
    });
});

let pages = [
    {
    title: "We craft meaningful digital experiences ",
    subTitle: "Creating products and services that transform organizations for the digital economy",
    button: "SEE OUR WORK",
    colorBg: "red",
    colorBtn: "#00CC00"
    },
    {
    title: "We craft meaningful digital experiences ",
    subTitle: "Creating products and services that transform organizations for the digital economy",
    button: "SEE OUR WORK",
    colorBg: "#008500",
    colorBtn: "#A60000"
    },
    {
    title: "We craft meaningful digital experiences ",
    subTitle: "Creating products and services that transform organizations for the digital economy",
    button: "SEE OUR WORK",
    colorBg: "#A6A600",
    colorBtn: "#7109AA"
    },
];

function createObj(arrObj) {
    arrObj.forEach(element => {

        let h1 = document.createElement('h1');
        h1.className = 'intro__title';
        h1.innerText = element.title;

        let h3 = document.createElement('h3');
        h3.className = 'intro__sub-title';
        h3.innerText = element.subTitle;

        let btn = document.createElement('button');
        btn.className = 'intro__btn base-btn';
        $(btn).css("background-color", element.colorBtn)
        btn.innerText = 'SEE OUR WORK';
        
        let contBx = document.createElement('div');
        contBx.className = 'intro__content';
        $(contBx).css("background-color", element.colorBg);
        contBx.append(h1, h3, btn);
        
        let slidePage = document.createElement('div');
        slidePage.className = 'intro__slide-page';
        slidePage.append(contBx);

        $('.intro__slide-wrapper').append(slidePage);

    });
}

createObj(pages);
