/* Problem
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

//My Solution
function getCount(str) {
  
  var vowelsCount = 0;
  
  for (let i=0; i<=str.length + 1; i++){
    let n = str.charAt(i)
    
    if( n==="a" || n==="e" || n==="i" || n==="o" || n==="u"){
      vowelsCount++
    }
  }
  return vowelsCount;
}
