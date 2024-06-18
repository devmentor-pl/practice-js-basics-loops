const x = 5;
let result = 0;
let i = 1;

// for (i; (i <= x); i++) {
//  result = ((1 + i) / 2) * i;

//  console.log(result);
// }

while (i <= x) {
  result = ((1 + i) / 2) * i;
  i = i + 1;
  console.log(result);
}
