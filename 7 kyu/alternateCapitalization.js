/*Problem
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

//My Solution
function capitalize(s){
  let x = ''
  let y = ''
  
  for(let i=0; i<s.length; i++){
    if(i%2===0){
      x += s.charAt(i).toUpperCase()
    } else {
      x += s.charAt(i)
    }
    }
    
  for(let j=0; j<s.length; j++){
    if(j%2 !== 0){
      y += s.charAt(j).toUpperCase()
    } else {
      y += s.charAt(j)
    }
    }
    
  
  return [x,y]
};
