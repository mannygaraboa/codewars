function tripledouble(num1, num2) {
  let bool1 = false;
  let bool2 = false;
  let string1 = num1.toString();
  let string2 = num2.toString();

  for(let i = 0; i < string1.length; i++)
  {
    let currentNum = string1.charAt(i);
    for(let j = i+1; j < i+2; j++)
    {
      let nextNum = string1.charAt(j);
      let nextNextNum = string1.charAt(j+1);
      if(currentNum == nextNum && currentNum == nextNextNum)
      {
        console.log(currentNum + " is the same # as: " + nextNum + " & " + nextNextNum)
        bool1 = true;
      }
    }
  }

  for(let i = 0; i < string2.length; i++)
  {
    let currentNum2 = string2.charAt(i);
    for(let j = i+1; j < i+2; j++)
    {
      let nextNum2 = string2.charAt(j);
      if(currentNum2 == nextNum2)
      {
        console.log(currentNum2 + " is the same # as: " + nextNum2)
        bool2 = true;
      }
    }
  }

  if((bool1 == true) && (bool2 == true))
  {
    return 1;
  }
  else
  {
    return 0;
  }
}
tripledouble(1233444967499,24504940694);