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
    console.log(event.key);
    if (document.body.querySelector('div')) {
        if (event.code == 'KeyE' && event.ctrlKey) event.preventDefault(), edit();
    }
    if (document.body.querySelector('textarea')) {
        if (event.key == '+' && event.ctrlKey) event.preventDefault(), save();
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
//? 
const divResize = document.createElement('div');
divResize.className = 'resize';
divResize.style.width = '300px';
divResize.style.height = '150px'

const resizeBeacon = document.createElement('div');
resizeBeacon.classList = 'resize__beacon icon-resize-arrow-inside-a-square-interface-symbol';
divResize.append(resizeBeacon);

//? Стартові значення для початку відліку, та розмір об"єкту до моменту збільшення
let startAxisX = 0;
let startAxisY = 0;

let currentWidth = 0;
let currentHeight = 0;

function mouseMoveResize() {
    divResize.style.width = `${(currentWidth) + (event.clientX - startAxisX)}px`;
    divResize.style.height = `${(currentHeight) + (event.clientY - startAxisY)}px`;
};

//? Фіксуєм дані під часу натискання кнопки
resizeBeacon.addEventListener('mousedown', (event) => {
    event.preventDefault();
    startAxisX = event.clientX;
    startAxisY = event.clientY;
    currentWidth = +divResize.style.width.slice(0, [divResize.style.width.length - 2]);
    currentHeight = +divResize.style.height.slice(0, [divResize.style.height.length - 2]);
    document.addEventListener('mousemove', mouseMoveResize);
});

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', mouseMoveResize);
});

taskBlock[2].append(divResize);