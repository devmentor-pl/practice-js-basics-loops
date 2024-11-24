const x = 5;
let result = 0;

for (let i = 1; i <= x; i++) {
    result += i; 
}
console.log(`Suma dla podanych liczb to ${result}`);

let j = 1;
let sum = 0;

while (j <= x){
    sum += j;
    j++;
}
console.log(`Suma dla podanych liczb za pomoca while to ${sum}`);