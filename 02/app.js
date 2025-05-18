const x = 5;
let result = 0;

for (let i = 1; i <= x; i++) {
    result += i;
}

console.log("Wynik przy użyciu pętli for:", result);

const y = 5;
let result2 = 0;
let j = 1;

while (j <= y) {
    result2 += j;
    j++;
}

console.log("Wynik przy użyciu pętli while:", result2);
