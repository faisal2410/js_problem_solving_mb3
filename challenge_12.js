// challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

function positiveNumbers(arr) {
  let positiveNumberArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveNumberArray.push(arr[i]);
    }
  }
  return positiveNumberArray;
}

// another way
// function positiveNumbers(arr) {
//   let positiveNumberArray = arr.filter((item) => item >= 0);
//   return positiveNumberArray;
// }

let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let result = positiveNumbers(arr);
console.log(result);

/*
Output-> [ 10, 12, 5, 90, 0, 1 ]
*/
