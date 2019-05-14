var orderedCount = function (text) {
  let finalArr = [];
  for(let i = 0; i < text.length; i++)
  {
    let currentChar = text.charAt(i);
    let nextChar = text.charAt(i + 1);
    let charCount = 0;
    var arr = [currentChar , charCount];
    
    if(currentChar != nextChar)
    {
      charCount++;
    }
    finalArr.push(arr)
  }
  return finalArr;
}
orderedCount("abcabc")

