// 1

// let r = 7;
// let pie = 3.14;
// let area = pie * (r**2);
// console.log(`area of circle is ${area}`);

// // 2

// let a = 10,
//   b = 20,
//   c = 5;
// console.log(`result is ${(a * b) / c + (b - a)}`);

// //3

// let x = 5,
//   y = 10;
// x += 2;
// y *= x;
// console.log(`value of x is ${x} and value of y is ${y}`);

// //4

// let num = 10;
// num += 15;
// console.log(`value of num is ${num}`);
// num -= 5;
// console.log(`value of num is ${num}`);
// num *= 3;
// console.log(`value of num is ${num}`);
// num /= 2;
// console.log(`value of num is ${num}`);

// // 5

// let score1 = 85,
//   score2 = 90;

// if (score1 > 80 && score2 > 80) {
//   console.log("both are greater than 80");
// } else {
//   console.log("both are not greater than 80");
// }

// //6

// let str1 = "apple",
//   str2 = "banana";

// if (str1.length > str2.length) {
//   console.log("string 2 is lesser than string 1");
// } else {
//   console.log("string 1 is lesser than string 2");
// }

// //7
// let age = 18;
// if (age >= 18) {
//   console.log("elegible");
// } else {
//   console.log("not elegible");
// }

//8
// let num = 73;

// if ((num >= 10 && num <= 50) || num % 5 == 0) {
//   console.log("num is true " + num);
// } else {
//   console.log("num is false");
// }

//9
// let num = "123.4";
// num = Number(num) + 10;
// console.log(`number is ${num}`);

//10

// let bool = true;
// bool = String(bool) + " is the value";
// console.log(bool);

//11
// let div = document.getElementById("div1");
// div.innerHTML = `<h1>15 * 3 = ${15 * 3}</h1>`;

// // 12
// let a = 5,
//   b = 10;
// let div2 = document.getElementById("div2");
// div2.innerHTML = `<h2>a = ${a} b = ${b} and sum of a and b is ${a + b}</h2>`;

//13

// let num = 0;
// if (num > 0) {
//   console.log(`${num} is positive`);
// } else if (num === 0) {
//   console.log(`${num} is zero`);
// } else {
//   console.log(`${num} is negative`);
// }

// 14

// let temp = 30;
// if (temp > 25) {
//   console.log("temperature is hot");
// } else {
//   console.log("its cold");
// }

// 15

// let num = 0;
// if (num > 0) {
//   console.log(`${num} is positive`);
// } else if (num === 0) {
//   console.log(`${num} is zero`);
// } else {
//   console.log(`${num} is negative`);
// }

// 16

// let marks = -110;

// if (marks > 70) {
//   if (marks >= 90 && marks <= 100) {
//     console.log("A grade");
//   } else if (marks >= 80 && marks < 90) {
//     console.log("B Grade");
//   } else if (marks >= 70 && marks < 80) {
//     console.log("C Grade");
//   }
// } else if (marks > 0) {
//   console.log("D Grade");
// } else {
//   console.log("wrong marks");
// }

// 17

// let num = 14;
// if (num % 2 == 0 && num > 10) {
//   console.log("its true ");
// } else {
//   console.log("its false");
// }

// 18

// let marks = 86;
// let result;
// if (marks >= 75) {
//   result = "passed";
// } else {
//   result = "failed";
// }
// let divi3 = document.getElementById("div3");
// divi3.innerHTML = `<h1>student is ${result}</h1>`;

// 19
// let num1 = 8,
//   num2 = 3;
// num1++;
// if (num1 % num2 == 0) {
//   console.log("it is multiple");
// } else {
//   console.log("it is not a multiple");
// }

// 20

let age = 40;

if (age < 18 || age > 60) {
  console.log("not Elegible");
} else {
  console.log("Elegible");
}
