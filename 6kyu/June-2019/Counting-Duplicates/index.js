function duplicateCount(text){
  let count = 0;
  let firstArr = [];
  let finalArr = [];
  for(let i = 0; i < text.length; i++)
  {
    let currentChar = text.charAt(i);
    let re = new RegExp(currentChar, 'g');
    let match = text.match(re).length;
    let arr = [currentChar, match];
    firstArr.push(arr);
  }

  finalArr.push(firstArr[0]);
  if((finalArr[0])[1] > 1)
  {
    count++;
  }

  for(let i = 0; i < firstArr.length; i++)
  {
    let bool = true;
    for(let j = 0; j < finalArr.length; j++)
    {
      if((firstArr[i])[0] = ((finalArr[j])[0]))
      {
        bool = false;
      }
    }

    if(bool == true && (firstArr[i])[1] > 1)
    {
      finalArr.push(firstArr[i])
      count++;
    }
  }

  console.log(finalArr);
  return count;
}
duplicateCount("helLo");
  
// Syntax for match(): string.match(RegExp) 
// 'gi' = case sensitive