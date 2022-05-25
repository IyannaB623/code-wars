/* Problem
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

//My Solution
function longest(s1, s2) {
  
 let combineString = s1 + s2
 let firstArray = combineString.split('')
 let thisArray = firstArray.sort()
 let returnThis = '' 
  
 thisArray.forEach(element => {
   if(!returnThis.includes(element)){
     returnThis += element}
   })
  
  return returnThis
}
