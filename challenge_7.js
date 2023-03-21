// challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

let sumOfOddNum = 0;
for (let i = 10; i <= 30; i++) {
  if (i % 2 === 1) {
    sumOfOddNum = sumOfOddNum + i;
  }
}
console.log(sumOfOddNum);

/*
Output-> 200
*/
