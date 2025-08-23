const x = 10;
let iteration = 0;
let randomNumber = Math.round(Math.random() * 20);

while (randomNumber !== x){
    randomNumber = Math.round(Math.random() * 20);
    console.log(`Wylosowano ${randomNumber}`);
    iteration++;
    
}

console.log(`Wylosowano te sama liczbe za ${iteration} razem`)