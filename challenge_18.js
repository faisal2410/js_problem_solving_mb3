// challenge #18: Rotate an array to the left 1 position

function leftRotate(arr) {
  let first = arr.shift();
  arr.push(first);
  console.log(arr);
}

let arr = [1, 2, 3];
leftRotate(arr);

// Output: [ 2, 3, 1 ]
