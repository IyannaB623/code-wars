/*Problem 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

//My Solution
function findShort(s){
  
    t = s.split(" ");
    let count = t[0].length
    
    for(let i=1; i<t.length; i++){
    
      let x = t[i].length

      if (x <= count){
        count = x
      }
    }
    return count
  }
