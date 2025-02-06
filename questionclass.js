//1
// class Person {
//   constructor(name, age, country) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }

//   showdata() {
//     return ` my name is ${this.name}. i am ${this.age} old and i live in ${this.country}`;
//   }
// }

// const jay = new Person("jay", 19, "India");
// const Ayush = new Person("Ayush", 19, "bangladesh");
// console.log(jay, Ayush);
// console.log(jay.showdata());
// console.log(Ayush.showdata());

//2 Write a JavaScript program to create a class called 'Rectangle' with properties
//  for width and height. Include two methods to calculate rectangle area and perimeter.
//  Create an instance of the 'Rectangle' class and calculate its area and perimeter.

// class rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.heigth = height;
//   }

//   area() {
//     return `area of rectangle is ${this.width * this.heigth}`;
//   }
//   perimeter() {
//     return `perimeter of rectangle is ${(this.width + this.width) * 2}`;
//   }
// }

// const react = new rectangle(5, 10);
// console.log(react.area());
// console.log(react.perimeter());

// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make,
//  model, and year. Include a method to display vehicle details. Create a subclass called 'Car'
//  that inherits from the 'Vehicle' class and includes an additional property for the number of doors.
//  Override the display method to include the number of doors.

// class Vehical {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   display() {
//     return `make : ${this.make}  model : ${this.model}  year : ${this.year}`;
//   }
// }

// class Car extends Vehical {
//   constructor(make, model, year, no_doors) {
//     super(make, model, year);

//     this.no_doors = no_doors;
//   }

//   display() {
//     return `make : ${this.make}  model : ${this.model}  year : ${this.year} no of doors : ${this.no_doors}`;
//   }
// }

// const baleno = new Car("suzuki", "first", 2018, 4);
// console.log(baleno.display());

// 4:  Write a JavaScript program that creates a class called "BankAccount" with properties
//  for account number and balance. Include methods to deposit and withdraw money from the account.
//  Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

// class BankAccount {
//   constructor(acc_no, balance) {
//     this.acc_no = acc_no;
//     this.balance = balance;
//   }
//   deposite(amount) {
//     this.balance += amount;
//   }
//   withdraw(amount) {
//     this.balance -= amount;
//   }

//   show() {
//     return `ac no : ${this.acc_no}  balance : ${this.balance}`;
//   }
// }

// const jay = new BankAccount(343, 5000);
// jay.deposite(2000);
// jay.withdraw(1000);
// console.log(jay.show());

// 5 . Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.
//  Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the
// area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly,
//  do the same for the 'Triangle' class.

// class Shape {
//   constructor(breath, width, radius) {
//     this.breath = breath;
//     this.width = width;
//     this.radius = radius;
//   }

//   Calc() {
//     return `area of rectangle is ${this.length * this.width}`;
//   }
// }
// class Circle extends Shape {
//   constructor(breath, width, radius) {
//     super(breath, width, radius);
//   }

//   Calc() {
//     return `${this.radius}`;
//   }
// }

// class Triangle extends Shape {
//   constructor(breath, width) {
//     super(breath, width);
//   }

//   Calc() {
//     return `area of triangle is ${(1 / 2) * (this.width * this.breath)}`;
//   }
// }

// const a = new Circle(0, 0, 5);
// const b = new Triangle(2, 3);

// console.log(a.Calc());
// console.log(b.Calc());

// 6.
