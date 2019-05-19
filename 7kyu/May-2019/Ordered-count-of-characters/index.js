var orderedCount = function (text) {
  let finalArr = [];
  for(let i = 0; i < text.length; i++)
  {
    let currentChar = text.charAt(i);
    let nextChar = text.charAt(i + 1)
    if(currentChar != nextChar)
    {
      let re = new RegExp(currentChar, 'gi')
      let match = text.match(re).length
      let arr = [currentChar, match];
      finalArr.push(arr);
    }
  }

  for(let i = 0; i < finalArr.length; i++)
  {
    console.log("i = " + i)
    for(let j = 0; j < finalArr.length; j++)
    {
      if(finalArr[i] == finalArr[j + 1])
      {
        console.log("j = " + j)
        finalArr.splice(j+1,1)
      }
    }
  }
  return finalArr;
}
orderedCount("abracadabra")
// abrcd

// console.log((finalArr[2])[0]);
// This shows the first element in the third index of finalArr.

// document.write(string.match(/a/gi).length);

// Use the .match() property
// Ex: let match = text.match(/a/gi). length 
// This returns the number of times the letter 'a' appears in the string 'text'

