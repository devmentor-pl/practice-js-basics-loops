const x = 10;
let iteration = 0;
let randomNumber = -1;

while (x !== randomNumber) {
  const number = Math.round(Math.random() * x);
  randomNumber = number;
  iteration++;
}

console.log(iteration);
