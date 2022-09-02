/*Problem
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique

*/

//My Solution

function findUniq(arr) {
  
const Count = {}
  
//creates an object that collects all values from the array
  for( const i of arr){
    if(Count[i]){
      Count[i] += 1
    } else {
      Count[i] = 1
    }
  }

//function that will find a key by its value in the object
  
  function getObjKey(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}

// the value of that key
 let x = getObjKey(Count, 1)
 
// added a plus to turn the number within the string into a real number
 return +x


}
