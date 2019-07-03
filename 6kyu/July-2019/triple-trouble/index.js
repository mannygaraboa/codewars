function tripledouble(num1, num2) {
  let key1 = false;
  let key2 = false;
  let key3 = false;
  let arr1 = [];
  let arr2 = [];
  let string1 = num1.toString();
  let string2 = num2.toString();

  // Checking num1 for triples
  for(let i = 0; i < string1.length; i++)
  {
    let currentNum = string1.charAt(i);
    for(let j = i+1; j < i+2; j++)
    {
      let nextNum = string1.charAt(j);
      let nextNextNum = string1.charAt(j+1);
      if(currentNum == nextNum && currentNum == nextNextNum)
      {
        console.log(currentNum + " is the same # as: " + nextNum + " & " + nextNextNum);
        arr1.push(currentNum);
        key1 = true;
      }
    }
  }

  // Checking num2 for doubles
  for(let i = 0; i < string2.length; i++)
  {
    let currentNum2 = string2.charAt(i);
    for(let j = i+1; j < i+2; j++)
    {
      let nextNum2 = string2.charAt(j);
      if(currentNum2 == nextNum2)
      {
        console.log(currentNum2 + " is the same # as: " + nextNum2);
        arr2.push(currentNum2)
        key2 = true;
      }
    }
  }

  console.log("First Array: " + arr1);
  console.log("Second Array: " + arr2);

  // Checking if num1 & num2 might have same number in their respective arrays
  for(let i = 0; i < arr1.length; i++)
  {
    let arrNum1 = arr1[i];
    for(let j = 0; j < arr2.length; j++)
    {
      let arrNum2 = arr2[j];
      if(arrNum1 == arrNum2)
      {
        console.log("num1 has a " + arrNum1);
        console.log("num2 has a " + arrNum2);
        key3 = true;
      }
      else
      {
        console.log("No same triple doubles");
      }
    }
  }

  // Final Key check to unlock return
  if((key1 == true) && (key2 == true) && (key3 == true))
  {
    return 1;
  }
  else
  {
    return 0;
  }
}
tripledouble(1233344496777499,245504499400694);

// Another Solution:

// function tripledouble(num1, num2) {
//   for (let i = 0; i < 10; i++) {
//     if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
//       return 1;
//     }
//   }
//   return 0;
// }