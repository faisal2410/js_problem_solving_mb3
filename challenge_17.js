// challenge #17: Calculate the sum of digits of a positive integer number

function sumOfDigits(n) {
  let numString = n.toString();
  let sum = 0;

  for (let char of numString) {
    let digit = parseInt(char);
    sum = sum + digit;
  }
  return sum;
}

let result = sumOfDigits(12345);
console.log(result);

// Output: 15
