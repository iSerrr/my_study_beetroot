//? Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function moreOrless(num1, num2) {
  return num1 === num2 ? 0 : num1 < num2 ? -1 : 1;
}
function task1() {
  console.log(moreOrless(2, 2));
  console.log(moreOrless(1, 2));
  console.log(moreOrless(3, 2));
}

//? Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(num) {
  let res = 1;
  for (let i = num; i > 0; i--) {
    res *= i;
  }
  return res;
}
function task2() {
  console.log(factorial(5));
  console.log(factorial(10));
  console.log(factorial(15));
}

//? Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function summ(num1, num2, num3) {
  return num1 * 100 + num2 * 10 + num3;
}
function task3() {
  console.log(summ(4, 5, 6));
  console.log(summ(3, 8, 6));
  console.log(summ(2, 5, 7));
}

//? Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function area(lengthX, lengthY = lengthX) {
  return lengthX * lengthY;
}
function task4() {
  console.log(area(2, 4));
  console.log(area(2));
}

//? Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
function example(num) {
  let res = 0;
  for (let i = num - 1; i > 0; i--) {
    res += num % i === 0 ? i : 0;
  }
  return res === num;
}
function task5() {
  console.log(example(6));
}

//? Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
function range(min, max) {
  for (let i = min; i <= max; i++) {
    if (example(i)) {
      console.log(i);
    }
  }
}
function task6() {
  range(4, 5000);
}

//? Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function time(h, m = 00, s = 00) {
  console.log(`«${h}:${m}:${s}»`);
}
function task7() {
  time(14, 35, 00);
  time(17);
}

//? Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function timeTosec(h, m = 00, s = 00) {
  return h * 3600 + m * 60 + s;
}
function task8() {
  console.log(timeTosec(4, 0));
}
//? Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function secTotime(sec) {
  let h = String((sec - (sec % 3600)) / 3600);
  let m = String((sec - (sec % 60)) / 60 - h * 60);
  let s = String(sec % 60);
  return "«" + h + ":" + m + ":" + s + "»";
}
function task9() {
  console.log(secTotime(15870));
  console.log(secTotime(100));
}

//? Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
function nDf(h1, m1, s1, h2, m2, s2) {
  return secTotime(timeTosec(h1, m1, s1) - timeTosec(h2, m2, s2));
}
function task10() {
  console.log(nDf(17, 30, 15, 14, 15, 5));
}
