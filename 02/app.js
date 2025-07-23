const x = 5;

let resultFor = 0;
for (let i = 1; i <= x; i++) {
  resultFor = resultFor + i;
  console.log(resultFor);
}

let resultWhile = 0;
let j = 1;
while (j <= x) {
  resultWhile = resultWhile + j;
  j++;
  console.log(resultWhile);
}
