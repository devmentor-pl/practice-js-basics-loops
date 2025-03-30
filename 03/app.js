const x = 10;
let iteration = 0;
let randomNumber = -1;

while (randomNumber != x) {
  iteration++;
  randomNumber = Math.round(Math.random() * 20);
  if (randomNumber != x) {
    console.log(
      `${iteration}. iteration - random number was ${randomNumber}, but you try to hit ${x}`
    );
  } else {
    console.log(`On the ${iteration}. you hit x(${x})`);
  }
}
