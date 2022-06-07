/* Problem
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

//My Solution
function isPangram(string){
  
  let str = string.toLowerCase().split('').sort().filter( n => String(n).trim()).join('') //turns string into a string sorted alphabetically and removes spaces
  let alpha = 'abcdefghijklmnopqrstuvwxyz' // the aplhabet that will be used in check if statement
  let check = '' //where letters will be added if it passes the loop 
  
  //This loop removes repeated lettes from str and adds it to check 
  for(let i=0; i<str.length; i++){
    if(check.includes(str[i]) === false){
      check += str[i]
    }
  }
  
  //This finally checks if it is a Pangram by checking if alpha is included in check
  if(check.includes(alpha)){
    return true
  } else{
    return false
  }


}
