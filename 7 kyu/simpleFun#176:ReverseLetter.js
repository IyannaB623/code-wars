/*Problem
Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/

//My Solution
function reverseLetter(str) {
  
  let x = str.split('').reverse().join('')
  let sol = ''
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  
  for(let i=0; i<x.length; i++){
    if(alpha.includes(x.charAt(i))){
       sol += x.charAt(i)
    }
  }
  return sol
}
