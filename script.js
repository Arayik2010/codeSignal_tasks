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

// function solution(statues) {
//   let arr = statues.sort((a, b) => a - b);
//   let num = arr[0];
//   let num2 = arr[arr.length - 1];
//   let arr2 = [];
//   for (let i = num; i <= num2; i++) {
//     arr2.push(i);
//   }
//   return arr2.length - arr.length
// }

// console.log(solution([6, 2, 3, 8]));

//7.Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// function solution(sequence) {
//   let count = 0;
//   for (let i = 1; i < sequence.length; i++) {
//     if (sequence[i] <= sequence[i - 1]) {
//       count++;
//       const x = sequence[i] <= sequence[i - 2] ? i : i - 1;
//       sequence.splice(x, 1);
//       i -= 2;
//     }
//   }

//   return count < 2;
// }
// console.log(solution([1, 3, 2, 1]));

//8.Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
//Example
//matrix = [[0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3]]
//solution(matrix) = 9.
// let matrix = [
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]
// ]

// function solution(matrix) {

// let sum = 0;
// for (let i = 0; i < matrix[0].length; i++) {
//   for (let j = 0; j < matrix.length; j++) {
//     if (matrix[j][i] > 0) {
//       sum = sum + matrix[j][i];
//     } else if (matrix[j][i] === 0) {
//       break;
//     }
//   }
// }
// return sum;
// }
// console.log(solution(matrix))

//9.Given an array of strings, return another array containing all of its longest strings

// function solution(inputArray) {
//  let arr1 = inputArray.sort((a, b) => a.length - b.length);
//  let arrEndElement = arr1[arr1.length - 1];
//  let result = arr1.filter((item) => item.length === arrEndElement.length);
//  return result;

// }
// console.log(solution(["abc", "eeee", "abcd", "dcd"]));

//10.Given two strings, find the number of common characters between them.
//Example
//For s1 = "aabcc" and s2 = "adcaa", the output should be
//solution(s1, s2) = 3.

// function solution(s1, s2) {
//  let count = 0;
//     for(let i = 0; i < s1.length; i++){
//         if(s2.indexOf(s1[i]) !=-1){
//             count++;
//             s2 = s2.replace(s1[i], '');
//         }
//     }
//     return count;
//   }
// console.log(solution("aabcc", "adcaa"));

//11.Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
//Example
//For n = 1230, the output should besolution(n) = true;
//For n = 239017, the output should besolution(n) = false;
// function solution(n) {
//   let sum1 = 0;
//   let sum2 = 0;
//   let str = n.toString();
//   let k = str.length / 2;
//   for (let i = 0; i < k; i++) {
//     sum1 += parseInt(str[i]);
//   }
//   for (let j = k; j < str.length; j++) {
//     sum2 += parseInt(str[j]);
//   }
//   return sum1===sum2
// }

// console.log(solution(1230));
