// ! --------------------< Завдання 1 >------------------
const taskBlock = document.querySelectorAll('.task-block');

const textRead = document.createElement('div');
textRead.className = 'text-read-edit';
textRead.innerText = 'Початковий текст';

const textEdit = document.createElement('textarea');
textEdit.className = 'text-read-edit active';

taskBlock[0].append(textRead);

const edit = () => {
    textRead.replaceWith(textEdit);
    textEdit.value = textRead.innerText;
};

const save = () => {
    textEdit.replaceWith(textRead);
    textRead.innerText = textEdit.value;
};

document.addEventListener('keydown', (event) => {
    if (document.body.querySelector('div')) {
        if (event.code == 'KeyE' && event.ctrlKey) event.preventDefault(), edit();
    }
    if (document.body.querySelector('textarea')) {
        if (event.code == 'NumpadAdd' && event.ctrlKey) event.preventDefault(), save();
    }
});
// ! --------------------< Завдання 2 >------------------
const players = [
    {
        firstName: 'Tomi',
        lastName: 'Kennedy',
        age: 18,
        points: 98
    },
    {
        firstName: 'Megan',
        lastName: 'Stacey',
        age: 21,
        points: 75
    },
    {
        firstName: 'Spencer',
        lastName: 'Cotton',
        age: 19,
        points: 68
    },
    {
        firstName: 'Arabella',
        lastName: 'Berg',
        age: 25,
        points: 95
    },
    {
        firstName: 'Phoenix',
        lastName: 'Calvert',
        age: 17,
        points: 71
    },
    {
        firstName: 'Daisie',
        lastName: 'Day',
        age: 22,
        points: 97
    },
    {
        firstName: 'Libbi',
        lastName: 'Haas',
        age: 18,
        points: 84
    },
    {
        firstName: 'Aleah',
        lastName: 'Sutherland',
        age: 22,
        points: 45
    },
    {
        firstName: 'Eryn',
        lastName: 'Harvey',
        age: 26,
        points: 100
    },
    {
        firstName: 'Bullock',
        lastName: 'Bullock',
        age: 25,
        points: 89
    }
];

function createTable(arr) {

    const table = document.createElement('table');
    let res = [];

    const trTitle = document.createElement('tr');
    for (key in arr[0]) {
        const th = document.createElement('th');
        th.innerText = key;
        th.addEventListener('click', sortingToTitle);
        trTitle.append(th);
    }

    res.push(trTitle);
    arr.forEach(element => {
        const tr = document.createElement('tr');
        for (key in element) {
            const td = document.createElement('td');
            td.innerText = element[key];
            tr.append(td);
        }
        res.push(tr);
    });

    table.append(...res);

    function sortingToTitle() {
        console.log(this.innerHTML);
        let x = this.innerHTML;
        arr.sort(function (a, b) {
            if (a[x].typeof == "number") return a[x] - b[x];
            else {
                if (a[x] < b[x]) return -1;
                if (a[x] > b[x]) return 1;
                return 0;
            };
        });
        renderTable(taskBlock[1]);
    };
    return table
};

function renderTable(elem) {
    elem.lastChild.remove();
    elem.append(createTable(players));
};

renderTable(taskBlock[1]);

// ! --------------------< Завдання 3 >------------------

const divResize = document.createElement('div');
divResize.className = 'resize';
divResize.style.width = '300px';
divResize.style.height = '150px'

divResize.innerText = 'Даний блок змінннює розмір';


const counter = document.createElement('p');


let oX = 0;
let oY = 0;
counter.innerText = `Вісь X - ${oX}`
const test = () => oX;
let renderXandY = () => counter.innerText = `Вісь X - ${oX} Вісь Y - ${oY}`;



let resX = 0;
let resY = 0;

document.addEventListener('mousedown', (event) => {
    resX = oX;
    resY = oY;
    resW = divResize.style.width.slice(0, 3);
    resQ = divResize.style.height.slice(0, 3);
});

document.addEventListener('mousemove', (event1) => {
    oX = event.clientX;
    oY = event.clientY;
    if (event1.buttons === 1) {
        divResize.style.width = `${+(resW) + (oX - resX)}px`;
        divResize.style.height = `${+(resQ) + (oY - resY)}px`;
        console.log(`ширина блоку${divResize.style.width} зміна на ${oX - resX}`);
    };

    renderXandY();
});










// document.addEventListener('mouseup', (event) => {
//     res1 = oX - resX;
//     res2 = oY - resY;
//     console.log(res1);
//     divResize.style.width = `${+(divResize.style.width.slice(0, 3)) + (res1)}px`;
//     divResize.style.height = `${+(divResize.style.height.slice(0, 3)) + (res2)}px`;
//     console.log(divResize.style.width, divResize.style.height);
// });

taskBlock[2].append(divResize, counter);