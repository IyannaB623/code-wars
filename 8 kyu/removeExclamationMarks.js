/*Problem
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/
//My Solution
function removeExclamationMarks(s) {
  
  let sol = ''
  for(let i=0; i<s.length; i++){
    if(s.charAt(i) !== "!"){
      sol += s.charAt(i)
      }
  }
  return sol
}
