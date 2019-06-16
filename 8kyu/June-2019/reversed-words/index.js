function reverseWords(str){
  let array = str.split(" ");
  let reverseArray = [];
  for(let i = array.length - 1; i >= 0; i--)
  {
    reverseArray.push(array[i])
  }
  let reverseString = reverseArray.join(" ");
  
  return reverseString; 
}
reverseWords("hello big world")

// Shorter Solution

// function reverseWords(str){
//   return str.split(' ').reverse().join(' ');
// }