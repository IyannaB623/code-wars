/* Problem
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

//My Solution
const reverseSeq = n => {
    let seq = [];
  for (let i=1; i<=n; i++) {
    seq.push(i);
  }
  return seq.reverse();
};
