const x = 5;

function forSum() {
  let result = 0;

  for (let i = 0; i <= x; i++) {
    result += i;
  }

  return result
};

function whileSum() {
  let result = 0;
  let i = 0;

  while (i <= x) {
    result += i;

    i++
  }

  return result
};