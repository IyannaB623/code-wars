/* Problem

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

//My Solution
function XO(str) {
  
  let xCount = 0
  let oCount = 0
  

  for (let i=0; i<=str.length; i++){
    
    let n = str.charAt(i).toLowerCase()
    
    if( n ==="x" ){
      xCount+= 1
    } else if( n === "o"){
      oCount+= 1
    }
  }
  
  if(xCount === oCount){
    return true
  } else if(xCount === 0 && oCount === 0){
    return true
  } else if(xCount !== oCount){
    return false
  }

}
