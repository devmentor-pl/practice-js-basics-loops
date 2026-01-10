const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);


if (randomNumber >= 5) {
  for (let j = 5; j <= randomNumber; j++) {
    console.log(j);
  }
} else {
  console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli')
}