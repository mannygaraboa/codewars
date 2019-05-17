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
  // console.log((finalArr[2])[0])
  return finalArr;
}
orderedCount("abracadabra")

// document.write(string.match(/a/gi).length);

// Use the .match() property
// Ex: let match = text.match(/a/gi). length 
// This returns the number of times the letter 'a' appears in the string 'text'

