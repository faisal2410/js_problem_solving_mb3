// challenge #15: Create a function that will find the nth Fibonacci number using recursion

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let result = fibonacci(10);
console.log(result);

/*
  Output-> 55
*/
