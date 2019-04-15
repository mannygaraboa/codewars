function persistence(num) 
{
  let numString = num.toString();
  let splitString = numString.split("");
  var sum = 1;
  var grandTotal = 0;

  if(splitString.length == 1)
  {
    grandTotal = 0;
  }
  
  if(splitString.length > 1)
  {
    var grandSum = 10;
    
    while(grandSum > 9)
    {
      for(i = 0; i < splitString.length; i++)
      {
        grandSum = sum * splitString[i];
        grandTotal++;
      }
    }
    return grandTotal;
  }
  
  console.log(splitString)
  console.log(sum);
  return grandTotal;
}

persistence(num)