/*Problem
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

//My Solution
function solve(s){
 let uCount = 0
 let lCount = 0
 let nCount = 0
 let sCount = 0
 let alpha = 'abcdefghijklmnopqrstuvwxyz'
 
 for(let i=0;i<s.length;i++){
   if(isNaN(s.charAt(i)) === true && s.charAt(i) === s.charAt(i).toUpperCase() && alpha.includes(s.charAt(i).toLowerCase())){
     uCount ++
   } else if(isNaN(s.charAt(i)) === true && s.charAt(i) === s.charAt(i).toLowerCase()  && alpha.includes(s.charAt(i).toLowerCase())){
     lCount ++
   } else if(isNaN(s.charAt(i))===false){
     nCount ++
   } else {
     sCount ++ 
   }
 }
 
 return[uCount,lCount,nCount,sCount]
}
