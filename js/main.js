/*Array Challenge
Have the function ArrayChallenge(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing sequence where each element in the array is greater than the sum of all previous elements.The array will only consist of positive integers.For example: if arr is[1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing sequence.If a superincreasing sequence isn't formed, then your program should return the string "false"

Examples: Input [1,2,3,4]
          Output: false
*/

/* 
Have the function ArrayChallenge(strArr) take the array of strings stored in strArr, which will only contain 4 elements and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 points on a Cartesian grid. The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height.  

Examples
Input: ["(1 1)","(1 3)","(3 1)","(3 3)"]
Output: 4
Input: ["(0 0)","(1 0)","(1 1)","(0 1)"]
Output: 1

*/

function arrayChallenge(arr) {
  function readline() {
    return arr * 2;
  }
  return readline();
}
console.log(arrayChallenge(readline()));
