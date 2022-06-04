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

function solution(year) {
  let century;
  if (year % 100 == 0) {
    century = year / 100;
  } else if (year % 100 !== 0) {
    century = Math.ceil(year / 100);
  }
  return century;
}
console.log(solution(2022));