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

function progres() {
    let i = 0;
    let timer;
    function start() {
        i++;
        let b = 220 - (220 / 120 * i);
        $('.progres-bar__svg').css("stroke-dashoffset" , b);
        $('.progres-bar__text').text(i / 10);
        if (i >= 78) clearTimeout(timer);
    };
    timer = setInterval(start, 50);
}

$('document').ready(progres);
$('.progres-bar').click(progres);

//! ----------< Calc >----------

let calcItem = [
    {
        name: 'cancel',
        type: 'cancel',
        dataAtr: 'cancel',
        value: 'C',
        classCss: 'cancelBtn'
    },
    {
        name: 'divide',
        type: 'action',
        dataAtr: 'operation',
        value: '/',
        classCss: 'operationBtn'
    },
    {
        name: 'multiply',
        type: 'action',
        dataAtr: 'operation',
        value: '*',
        classCss: 'operationBtn'
    },
    {
        name: 'minus',
        type: 'action',
        dataAtr: 'operation',
        value: '-',
        classCss: 'operationBtn'
    },
    {
        name: 'plus',
        type: 'action',
        dataAtr: 'operation',
        value: '+',
        classCss: 'operationBtn'
    },
    {
        name: 'result',
        type: 'action',
        dataAtr: 'res',
        value: '=',
        classCss: 'resultBtn'
    },
];

function createCalcItem(arrObj) {
    let calcNum = [];
    let calcOp = [];

    let display = document.createElement('div');
    display.className = "calc__display";
    display.innerText = '0';
    
    let calcBody = document.createElement('ul');
    calcBody.className = 'calc';

    let calcNumconteiner = document.createElement('ul');
    calcNumconteiner.className = 'calc__numConteiner';

    let calcOpconteiner = document.createElement('ul');
    calcOpconteiner.className = 'calc__opConteiner';
        
    for (let i = 9;  i >= 0; i--) {
        let obj = {
            name: `num${i}`,
            type: 'number',
            dataAtr: 'number',
            value: i,
            classCss: 'number'
        }
        arrObj.push(obj);
    };
    
    arrObj.forEach(element => {
        let el = document.createElement('li');
        $(el).attr( "data-type", element.dataAtr);
        el.className = `calc__btn calc__btn--${element.classCss}`;
        if (element.value === 0) el.classList.add('calc__btn--zero');
        el.innerText = element.value;
       (element.type == 'action') ? calcOp.push(el): calcNum.push(el);
    });

    console.log(calcOp);
    console.log(calcNum);
    
    calcOpconteiner.append(...calcOp);
    calcNumconteiner.append(...calcNum);

    calcBody.append(display, calcNumconteiner,calcOpconteiner);


    $('.calc-page').append(calcBody);
}

createCalcItem(calcItem);

let key = '';
let y = '';
let x = '';

const calcAction = (atr, value) => {

    let res = 0;
    
    if (atr === "number") {
        if (key === '') {
            if (x === '') {
                $('.calc__display').text('');
                x = '';
            }
            x = value; 
            $('.calc__display').append(x);
        }
        else {
            if (y === '') {
                $('.calc__display').text('');
                y = '';

            } $('.calc__display').text('');
            y += value;
            $('.calc__display').append(y);
            console.log(y);
        }
    }
    if (atr === "operation") {
        key = value;
        x = +$('.calc__display')[0].innerText;
    }
    else {
        console.log('failed');
    }
    if (atr === "cancel") {
        $('.calc__display').text(0);
        key = '';
        y = '';
        x = '';
    }
    if (atr === 'res') {
        y = +$('.calc__display')[0].innerText;
        switch (key) {
            case "+":
                res = x + y;
            break;

            case "-":
                res = x - y;
            break;

            case "/":
                res = x / y;
            break;

            case "*":
                res = x * y;
                
            break;
            default:
                break;
        }
        $('.calc__display').text(res);
        x = res;
        y = '';
        key = '';
    }
};

$('.calc').click(()=> {
    let atrClick = $(event.target).attr("data-type");
    let valueClick = $(event.target)[0].innerText;
    calcAction(atrClick, valueClick);
});


//! Тут варто було б ще подумати на перевырками, думаю ъх можна було б написати коротше
$(document).keypress(function() {
    let atrPress;
    let valuePress;
    for (let i = 0; i <= 9 ; i++) {
        if (i === +event.key) {
            valuePress = +event.key
            atrPress = 'number';
        };
    };
    if ( event.key == '/'|| event.key == '*'|| event.key == '-'|| event.key == '+') {
        atrPress = "operation";
        valuePress = event.key;
    }
    if (event.key == 'Enter') atrPress = "res", valuePress = event.key;
    calcAction(atrPress, valuePress);
});

let divide = document.createElement('button');

