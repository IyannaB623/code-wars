/*Problem
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/
//My Solution
function between(a, b) {
  let sol = []
  for(let i=a; i<b+1; i++){
    sol.push(i)
  }
  return sol
}
