/*Problem
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

//My Solution
function removeUrlAnchor(url){
  let x = url.indexOf('#')
  let newUrl = ''
  
  if(url.includes('#')){
  for(let i=0; i<x ; i++){
    newUrl += url.charAt(i)
    }
  } else{
    newUrl += url
  }
    
  return newUrl
}
