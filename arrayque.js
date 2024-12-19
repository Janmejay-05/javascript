// 1

// let arr = [200, 100, 150, 350, 50];
// let sum = 0;
// for (i of arr) {
//   sum += i;
// }
// console.log(sum);

//2
// let arr = [32, 35, 30, 31, 33, 36, 34];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(`max value is ${max}`);
// console.log(`max value is ${Math.max(...arr)}`);

// 3

// let arr = [56, 72, 48, 90, 65];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(`min value is ${min}`);
// console.log(`max value is ${Math.min(...arr)}`);

// 4

// let arr = [45000, 55000, 30000, 70000, 60000];
// let sum = 0;
// for (i of arr) {
//   sum += i;
// }
// console.log(`avg is ${sum / arr.length}`);

// 5
// let str = ["John", "Aman", "Rita", "Raj"];
// let str2 = [];
// for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
//   str2[j] = str[i];
// }
// console.log(str2);

// 6
// let arr = [3, 5, 7, 9, 12];
// const available = () => arr.includes(7);
// if (available() == true) {
//   console.log("available");
// } else {
//   console.log("not available");
// }

// 7
// let arr = ["Buy groceries", "Clean room", "Study"];
// const removefirst = () => arr.shift();
// console.log(removefirst());
// console.log(arr);

// 8
// let arr = [9876543210, 9123456789, 9876543210, 9000000000];
// const removeduplicate = () => new Set([...arr]);
// console.log(removeduplicate());

// 9

// let arr = [200, 400, 100, 700, 500];
// arr.sort();
// console.log(`secont max value is ${arr[arr.length - 2]}`);

// 10
// let arr = ["Shoes", "T-shirt", "Hat"];
// const popvalue = () => arr.pop();
// console.log(popvalue());

// 11
// let cart = [];
// const check = () =>
//   cart.length === 0 ? console.log("is empty") : cosnole.log("is not empty");
// check();

//12
// let arr = ["Book A", "Book B", "Book A", "Book C", "Book A"];
// const result = arr.filter((e) => {
//   let count = 0;
//   return e === "Book A";
// });

// console.log(result.length);

// 13

// let arr1 = ["Rahul", "Neha"];
// let arr2 = ["Aman", "Priya"];
// const merge = (a, b) => (a = [...a, ...b]);
// console.log(merge(arr1, arr2));

// 14
// let arr = ["Inception", "Avatar", "Titanic"];
// const result = () => arr.indexOf("Avatar");
// console.log(result());

//15
// let arr = [1000, 2000, 1500, 2500];
// const value = () =>
//   arr.map((e) => {
//     e *= 0.9;

//     return e;
//   });
// console.log(value());

// 16
// let arr = [10, 50, 30, 20];
// let temp;
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

// 17
// let a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
// for (let i = 0; i < a.length - 1; i += 3) {
//   console.log(a.slice(i, i + 3));
// }

// 18

// let arr = ["Car1", "Car2", "Car3", "Car4"];

// const value = () => {
//   arr.unshift(arr.pop());
//   return arr;
// };

// console.log(value());

// 19
// let arr = [0, "A", "", null, "B", undefined];
// const result = arr.filter((e) => {
//   if (e != false) {
//     return e;
//   }
// });
// console.log(result);

// String questions

// 19
// let nam = "Rahul";
// let count = 0;
// for (let i = 0; i < nam.length; i++) {
//   if (
//     nam[i] === "a" ||
//     nam[i] == "A" ||
//     nam[i] === "e" ||
//     nam[i] == "E" ||
//     nam[i] === "i" ||
//     nam[i] == "I" ||
//     nam[i] === "o" ||
//     nam[i] == "O" ||
//     nam[i] === "u" ||
//     nam[i] == "U"
//   ) {
//     count++;
//   }
// }
// console.log(`there are ${count} vovels`);

// 20
// let str = "AB1234";
// let str1 = [];
// let j;
// for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
//   str1[j] = str[i];
//   // console.log(str1);
// }
// console.log(str1.join(""));

// 21

// let str = "nitin";
// let str1 = [];
// let j;
// for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
//   str1[j] = str[i];
//   // console.log(str1);
// }
// if (str1.join("") == str) {
//   console.log("its pallindrom");
// } else {
//   console.log("its not");
// }

// 22
// let str = "Hello World 2024";
// const result = () => str.split(" ").join("");
// console.log(result());

// 23
// let str = "JavaScript is fun";
// const result = () => str.split(" ");
// console.log(result());
