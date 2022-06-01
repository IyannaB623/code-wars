/* Problem
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

//My Solution
function count (string) {  
  let x = string.split('')
  
    const count = {}
  
  for( const i of x){
    if(count[i]){
      count[i] += 1
    } else {
      count[i] = 1
    }
  }
  
   return count;
}
