function evenNumbers(array, number) {
  let finalArray = [];
  let numberCount = 0;
  for(let i = array.length - 1; i >= 0; i--)
  {
    if(numberCount < number && array[i] % 2 == 0)
    {
      finalArray.push(array[i]);
      numberCount++;
    }
  }
  finalArray.reverse();
  console.log(finalArray);
  return finalArray;
}
evenNumbers([1,4,6,23,55,332,49,22,54,66,234233],5)

// Shorter Solution

// const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);