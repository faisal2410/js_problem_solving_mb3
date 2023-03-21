// challenge #20: Reverse an String

function reverseString(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    reverseStr += char;
  }
  console.log(reverseStr);
}

let str = 'sabbir';
reverseString(str);

// Output: [ 3, 2, 1 ]
