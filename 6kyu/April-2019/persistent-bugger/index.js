function persistence(num) 
{
  let numString = num.toString();
  let splitString = numString.split("");
  var sum = 1;
  var total = 0;
  var grandTotal = 0;

  if(splitString.length == 1)
  {
    console.log(splitString)
    console.log(sum);
    return grandTotal;
  }

  while(total < splitString.length)
  {
    for(let i = 0; i < splitString.length; i++)
    {
      sum = sum * splitString[i];
      total++;
    }
    console.log(splitString)
    console.log(sum);
    newNum = sum;
    let newNumString = newNum.toString();
    let newSplitString = newNumString.split("");
    grandTotal++;
  }
  return total;
}
persistence(452)