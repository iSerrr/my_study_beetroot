// //? Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
function task1() {
  let age = prompt(`Введіть Ваш вік`);
  let ageRes =
    age > 0 && age <= 2
      ? `Дитина`
      : age >= 12 && age < 18
      ? `Підліток`
      : age >= 18 && age < 60
      ? `Дорослий`
      : age >= 60
      ? `Пенсіонер`
      : `не відповідає жодному`;
  alert(ageRes);
}
// //? Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
function task1() {
  let num0to9 = prompt(`Введіть число від 0 - 9`);
  switch (+num0to9) {
    case 1:
      alert(`!`);
      break;
    case 2:
      alert(`@`);
      break;
    case 3:
      alert(`#`);
      break;
    case 4:
      alert(`$`);
      break;
    case 5:
      alert(`%`);
      break;
    case 6:
      alert(`^`);
      break;
    case 7:
      alert(`&`);
      break;
    case 8:
      alert(`*`);
      break;
    case 9:
      alert(`()`);
      break;
    default:
      alert(`Введено не вірне число`);
      break;
  }
}
// //? Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
function task3() {
  const THREE_DIGIT_NUM = prompt(`Введіть 3-ох значне число`);
  let first_num = (THREE_DIGIT_NUM - (THREE_DIGIT_NUM % 100)) / 100;
  let second_num = ((THREE_DIGIT_NUM % 100) - (THREE_DIGIT_NUM % 10)) / 10;
  let third_num = THREE_DIGIT_NUM % 10;
  let res_three_digit_num =
    first_num == second_num || first_num == third_num || second_num == third_num
      ? `так присутні одинакові цифри`
      : `не присутні`;
  alert(res_three_digit_num);
}
// //? Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
function task4() {
  const YEAR = prompt(`Введіть рік`);
  let resYEAR = YEAR % 4;
  if (resYEAR == 0) {
    alert(`Рік ${YEAR} є високосним.`);
  } else {
    alert(`Рік ${YEAR} не є високосним.`);
  }
}
//? Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
function task5() {
  let FiveDigitNum = +prompt(`Введіть п'ятирозрядне число`);
  alert(
    (FiveDigitNum - (FiveDigitNum % 10000)) / 10000 === FiveDigitNum % 10 &&
      ((FiveDigitNum % 10000) - (FiveDigitNum % 1000)) / 1000 ===
        ((FiveDigitNum % 100) - (FiveDigitNum % 10)) / 10
      ? `Число ${FiveDigitNum} є поліндромом`
      : `Число ${FiveDigitNum} не є поліндромом`
  );
}
//? Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
function task6() {
  let money = +prompt(`Введіть сумму в доларах`);
  let currency = prompt(`Вкажіть валюту EUR, UAN, AZN`, `EUR`);
  switch (currency) {
    case "EUR":
      alert(`${money} долрів становить ${money * 0.88} євро`);
      break;
    case "UAN":
      alert(`${money} долрів становить ${money * 26.57} грн.`);
      break;
    case "AZN":
      alert(`${money} долрів становить ${money / 0.59} азербайджанський манат`);
      break;
    default:
      alert(`Введено не вірні дані`);
      break;
  }
}
//? Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
function task7() {
  let WtbSum = +prompt(`Введіть суму покупки`);
  if (WtbSum >= 200 && WtbSum < 300) {
    alert(
      `ваша знижка становить 3% сума земеншена до ${
        WtbSum - (WtbSum / 100) * 3
      }`
    );
  } else if (WtbSum >= 300 && WtbSum < 500) {
    alert(
      `ваша знижка становить 5% сума земеншена до ${
        WtbSum - (WtbSum / 100) * 5
      }`
    );
  } else if (WtbSum >= 500) {
    alert(
      `ваша знижка становить 7% сума земеншена до ${
        WtbSum - (WtbSum / 100) * 7
      }`
    );
  } else {
    alert(`знижки не має!`);
  }
}
//? Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
function task8() {
  let circleLength = +prompt(`Введіть довжину кола`);
  let squarePerim = +prompt(`Введіть периметр квадрату`);
  const Pi = 3.14;

  let circleDiameter = circleLength / Pi;
  let squareLength = squarePerim / 4;

  alert(
    circleDiameter < squareLength
      ? `Діаметр кола становить ${circleDiameter}, а висота сторони квадрату становить ${squareLength}, тому дане коло вписується в наш квадрат`
      : `Діаметр кола становить ${circleDiameter}, а висота сторони квадрату становить ${squareLength}, тому дане коло не вписується в наш квадрат`
  );
}

//? Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
function task9() {
  let point = 0;
  let firstTask = +prompt(`Дайте відповідь: 2 + 2 =`);

  if (firstTask === 4) {
    alert("Вірно");
    point += 2;
  } else {
    alert("Не вірно");
  }

  let secondTask = +prompt(`Дайте відповідь: 30 - 10 / 2 =`);
  if (secondTask === 25) {
    alert("Вірно");
    point += 2;
  } else {
    alert("Не вірно");
  }

  let thirdTask = +prompt(`Дайте відповідь: 50 * 10 - 490 =`);
  if (thirdTask === 10) {
    point += 2;
    alert(`Вірно, загальна к-ть балів - ${point}`);
    4;
  } else {
    alert(`Не вірно, загальна к-ть балів - ${point}`);
  }
}

//? Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
function task10() {
  let dateDay = +prompt(`Введіть дату: число місяця`);
  let dateMonth = +prompt(`Введіть дату: місяць`);
  let dateYear = +prompt(`Введіть дату: рік`);

  //! Блок додавання 1-го дня, у випадку 31 робить перше число та перехыд на наступний міс.
  if (dateDay <= 30) {
    dateDay++;
  } else if (dateDay === 31) {
    dateDay = 01;
    dateMonth++;
  } else {
    Alert(`не вірні дані`);
  }
  //! Блок фільтрацій, робить наступні дії: коректна робота в місяцях із 30 днями, приведення переходу лютий-березень в залежності від висконого року, перехід на новий рік.
  //todo Перехід на новий рік
  if (dateMonth >= 13) {
    dateMonth -= 12;
    dateYear++;
  }
  //todo корегування лютого
  else if (dateMonth === 2) {
    if (dateYear % 4 === 0 && dateDay >= 30) {
      dateDay = 01;
      dateMonth++;
    } else if (dateYear % 4 != 0 && dateDay >= 29) {
      dateDay = 01;
      dateMonth++;
    }
  }
  //todo Перехід на новий міс. коли макс 30 днів
  else if (
    (dateMonth === 4 ||
      dateMonth === 6 ||
      dateMonth === 9 ||
      dateMonth === 11) &&
    dateDay >= 31
  ) {
    dateDay = 01;
    dateMonth++;
  }
  alert(`Завтра ${dateDay}.${dateMonth}.${dateYear}`);
}
