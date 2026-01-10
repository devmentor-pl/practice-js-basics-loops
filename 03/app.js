const x = 10;

function guessNumber() {
  let iteration = 0;
  let randomNumber = Math.round(Math.random() * 20);

  while (randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 20);
    console.log(`WYLOSOWANO: ${randomNumber}`)
    iteration += 1;
  }

  console.log(`Liczba iteracji losowań to: ${iteration}`);
}