var orderedCount = function (text) {
  let finalArr = [];
  let charCount = 0;
  // let currentChar = text.charAt(i);
  // let nextChar = text.charAt(i + 1);
  for(let i = 0; i < text.length; i++)
  {
    let currentChar = text.charAt(i);
    let arr = [currentChar , charCount];
    for(let j = 0; j < text.length; j++)
    {
      let nextChar = text.charAt(j + 1);
      if(currentChar == nextChar)
      {
        charCount++;
        text = text.replace(nextChar, "")
      }
    }
    finalArr.push(arr)
  }
  return finalArr;
}
orderedCount("aaabbb")

// Use the .match() property
// Ex: let match = text.match(/a/gi). length 
// This returns the number of times the letter 'a' appears in the string 'text'

