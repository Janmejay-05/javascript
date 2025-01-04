// for (let i = 1; i <= 5; i++) {
//   let sp = "";
//   for (let p = 1; p <= 5 - i; p++) {
//     sp += " ";
//   }

//   for (let j = 1; j <= i; j++) {
//     sp += "*";
//   }
//   console.log(sp);
// }

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

// const arr = ["red", "blue", "red", "green", "blue", "blue"];

// const obj = {
//   result: function () {
//     let obj2 = {};
//     for (let i of arr) {
//       if (obj2[i] == undefined) {
//         obj2[i] = 1;
//       } else {
//         obj2[i]++;
//       }
//     }
//     let max = -Infinity;
//     let maxvalue = "";
//     for (let i in obj2) {
//       if (obj2[i] > max) {
//         max = obj2[i];
//         maxvalue = i;
//       }
//     }

//     console.log(
//       ` the most frequently used color is ${maxvalue} which is ${max}`
//     );
//   },
// };
// console.log(obj);
// obj.result();

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

// for (let i = 1; i <= 4; i++) {
//   let str = "";
//   for (let j = 1; j <= 4; j++) {
//     if (i === 1 || i === 4 || j === 4 || j === 1) {
//       str += "*";
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str);
// }

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= 5; j++) {
//     if (i === j || i + j === 6) {
//       str += "*";
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str);
// }

// let str = "12345";
// for (let i = 0; i < 5; i++) {
//   let str1 = "";
//   for (let j = i; j < 5; j++) {
//     str1 += str[j];
//   }
//   console.log(str1);
// }

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= 5; j++) {
    if (
      i - j == 2 ||
      i - j == -2 ||
      i + j === 8 ||
      i + j === 4 ||
      i === 3 ||
      j === 3
    ) {
      str += "*";
    } else {
      str += " ";
    }
  }
  console.log(str);
}
