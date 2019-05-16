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
      finalArr.push(arr)
      for(let j = 0; j < text.length; j++)
      {
        let nextNextChar = text.charAt(j+1)
        if(currentChar == nextNextChar)
        {
          text = text.replace(nextNextChar, "")
          console.log(text)
        }
      }
    }
  }
  return finalArr;
}
orderedCount("abracadabra")

// document.write(string.match(/a/gi).length);

// Use the .match() property
// Ex: let match = text.match(/a/gi). length 
// This returns the number of times the letter 'a' appears in the string 'text'

