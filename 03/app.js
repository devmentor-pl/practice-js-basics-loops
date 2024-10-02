const x = 6;
let iteration = 0;
let randomNumber = 34;

while (randomNumber !== x) {
    randomNumber = Math.floor(Math.random() * 20);
    iteration++; 
}

console.log('Wylosowano '+ x);
console.log('Liczba prób: '+ iteration);
