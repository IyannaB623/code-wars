/* Problem
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

//My Solution
function sumMix(x){
  
let y = 0
for (let i = 0; i < x.length; i++){
  y+=+x[i]
}
return y
}
