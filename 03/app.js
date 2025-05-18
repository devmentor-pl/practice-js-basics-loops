const x = 5;
let iteration = 0;
let randomNumber = -1;


while (randomNumber !== x) {
    randomNumber = Math.floor(Math.random() * 21); 
    iteration++;
}

console.log("Liczba x została wylosowana po", iteration, "próbach.");