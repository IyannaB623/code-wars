/* Problem
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

//My Solution
function highAndLow(numbers){
    let y = numbers.split(" ")
    y.sort((a,b)=>a-b)
    let highest = y[y.length - 1]
    let lowest = y[0]
    return(`${highest} ${lowest}`)
}
