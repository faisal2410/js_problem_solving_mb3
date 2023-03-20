// challenge #16: Create a function that will return a Boolean specifying if a number is prime

function checkPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let result = checkPrime(5);
console.log(result);

// Output: true
