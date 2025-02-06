class Person {
  constructor(Birthyear, Firstname) {
    this.Birthyear = Birthyear;
    this.Firstname = Firstname;
  }
}

Person.prototype.calcAge = function () {
  return `i am ${2025 - this.Birthyear} year old`;
};

class Student extends Person {
  constructor(Birthyear, Firstname, course) {
    super(Birthyear, Firstname);
    this.course = course;
  }
}
Student.prototype.showdata = function () {
  return `I am ${this.Firstname} and i was born in ${this.Birthyear}`;
};

const jay = new Student(2005, "janmejay", "BCA");
console.log(jay);
console.log(jay.calcAge());
console.log(jay.showdata());
