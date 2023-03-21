// challenge #23: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function mergeExclusive(arr1, arr2) {
  let arr = [];

  for (let el of arr1) {
    if (!arr2.includes(el)) {
      arr.push(el);
    }
  }

  for (let el of arr2) {
    if (!arr1.includes(el)) {
      arr.push(el);
    }
  }

  return arr;
}

var arr1 = [1, 2, 3, 10, 5, 3, 14];
var arr2 = [1, 4, 5, 6, 14];

var arr = mergeExclusive(arr1, arr2);
console.log(arr);
