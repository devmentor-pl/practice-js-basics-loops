const x = 5;
let result = 0;

// With for
for ( let i = 1; i <= x; i++ ) {
  result += i
}
console.log(result)

// With while
result = 0
let i = 0
while ( i <= x ) {
  result += i
  i += 1
}
console.log(result)
