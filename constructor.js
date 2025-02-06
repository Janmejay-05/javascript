//constructure

function BioData(name, city, phone, clas) {
  this.name = name;
  this.city = city;
  this.phone = phone;
  this.clas = clas;
}
BioData.prototype.print = function () {
  return `name : ${this.name}  city : ${this.city}  phone : ${this.phone}   clas : ${this.clas}`;
};
let jay = new BioData("Jay", "Ahmedabad", 8401300332, "2nd year");
let ayush = new BioData("Ayush", "Ahmedabad", 8487870332, "2nd year");
console.log(jay);
console.log(ayush);

console.log(jay.print());
console.log(ayush.print());
