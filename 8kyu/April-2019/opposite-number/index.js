function opposite(number) 
{
  let newNumber = number
  if(number > 0)
  {
    newNumber = -Math.abs(number);
  }
  else if(number < 0)
  {
    newNumber = Math.abs(number);
  }
  return newNumber;
}

opposite();