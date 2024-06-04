const x = 5;
let result = 0;

for (i = 1; i <= x; i++) {
    result = result + i;
}

result = 0;
let counter = 1;

while (counter < x+1) {
    result = result + counter;
    counter++; 
}