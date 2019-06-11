function duplicateCount(text){
  let count = 0;
  let arr = [];
  for(let i = 0; i < text.length; i++)
  {
    let currentChar = text.charAt(i);
    let nextChat = text.charAt(i+1);
    let re = new RegExp(currentChar, 'g');
    let match = text.match(re).length;
    if(match > 1 && currentChar != arr)
    {
      count++;
      arr.push(currentChar)
    }
  }
  console.log(arr);
  return count;
}
duplicateCount("hexxxxo");
  
// Syntax for match(): string.match(RegExp) 
// 'gi' = case sensitive