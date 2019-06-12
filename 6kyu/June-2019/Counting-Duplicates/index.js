function duplicateCount(text){
  let count = 0;
  for(let i = 0; i < text.length; i++)
  {
    let bool = true;
    let currentChar = text.charAt(i);
    let nextChar = text.charAt(i+1);
    let re = new RegExp(currentChar, 'g');
    let match = text.match(re).length;
    console.log(match);
    
    for(let j = 1; j < text.length; j++)
    {
      if(currentChar == text.charAt(j))
      {
        bool = true;
      }
    }

    if(match > 1 && bool == true)
    {
      count++;
    }
  }
  return count;
}
duplicateCount("hexxxh");
  
// Syntax for match(): string.match(RegExp) 
// 'gi' = case sensitive