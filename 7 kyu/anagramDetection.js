/*Problem
DESCRIPTION:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

//My Solution
// write the function isAnagram
var isAnagram = function(test, original) {
  let x = test.toLowerCase().split("").sort().join("");
  let y = original.toLowerCase().split("").sort().join("");
  if (x === y) {return true;
               } else {return false;
                }  
};
