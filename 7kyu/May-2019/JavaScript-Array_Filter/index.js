function getEvenNumbers(numbersArray){
    if(numbersArray.length == 0)
    {
      return numbersArray;
    }
    else
    {
      for(let i = 0; i < numbersArray.length; i++)
      {
        if(numbersArray[i] % 2 !== 0)
        {
          numbersArray.splice(i,1)
          i--;
        }
      }
      return numbersArray;
    }
}
getEvenNumbers([1,15,44,7,9,7,9,7,955,2,2,4])

// Shorter Solution:

// function getEvenNumbers(numbersArray){
//     return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
// }