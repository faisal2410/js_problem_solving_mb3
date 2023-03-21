// challenge #20: Reverse an array

function reverseArray(arr) {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  console.log(reverse);
}

let arr = [1, 2, 3];
reverseArray(arr);

// Output: [ 3, 2, 1 ]
