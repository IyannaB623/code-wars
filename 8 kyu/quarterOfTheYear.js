/* Problem
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

//My Solution
const quarterOf = (month) => {
 let x = month
  if(x === 1 || x === 2 || x === 3){
    return 1
  } else if(x === 4 || x === 5|| x === 6){
    return 2
  } else if(x === 7 || x === 8 || x === 9){
    return 3
  } else{
    return 4
  }
}
