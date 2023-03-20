// challenge #19: Rotate an array to the right 1 position

function rightRotate(arr) {
  let last = arr.pop();
  arr.unshift(last);
  console.log(arr);
}

let arr = [1, 2, 3];
rightRotate(arr);

// Output: [ 3, 1, 2 ]
