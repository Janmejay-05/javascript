//1

// for (let i = 1; i < 15; i++) {
//   if (i % 2 == 0 || i % 5 == 0) {
//     console.log(i);
//   }
// }

//2

// for (let i = 1; i <= 10; i++) {
//   console.log(`3 * ${i} = ${3 * i}`);
// }

//3

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

//4
let no = 33;
let sum = 0;
let str = "";
for (let i = 1; i < no; i++) {
  if (no % i == 0) {
    sum += i;
    str += i + " + ";
  }
}
if (sum === no) {
  console.log(`${str}= ${no}`);
} else {
  console.log("is not a perfect number");
}
