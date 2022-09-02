/*Problem
  Task
  In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
*/

//My Solution
function wave(str){
  
  let wave = []

  for(let i=0; i<str.length; i++){
    let letter = str[i]
    
    if(str[i] !== ' '){
    wave.push(str.slice(0,i) + letter.toUpperCase() + str.slice (i + 1))
    }
  }
  
  return wave
  

}
