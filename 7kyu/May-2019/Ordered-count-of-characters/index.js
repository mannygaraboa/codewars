var orderedCount = function (text) {
  let firstArr = [];
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
      firstArr.push(arr);
    }
  }

  finalArr.push(firstArr[0]);

  for(let i = 0; i < firstArr.length; i++)
  {
    let result = true;
    for(let j = 0; j < finalArr.length; j++)
    {
      if((firstArr[i])[0] == (finalArr[j][0]))
      {
        result = false;
      }
    }

    if(result == true)
    {
      finalArr.push(firstArr[i]);
    }
  }
  return finalArr;
}
orderedCount("abracadabra")
// Given the text it should return the letters "abrcd"


// console.log((finalArr[2])[0]);
// This shows the first element in the third index of finalArr.

// document.write(string.match(/a/gi).length);

// Use the .match() property
// Ex: let match = text.match(/a/gi). length 
// This returns the number of times the letter 'a' appears in the string 'text'

// Shorter Solution:
// const orderedCount = s =>
//   Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));

