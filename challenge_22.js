// challenge #22: Create a function that will merge two arrays and return the result as a new array

function margeTwoArray(arr1, arr2) {
  let margeArray = [];
  for (let a1 of arr1) {
    margeArray.push(a1);
  }
  for (let a2 of arr2) {
    margeArray.push(a2);
  }
  return margeArray;
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = margeTwoArray(arr1, arr2);
console.log(result);

// Output: [ 1, 2, 3, 4, 5, 6 ]
