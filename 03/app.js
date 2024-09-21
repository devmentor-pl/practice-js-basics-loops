const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 20);
    iteration++;
}

console.log(`Tyle razy losowałem liczbe aby wypadło 10: ${iteration}`)