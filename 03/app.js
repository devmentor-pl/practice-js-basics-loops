const x = 10;
let iteration = 0;
let randomNumber;

while (randomNumber === x) {
randomNumber = Match.round(Math.random() * 10);
console.log(randomNumber);
iteration++;
}

console.log(iteration);