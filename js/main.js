//? 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

class Circle {

  constructor(options) {
    this.radius = options.radius
  }

  get showRadius() {
    return this.radius + ' см'
  }
  get showDiamert() {
    return this.radius * 2 + ' см'
  }

  set newRadius(newValue) {
    this.radius = newValue;
  }
  area() {
    return Math.ceil(Math.PI * (this.radius ** 2)) + ' см'
  }
  length() {
    return Math.ceil(this.radius * Math.PI * 2) + ' см'
  }
}

let circle = new Circle({
  radius: 10
});

document.write(`Круг із радіусом ${circle.showRadius}<br>діаметр - ${circle.showDiamert}<br>площа круга - ${circle.area()}<br>довжина круга - ${circle.length()}`);
document.write(`<p>Задамо новий радіус 25</p>`);
circle.newRadius = 25;
document.write(`Круг із радіусом ${circle.showRadius}<br>діаметр - ${circle.showDiamert}<br>площа круга - ${circle.area()}<br>довжина круга - ${circle.length()}`);

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 

//? 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
class Marker {
  constructor(options) {
    this.color = options.color;
    this.volume = options.volume;
  }

  print(text) {
    document.write(`<p style="color:${this.color};">${text.slice(0, this.volume / 0.5 + (text.length - text.replace(/\s/g, '').length))}</p>`);
  }
}

let marker = new Marker({
  color: 'red',
  volume: 2
})

class MarkerRepair extends Marker {
  constructor(options) {
    super(options)
  }
  repair(vol) {
    this.volume = vol;
  }
}
let marker2 = new MarkerRepair({
  color: "green",
  volume: 45
})
marker.print('L o r e m');
marker2.repair(85);

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов. 

//? 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

class Employee {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.exp = options.exp;
  }
}
let employee01 = new Employee({
  name: 'John',
  age: 35,
  exp: 7
});
let employee02 = new Employee({
  name: 'Sarra',
  age: 31,
  exp: 5
});
let employee03 = new Employee({
  name: 'Mike',
  age: 39,
  exp: 11
});
let employee04 = new Employee({
  name: 'Jimmy',
  age: 28,
  exp: 2
});
let employee05 = new Employee({
  name: 'Anna',
  age: 27,
  exp: 1
});

let EmployeeOfBank = [employee01, employee02, employee03, employee04, employee05];
console.table(EmployeeOfBank);

//Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

class EmpTable {
  constructor(arr) {
    this.arr = arr;
  }

  get getHtml() {
    document.write(`<table class="table">`);
    document.write(`<tr><th>Ім'я</th><th>Вік</th><th>Досвід</th></tr>`);
    this.arr.forEach(element => {
      document.write(`<tr><td>${element.name}</td><td>${element.age}</td><td>${element.exp}</td></tr>`);
    });
    document.write(`</table>`)
  }
}

//Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

let empTable = new EmpTable(EmployeeOfBank);
empTable.getHtml;