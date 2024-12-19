let array = [1, 2, 3, [4, 5, 6]];

const storearr = array.reduce((acc, e) => {
  if (typeof e == "object") {
    acc = [...acc, ...e];
  } else {
    acc = [...acc, e];
  }

  return acc;
}, []);

console.log(storearr);
