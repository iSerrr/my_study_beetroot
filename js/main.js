//? Подсчитать сумму всех чисел в заданном пользователем диапазоне.
function task1() {
  let num = +prompt(`Введіть число`);
  let sum = 0;
  let i = 0;
  while (i < num) {
    i++;
    sum += i;
  }
  alert(`Сума всіх чисел ${sum}`);
}
//? Запросить 2 числа и найти только наибольший общий делитель.
function task2() {
  let num1 = +prompt(`Введіть число 1`);
  let num2 = +prompt(`Введіть число 2`);
  let initDiv = num1 >= num2 ? num1 : num2;
  let i = 0;
  while (num1 % initDiv !== 0 || num2 % initDiv !== 0) {
    initDiv--;
    i++;
  }
  alert(`Найбільший дільник ${initDiv}, а к-ть інтераці ${i}`);
}
//? Запросить у пользователя число и вывести все делители этого числа.
function task3() {
  let num = +prompt(`Введіть число`);
  let res = `наступні дільники: `;
  let i = 0;
  while (i <= num) {
    if (num % i === 0 && i === num) {
      res += i + ". ";
    } else if (num % i === 0) {
      res += i + ", ";
    }
    i++;
  }
  alert(res);
}
//? Определить количество цифр в введенном числе.
function task4() {
  let num = prompt(`Введіть число`);
  let i;
  for (i = 0; i < num.length; i++) {}
  alert(i);
}
//? Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
function task5() {
  let zeros = 0;
  let posNum = 0;
  let negNum = 0;
  for (let i = 0; i < 10; i++) {
    let num = +prompt(`Введіть число ${i + 1}`);
    alert(num);
    if (typeof num == "number") {
      if (num > 0) {
        posNum++;
      } else if (num === 0) {
        zeros++;
      } else {
        negNum++;
      }
    }
  }
  alert(`дадатніх: ${posNum}\nнулів: ${zeros}\nвід'ємних: ${negNum}`);
}
//? Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
function task6() {
  let res;
  let question;
  do {
    let num1 = +prompt(`Введіть число 1`);
    let num2 = +prompt(`Введіть число 2`);
    let operator = prompt(`Введіть оператор`);
    switch (operator) {
      case "+": {
        res = num1 + num2;
        break;
      }
      case "-": {
        res = num1 - num2;
        break;
      }
      case "*": {
        res = num1 * num2;
        break;
      }
      case "/": {
        res = num1 / num2;
        break;
      }
      default:
        break;
    }
    alert(`Реультат ${res}`);
    question = confirm("Провести новий рорахунок ?");
  } while (question);
}
//? Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
function task7() {
  let num = prompt(`Введіть число`);
  let dis = prompt(`Введіть зміщення`);
  let res = "";
  for (let j = dis; j < num.length; j++) {
    res += num[j];
  }
  for (let i = 0; i < dis; i++) {
    res += num[i];
  }
  alert(res);
}
//? Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
function task8() {
  let action;
  let i = 0;
  do {
    i++;
    action = confirm(`День тижня: ${i}, показати наступний день?`);
    if (i === 7) i = 0;
  } while (action);
}
//? Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
function task9() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(`\n`);
  }
}
//? Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
function task10() {
  let n = 50;
  let p;
  let m = n;
  confirm(`Гра вгадай число від 0 - 100`);
  do {
    p = prompt(
      `Ви загадали: ${n}, якщо:\n вірно - "=="\nчисло більше ніж ${n} - ">"\nчисло менше ніж ${n} - "<"`
    );
    m = Math.ceil(m / 2);
    switch (p) {
      case ">":
        n = m + n;
        break;
      case "<":
        n = n - m;
        break;
      default:
        break;
    }
    if (p == "==") break;
  } while (p);
  alert(`Загадане Вами число ${n}`);
}

function example(...num) {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += num[i];
  }
  return res;
}
console.log(example(1, 2));
