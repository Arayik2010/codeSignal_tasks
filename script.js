///1.Write a function that returns the sum of two numbers.//

//Example//

//For param1 = 1 and param2 = 2, the output should be solution(param1, param2) = 3//

// function solution(param1, param2) {
//   let sum = 0;
//   sum = param1 + param2;
//   return sum;
// }
// console.log(solution(1,2))

//////////////////////////////////////////////////////////

//2.Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.//
//Example
//For year = 1905, the output should besolution(year) = 20
//For year = 1700, the output should besolution(year) = 17.

// function solution(year) {
//   let century;
//   if (year % 100 == 0) {
//     century = year / 100;
//   } else if (year % 100 !== 0) {
//     century = Math.ceil(year / 100);
//   }
//   return century;
// }
// console.log(solution(2022));

///////////////////////////////////////////////////////////

//3.Given the string, check if it is a palindrome.
//Example
//For inputString = "aabaa", the output should be solution(inputString) = true;
//For inputString = "abac", the output should be solution(inputString) = false

// function solution(inputString) {
//   let str = inputString.split("").reverse().join("");
//   if (str === inputString) {
//     return true;
//   }
//   return false;
// }
// console.log(solution('aba'));

//////////////////////////////////////////////////////////

//4.Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
//Example
//For inputArray = [3, 6, -2, -5, 7, 3], the output should be solution(inputArray) = 21.
//7 and 3 produce the largest product

// function solution(inputArray) {
//   let max = -Infinity;

//   for (let i = 0; i < inputArray.length - 1; i++) {
//     max = max > inputArray[i] * inputArray[i + 1] ? max : inputArray[i] * inputArray[i + 1];
//   }
//   return max;
// }
// console.log(solution([3, 6, -2, -5, 7, 3]));

////////////////////////////////////////////////////////

//5.Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
//A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
//Example
//For n = 2, the output should be solution(n) = 5;
//For n = 3, the output should be solution(n) = 13.

// function solution(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n * n + (n - 1) * (n - 1);
//   }
// }
// console.log(solution(3));

//6.Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
//Example
//For statues = [6, 2, 3, 8], the output should be solution(statues) = 3.
//Ratiorg needs statues of sizes 4, 5 and 7.

function solution(statues) {
  let arr = statues.sort((a, b) => a - b);
  let num = arr[0];
  let num2 = arr[arr.length - 1];
  let arr2 = [];
  for (let i = num; i <= num2; i++) {
    arr2.push(i);
  }
  return arr2.length - arr.length
}

console.log(solution([6, 2, 3, 8]));
