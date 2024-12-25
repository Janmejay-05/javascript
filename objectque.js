// let arr = [
//   "google",
//   "microsoft",
//   "redmi",
//   "apple",
//   "onePlus",
//   "google",
//   "google",
//   "apple",
//   "google",
//   "apple",
// ];

// const obj = {};

// for (let i of arr) {
//   if (obj[i] == undefined) {
//     obj[i] = 1;
//   } else {
//     obj[i]++;
//   }
// }
// console.log(obj);

// 1

// const obj = {
//   tittle: "RRR",
//   director: "subhramayam",
//   year: 2020,
//   gender: "male",
//   display: function () {
//     console.log(
//       `Tittle : ${this.tittle} , director : ${this.director} , year : ${this.year} , gender : ${this.gender} `
//     );
//   },
// };
// obj.display();

// 2

// const arr = [
//   { nam: "nike shoes", price: 20000, stock: 20 },
//   { nam: "addidas shoes", price: 15000, stock: 10 },
//   { nam: "puma shoes", price: 10000, stock: 30 },
// ];

// for (const [key, value] of arr.entries()) {
//   console.log(
//     `${key + 1}.  product name : ${value.nam}   price : ${
//       value.price
//     }  stock : ${value.stock} `
//   );
// }

//3

// const library = {
//   books: [],
//   addBooks: function (booksArray) {
//     this.books.push(booksArray);
//     console.log(this.books);
//   },
// };
// library.addBooks({
//   tittle: "how to murder",
//   author: "riyazz",
// });

// 4

const arr = ["red", "blue", "red", "green", "blue", "blue"];

const obj = {
  obj2: {},
  result: function () {
    for (let i of arr) {
      if (obj[i] == undefined) {
        obj[i] = 1;
      } else {
        obj[i]++;
      }
    }
  },
};

// const obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]] == undefined) {
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]]++;
//   }
// }

// console.log(obj);

// let max = -Infinity;
// let maxValue = "";

// for (let key in obj) {
//   if (obj[key] > max) {
//     max = obj[key];
//     maxValue = key;
//   }
// }

// console.log(maxValue);
