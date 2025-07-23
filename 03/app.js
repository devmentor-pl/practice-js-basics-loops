const x = 5;
let randomNumber;
let iteration = 0;

while (randomNumber !== x) {
  randomNumber = Math.round(Math.random() * 20);
  console.log(randomNumber);
  iteration++;
}
console.log(`Potrzebowałaś ${iteration} prób/y.`);
