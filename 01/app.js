const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);
let ran = randomNumber;
let i=0;
if(ran >= 5) {
  for(i=5; i<=randomNumber; i++) {
    console.log(`Wylosowana liczba ${i}`);
  }} else {
    console.log(`Wylosowana liczba jest zbyt mała, aby użyć pętli ${i}`);
  }
