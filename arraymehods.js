let arr = [11, 14, 6, 34, 28, 33, 78, 496];

// arr.forEach((e) => {
//   let sum = 0;
//   for (let i = 0; i < e; i++) {
//     if (e % i == 0) {
//       sum += i;
//     }
//   }

//   if (sum === e) {
//     console.log(`${e} is a perfect number`);
//   }
// });

// result();
const result = arr.filter((e) => {
  let sum = 0;
  for (let i = 0; i < e; i++) {
    if (e % i == 0) {
      sum += i;
    }
  }

  if (sum === e) {
    return e;
  }
});

for (i of result) {
  console.log(`${i} is a perfect number`);
}
