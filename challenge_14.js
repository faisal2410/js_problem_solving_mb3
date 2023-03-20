// challenge #14: Print the first 10 Fibonacci numbers without recursion

function fibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

let result = fibonacci(10);
console.log(result);

/*
  Output-> 55
*/
