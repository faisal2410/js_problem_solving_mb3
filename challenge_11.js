// challenge #11: Calculate the average of the numbers in an array of numbers

function sumOfArrayAverage() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
let arr = [1, 2, 3];
let sumOfAverage = sumOfArrayAverage(arr);
console.log(sumOfAverage);

/*
Output-> 2
*/
