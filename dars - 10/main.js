//js class//
// class Person {
// constructor(name, age, familiya) {
// this.name = name;
// this.age = age;
// this.familiya = lastname;
// }
// 
// sayHello() {
// console.log(`Salom, mening ismim ${this.name}, yoshim ${this.age},familiyam ${this.lastname}`);
// }
// }
// 
// Obyekt yaratish
// let person1 = new Person("Ali", 'valiyev', 25);
// person1.sayHello(); // Salom, mening ismim Ali, yoshim 25
// 
// 
// class Person {
// constructor(name, age) {
// this.name = name;
// this.age = age;
// }
// 
// sayHello() {
// console.log(`Salom, mening ismim ${this.name}, yoshim ${this.age}`);
// }
// }
// 
// Obyekt yaratish
// let person1 = new Person("kumush", 14);
// person1.sayHello(); // Salom, mening ismim Ali, yoshim 25
// let person0 = new person1('mubina', 'baxtiyorova')
// let person2 = new person1('sarvara', 'ibrahimova')
// let person3 = new person1('parizoda', 'rajaboyeva')
// person0. sayHello();
// person2. sayHello();
// person3. sayHello();
// 
// 
// class Calculator {
// add(a, b) {
// return a + b;
// }

// subtract(a, b) {
// return a - b;
// }
// }

// let calc = new Calculator();
// console.log(calc.add(5, 3));      // 8
// console.log(calc.subtract(5, 3)); // 2

// class Car {
//   constructor(brand, year) {
// this.brand = brand;
// this.year = year;
//   }
// }

// let car1 = new Car("BMW", 2024);
// console.log(car1.brand); // BMW
// vvStudent classini yarating:
// name, grades (massiv) xossalari bo‘lsin
// addGrade(grade) va getAverage() metodlari ishlasin.




// 
// class employee {
// constructor(name, salary, position) {
// this.name = name;
// this.salary = salary;
// this.position = position;
// }
// getAnnualSalary() {
// return this.salary * 12;
// }
// }
// const employee1 = new employee('kumush', 100000, 'developer' );
// console.log(employee1.getAnnualSalary());
// console.log(employee1.name);


// class Student {
// constructor(name, grades) {
// this.name = name;
// this.grades = grades;
// }

// addGrade(grade) {
// this.grades.push(grade);

// }
// getAverage() {
// const sum = this.grades.reduce((previosValue, currentValue) => {
// return previosValue + currentValue;
// })
// return sum / this.grades.lenght;
// }
// }
// const student1 = new Student('Ali', [85, 90, 78]);
// console.log(student1.getAverage());
// student1addGrade(92);
// console.log(student1.getAverageGrade());
//  2-mashq
// class person {
// constructor() {
// this.name = name;
// }

// speak() {
// console.log(`${this.name} ovoz chiqarmoqda`);
// }
// }

// class Dog extends Animal {
// constructor(name, breed) {
// super(name); // ota klassning constructorini chaqirish
// this.breed = breed;
// }

// bark() {
// console.log(`${this.name} hurmoqda!`);
// }
// }

// let dog1 = new Dog("Sharik", "Ovcharka");
// dog1.speak();
// dog1.bark();  
// class person {
// constructor(name, age) {
// this.name = name
// this.age = age
// }
// introduce() {
// return `name:${this.name}\nyoshi:${this.age}`
// /yoshi:14
// ism:kumush/
// }
// }
// class parent extends person {
// constructor(name, age) {
// super(name, age)
// this.work = work
// }
// Getwork() {
// return `name:${this.name}\nish joyi:${this.work}`
// }
// } 
// 

// class Person {
//   constructor(name, age) {
// this._name = name;
// this._age = age;
//   }
// 
//   get age() {
// return this._age;
//   }
// 
//   set age(value) {
// if (value < 0) {
//   console.log("Yosh manfiy bo‘lmasligi kerak!");
// } else {
//   this._age = value;
// }
//   }
// }
// 
// let p1 = new Person("Ali", 25);
// console.log(p1.age); // 25
// p1.age = -5;         // Xato xabar
// 
// 

//4-mashq
class Car {
    constructor(brend, model) {
        this.brend = brend;
        this.model = model;
    }
    info() {
        console.log(`bu avtomobil:${this.brend},${this.model}`);
    }
}
class ElectricCar extends Car {
    constructor(model, brend, batteryLevel) {
        super(model, year);
        this.batteryLevel = batteryLevel;


    }
    change() {
        return `${this.model} is charging`;
    }
}
const tesla = new ElectricCar('tesla model x', '2023', 84);
console.log(tesla.charge());
console.log(tesla.start());
console.log(tesla.stop());








