
//? 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

let item1 = {
  name: "Apple",
  amount: 5,
  buy: "yes",
}
let item2 = {
  name: "Banana",
  amount: 2,
  buy: "no",
}
let item3 = {
  name: "Kiwi",
  amount: 8,
  buy: "no",
}
let item4 = {
  name: "Orange",
  amount: 1,
  buy: "no",
}

let shopingList = [item1, item2, item3, item4];

//todo Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
function newlist(arr) {
  let newArr = [];
  arr.forEach(item => item.buy === "no" ? newArr.unshift(item) : newArr.push(item));
  return newArr;
}
//todo Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
function addItem(newItem, arr, num = 1) {
  let i = 0;
  arr.forEach((item) => {
    // newItem === item.name ? item.amount += num : item.amount + 0;
    if (newItem === item.name) {
      i++;
      return item.amount += num;
    }

  })
  if (i === 0) { arr.push({ name: newItem, amount: num, buy: "no" }) };
}
//todo Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
function toB(itemB, arr) {
  arr.forEach(function (item,) {
    if (itemB === item.name) item.buy = "Yes";
  })
}

console.log("Завдання 1.1")
console.log(newlist(shopingList));

console.log("Завдання 1.2 (+Potato 1x)")
addItem("Potato", shopingList);
console.log(shopingList);

console.log("Завдання 1.3")
toB('Potato', shopingList);
console.log(shopingList);


//? 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
let receipt = [
  {
    name: "Battery",
    amount: 2,
    price: 10.50,
  },
  {
    name: "Lantern",
    amount: 1,
    price: 35,
  },
  {
    name: "Pan",
    amount: 4,
    price: 4,
  },
  {
    name: "Box",
    amount: 5,
    price: 25,
  },
]

//todo Распечатка чека на экран;
function show(arr) {
  arr.forEach((item) => console.log(`${item.name} 1x${item.price} ${item.amount * item.price}`))
}
show(receipt);

//todo Подсчет общей суммы покупки;
function sum(arr) {
  return arr.reduce((sum, item) => sum += (item.amount * item.price), 0)
}
console.log(sum(receipt));

//todo Получение самой дорогой покупки в чеке;
function maxPrice(arr) {
  return arr.reduce((maxV, item) => maxV <= item.price ? maxV = item.price : maxV + 0, 0)
}
console.log(maxPrice(receipt));

//todo Подсчет средней стоимости одного товара в чеке.
function averagePrice(arr) {
  // version 1 (хоч тут і застосовано 2 reduce, але мені він більше доподоби)
  return arr.reduce((sum, item,) => sum + item.price, 0) / (1 + arr.reduce((sum, item, i) => i++));

  // version 2
  // let sum = 0;
  // for (let i = 0; i <ol arr.length;) {
  //   sum += arr[i].price;
  //   i++;
  //   if (i === arr.length) { return sum / i };
  // }
}
console.log(`Завдання 2.4\n ${averagePrice(receipt)}`);

//? 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let style = [
  {
    option: "width",
    value: "250px",
  },
  {
    option: "padding",
    value: "20px 0"
  },
  {
    option: "border-radius",
    value: "10px"
  },
  {
    option: "background-color",
    value: "#3584dd",
  },
  {
    option: "color",
    value: "#e7e7e7",
  },
  {
    option: "font-size",
    value: "35px",
  },
  {
    option: "text-align",
    value: "center",
  },
  {
    option: "text-align",
    value: "center",
  },
  {
    option: "text-decoration",
    value: "underline",
  },
];
console.log(style);
function out(arr, text) {
  let style = arr.reduce((akm, item) => akm += item.option + ':' + item.value + ';', '');
  document.write(`<p style = "${style}" > ${text}</p> `);
}
out(style, "Перший тест")

//? 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

let dep1 = 'Department of Metrology and Information-Measuring Technology';
let dep2 = 'Department of Software Engineering';
let dep3 = 'Department of Computer Systems and Networks';

let auditory = [
  {
    name: "Home",
    numberOFseats: 10,
    department: dep1,
  },
  {
    name: "Aquarium",
    numberOFseats: 17,
    department: dep2,
  },
  {
    name: "Horizon",
    numberOFseats: 14,
    department: dep3,
  },

  {
    name: "Scientist",
    numberOFseats: 18,
    department: dep1,
  },
];

//todo Вывод на экран всех аудиторий;
function showAll(arr) {
  document.write(`<ol>`);
  arr.forEach((item) => {
    document.write(`<li>${item.name}</li>`);
  })
  document.write(`</ol>`);
}
document.write(`Вывод на экран всех аудиторий;`);
showAll(auditory);

//todo Вывод на экран аудиторий для указанного факультета;
function showOfDep(arr, dep) {
  document.write(`<ol>`);
  arr.forEach((item) => {
    if (dep === item.department) document.write(`<li>${item.name}</li>`);
  })
  document.write(`</ol>`);
}
document.write(`Вывод на экран аудиторий для указанного факультета;`);
showOfDep(auditory, 'Department of Computer Systems and Networks');

//todo Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
let group1 = { name: 'MVT-09-1', numStudents: 16, ofDep: 'Department of Metrology and Information-Measuring Technology', };

function showOfGroup(arr, group) {
  document.write(`<ol>`);
  arr.forEach((item) => {
    if (group.numStudents <= item.numberOFseats && group.ofDep === item.department) document.write(`<li>${item.name}</li>`);
  })
  document.write(`</ol>`);
}
document.write(`Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;`);
showOfGroup(auditory, group1)

//todo Функция сортировки аудиторий по количеству мест;
function shownumberOFseats0to9(arr) {
  let sortarr = arr.sort(function (a, b) {
    return a.numberOFseats - b.numberOFseats;
  })
  showAll(sortarr);
}
document.write(`Функция сортировки аудиторий по количеству мест;`);
shownumberOFseats0to9(auditory);

//todo Функция сортировки аудиторий по названию (по алфавиту).
function showauditoryAtoZ(arr) {
  let sortarr = arr.sort(function (a, b) {
    return a.name - b.name;
  })
  showAll(sortarr);
}
document.write(`Функция сортировки аудиторий по названию (по алфавиту).`);
showauditoryAtoZ(auditory);


