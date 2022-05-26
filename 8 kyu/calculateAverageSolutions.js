/* Problem

*/
//My Solution
function find_average(array) {

  let arrayTotal = 0
  
  if(array.length === 0){
    return 0
  }else{
    array.forEach(x => arrayTotal += x)
    let average = arrayTotal/ array.length
    return average
  }
}
