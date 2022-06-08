/* Problem
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

//My Solution
function twoSort(s) {
  let x = s.sort()
  let sol = ''
  
  for(let i=0; i<x[0].length; i++){
    sol += x[0].charAt(i) + "***"
  }
  
  return sol.slice(0, sol.length - 3)

}
