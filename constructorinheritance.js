function Person(Birthyear, FirstName) {
  this.Birthyear = Birthyear;
  this.FirstName = FirstName;
}
Person.prototype.calcAge = function () {
  return `i am ${this.Birthyear} year old`;
};
function Student(Birthyear, FirstName, Course) {
  Person.call(this, Birthyear, FirstName);
  this.Course = Course;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.showdata = function () {
  return `I am ${this.FirstName} and i was born in ${this.Birthyear}`;
};
const jay = new Student(2005, "janmejay", "bca");
console.log(jay);
console.log(jay.calcAge());
console.log(jay.showdata());
