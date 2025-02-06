function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.Accelerate = function () {
  return `${this.make} is going at speed ${this.speed + 10} km/h`;
};

Car.prototype.Brake = function () {
  return `${this.make} is going at speed ${this.speed - 10} km/h`;
};

const bmw = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);
console.log(bmw, Mercedes);
console.log(bmw.Accelerate(), bmw.Brake());
console.log(Mercedes.Accelerate(), Mercedes.Brake());
