// for (i = 1; i <= 5; i++) {
//   str = "";
//   for (j = 1; j <= i; j++) {
//     str += j;
//     //   String = String + j
//   }
//   console.log(str);
// }

// for (i = 5; i >= 1; i--) {
//   str = "";
//   for (j = 5; i >= 1; i--) {
//     str += j;
//   }
//   console.log(str);
// }

for (let i = 5; i >= 1; i--) {
  let str = "";
  for (let j = i; j >= 1; j--) {
    str += "*";
  }
  console.log(str);
}
