function duplicateCount(text){
  let count = 0;
  let firstArr = [];
  let finalArr = [];
  for(let i = 0; i < text.length; i++)
  {
    let currentChar = text.charAt(i);
    let upperChar = currentChar.toUpperCase();
    let re = new RegExp(upperChar, 'gi');
    let match = text.match(re).length;
    let arr = [upperChar, match];
    firstArr.push(arr);
  }

  finalArr.push(firstArr[0]);
  if(((finalArr[0])[1]) > 1)
  {
    count++;
  }

  for(let i = 0; i < firstArr.length; i++)
  {
    let bool = true;
    for(let j = 0; j < finalArr.length; j++)
    {
      if(((firstArr[i])[0]) == ((finalArr[j])[0]))
      {
        bool = false;
      }
    }

    if(bool == true && ((firstArr[i])[1]) > 1)
    {
      finalArr.push(firstArr[i])
      count++;
    }
  }
  // console.log(firstArr);
  // console.log(finalArr);
  console.log(count);
  return count;
}
duplicateCount("eEhHeElL123321o");

  
// Syntax for match(): string.match(RegExp) 
// 'gi' = case sensitive