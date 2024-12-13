const x = 5;
let result = 0;
let i = 1;

while (i <= x) {
  result += i;
  console.log(`Suma kolejnych ${i} liczb wynosi ${result}`);
  i++;
}
console.log(`Suma kolejnych liczb od 1 do x wynosi ${result}`);