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
  while(splitString.length > 1)
  {
    for(i = 0; i < splitString.length; i++)
    {
      sum = sum * splitString[i];
    }
    grandTotal++;
  }
  console.log(splitString)
  console.log(sum);
  return grandTotal;
}

persistence(num)