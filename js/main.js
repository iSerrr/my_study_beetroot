
// ! Об'єкти
console.log(``)
// ?1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
let car = {
  make: "Audi",
  model: "S4",
  year: "2013",
  avrSpeed: 150,
}

//todo Функция для вывода на экран информации об автомобиле;

function showAllObj(obj) {
  document.write(`<ul>`);
  for (let key in obj) {
    document.write(`<li>${obj[key]}</li>`);
  }
  document.write(`</ul>`);
}
showAllObj(car);

//todo Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

function calctimeOfdist(obj, dist) {
  return dist / obj.avrSpeed + Math.floor(((dist / obj.avrSpeed) - 1) / 4);
}
console.log(calctimeOfdist(car, 1500));

// ?2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
let fraction1 = {
  larger: 4,
  smaller: 8,
}
let fraction2 = {
  larger: 2,
  smaller: 5,
}

//todo Функция сложения 2-х объектов-дробей;
function summFrac(obj1, obj2) {
  return {
    larger: ((obj1.smaller * obj2.smaller) / obj1.smaller * obj1.larger) + ((obj1.smaller * obj2.smaller) / obj2.smaller * obj2.larger), smaller: (obj1.smaller * obj2.smaller)
  };
};
console.log(`Додавання ${fraction1.larger}/${fraction1.smaller} + ${fraction2.larger}/${fraction2.smaller} = ${summFrac(fraction1, fraction2).larger}/${summFrac(fraction1, fraction2).smaller}`);

//todo Функция вычитания 2-х объектов-дробей;
function difFrac(obj1, obj2) {
  return summ = {
    larger: ((obj1.smaller * obj2.smaller) / obj1.smaller * obj1.larger) - ((obj1.smaller * obj2.smaller) / obj2.smaller * obj2.larger), smaller: (obj1.smaller * obj2.smaller)
  };
};
console.log(`Віднімання ${fraction1.larger}/${fraction1.smaller} - ${fraction2.larger}/${fraction2.smaller} = ${difFrac(fraction1, fraction2).larger}/${difFrac(fraction1, fraction2).smaller}`);

//todo Функция умножения 2-х объектов-дробей;
function multiFrac(obj1, obj2) {
  return {
    larger: (obj1.larger * obj2.larger), smaller: (obj1.smaller * obj2.smaller)
  };
};

console.log(`Множення ${fraction1.larger}/${fraction1.smaller} * ${fraction2.larger}/${fraction2.smaller} = ${multiFrac(fraction1, fraction2).larger}/${multiFrac(fraction1, fraction2).smaller}`);

//todo Функция деления 2-х объектов-дробей;

function divFrac(obj1, obj2) {
  return { larger: (obj1.larger * obj2.smaller), smaller: (obj1.smaller * obj2.larger) };
};
console.log(`Ділення ${fraction1.larger}/${fraction1.smaller} * ${fraction2.larger}/${fraction2.smaller} = ${divFrac(fraction1, fraction2).larger}/${divFrac(fraction1, fraction2).smaller}`);



//todo Функция сокращения объекта-дроби.
function reducFrac(obj) {
  let x = 0;
  for (let i = 0; i <= obj.larger; i++) {
    if (obj.larger % i === 0 && obj.smaller % i === 0) { x = i };
  }
  if (x > 0) obj.larger /= x, obj.smaller /= x;
};

let newFrac = divFrac(fraction1, fraction2);

console.log(`До cкорочення  = ${newFrac.larger}/${newFrac.smaller}`)
reducFrac(newFrac);
console.log(`Після cкорочення  = ${newFrac.larger}/${newFrac.smaller}`)

// ?3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:
//! Зробив усі фінкції через return для комфортнішого маніпулюванням даними.
let date = new Date(2014, 0, 1, 14, 30, 45);


let showTime = (date) => '«' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '»';

console.log(showTime(date));

//todo Функция изменения времени на переданное количество секунд;
let editSecDate = (date, sec) => date.setSeconds(date.getSeconds() + sec);

editSecDate(date, 25);
console.log(`Дадано 25 секунд ${showTime(date)}`);

//todo Функция изменения времени на переданное количество минут;
let editMinDate = (date, min) => date.setMinutes(date.getMinutes() + min);

editMinDate(date, 72);
console.log(`Дадано 72 хвилини ${showTime(date)}`);

//todo Функция изменения времени на переданное количество часов.
let editHoursDate = (date, h) => date.setHours(date.getHours() + h);

editHoursDate(date, 3);
console.log(`Дадано 3 години ${showTime(date)}`);

//todo Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».


//! Масиви

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
    document.write(`<li> ${item.name}</li > `);
  })
  document.write(`</ol > `);
}
document.write(`Вывод на экран всех аудиторий; `);
showAll(auditory);

//todo Вывод на экран аудиторий для указанного факультета;
function showOfDep(arr, dep) {
  document.write(`<ol>`);
  arr.forEach((item) => {
    if (dep === item.department) document.write(`<li> ${item.name}</ li> `);
  })
  document.write(`</ol > `);
}
document.write(`Вывод на экран аудиторий для указанного факультета; `);
showOfDep(auditory, 'Department of Computer Systems and Networks');

//todo Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
let group1 = { name: 'MVT-09-1', numStudents: 16, ofDep: 'Department of Metrology and Information-Measuring Technology', };

function showOfGroup(arr, group) {
  document.write(`<ol>`);
  arr.forEach((item) => {
    if (group.numStudents <= item.numberOFseats && group.ofDep === item.department) document.write(`<li> ${item.name}</li > `);
  })
  document.write(`</ol > `);
}
document.write(`Вывод на экран только тех аудиторий, которые подходят для переданной группы.Объект - группа состоит из названия, количества студентов и названия факультета; `);
showOfGroup(auditory, group1)

//todo Функция сортировки аудиторий по количеству мест;
function shownumberOFseats0to9(arr) {
  let sortarr = arr.sort(function (a, b) {
    return a.numberOFseats - b.numberOFseats;
  })
  showAll(sortarr);
}
document.write(`Функция сортировки аудиторий по количеству мест; `);
shownumberOFseats0to9(auditory);

//todo Функция сортировки аудиторий по названию (по алфавиту).
function showauditoryAtoZ(arr) {
  let sortarr = arr.sort(function (a, b) {
    return a.name - b.name;
  })
  showAll(sortarr);
}
document.write(`Функция сортировки аудиторий по названию(по алфавиту).`);
showauditoryAtoZ(auditory);

