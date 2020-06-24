// ! Об'єкти
document.write(`-------- Завдання 1. Автомобілі --------`);
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

let calctimeOfdist = (obj, dist) => dist / obj.avrSpeed + Math.floor(((dist / obj.avrSpeed) - 1) / 4);

document.write(`Даному авто, для подолдання 1500 км, необхідно: ${calctimeOfdist(car, 1500)} годин.`);


console.log(`-------- Завдання 2. на дроби --------`);
// ?2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
let fraction1 = {
  larger: 4,
  smaller: 8,
}
let fraction2 = {
  larger: 2,
  smaller: 5,
}

//! додаткова функція для зручного виводу
let showFrac = (obj1, obj2, res) => obj1.larger + '/' + obj1.smaller + " і " + obj2.larger + '/' + obj2.smaller + ' = ' + res.larger + '/' + res.smaller;

//todo Функция сложения 2-х объектов-дробей;
function summFrac(obj1, obj2) {
  return {
    larger: ((obj1.smaller * obj2.smaller) / obj1.smaller * obj1.larger) + ((obj1.smaller * obj2.smaller) / obj2.smaller * obj2.larger), smaller: (obj1.smaller * obj2.smaller)
  };
};
console.log(`Додавання ${showFrac(fraction1, fraction2, reducFrac(summFrac(fraction1, fraction2)))}`);

//todo Функция вычитания 2-х объектов-дробей;
function difFrac(obj1, obj2) {
  return summ = {
    larger: ((obj1.smaller * obj2.smaller) / obj1.smaller * obj1.larger) - ((obj1.smaller * obj2.smaller) / obj2.smaller * obj2.larger), smaller: (obj1.smaller * obj2.smaller)
  };
};
console.log(`Віднімання ${showFrac(fraction1, fraction2, reducFrac(difFrac(fraction1, fraction2)))}`);

//todo Функция умножения 2-х объектов-дробей;
function multiFrac(obj1, obj2) {
  return {
    larger: (obj1.larger * obj2.larger), smaller: (obj1.smaller * obj2.smaller)
  };
};

console.log(`Множення ${showFrac(fraction1, fraction2, reducFrac(multiFrac(fraction1, fraction2)))}`);

//todo Функция деления 2-х объектов-дробей;

function divFrac(obj1, obj2) {
  return { larger: (obj1.larger * obj2.smaller), smaller: (obj1.smaller * obj2.larger) };
};
console.log(`Ділення ${showFrac(fraction1, fraction2, reducFrac(divFrac(fraction1, fraction2)))}`);


//todo Функция сокращения объекта-дроби.
function reducFrac(obj) {
  let x = 0;
  for (let i = 0; i <= obj.larger; i++) {
    if (obj.larger % i === 0 && obj.smaller % i === 0) { x = i };
  }
  if (x > 0) return { larger: obj.larger /= x, smaller: obj.smaller /= x };
};

let newFrac = {
  larger: 5,
  smaller: 10,
};

console.log(`До cкорочення = ${newFrac.larger} / ${newFrac.smaller}`)
reducFrac(newFrac);
console.log(`Після cкорочення = ${newFrac.larger} / ${newFrac.smaller}`)

console.log(`\n--------Завдання 3. з датами--------`);
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