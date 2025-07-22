const x = 5;
let result = 0;

for (i = 1; i <= x; i++) {
  result += i;
  console.log(`${i}. ${result} = ${result - i} + ${i} `);
}
