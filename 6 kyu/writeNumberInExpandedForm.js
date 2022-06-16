/*Problem
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

*/

//My Solution
function expandedForm(num) {
  let x = num.toString().split('')
  
  
  for(let i = 0 ; i < x.length; i++ ){
      if(x[i]!=0){
      for(let y = (x.length-i); y > 1; y--){
         x[i] += '0'; 
      }
     }
  }
  

  let y = x.filter(value => value !== '0');
  return y.join(' + ')


  return y
}
