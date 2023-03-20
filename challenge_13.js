// challenge #13: Find the maximum number in an array of numbers

function maximumNumber(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let arr = [10, 12, 5, 90, 0, 1];
let maxNumber = maximumNumber(arr);
console.log(maxNumber);
/*
Output-> 90
*/
