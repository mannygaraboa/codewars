// Encode the string inputted
function encode(input) {
  let arr = [];
  let upCaseInput = input.toUpperCase();
  for(let i = 0; i < input.length; i++)
  {
    let currentChar = upCaseInput.charAt(i);
    let charCount = 1;
    while(currentChar == upCaseInput.charAt(i+1))
    { 
      if(currentChar == upCaseInput.charAt(i+1))
      {
        charCount++;
        i++;
      }
    }
    let pairArr = [charCount, currentChar]
    let pair = pairArr.join("")
    arr.push(pair)
  }
  console.log(arr);

  let finalString = arr.join("")
  return finalString;
}

// Decode the string inputted
function decode(input) {
  let decodeArr = [];
  let inputArr = [];
  let newNumArr = [];
  let upCaseInput = input.toUpperCase();

  // Split all characters in input into an array
  for(let i = 0; i < input.length; i++)
  {
    let currentChar = upCaseInput.charAt(i);
    let nextChar = upCaseInput.charAt(i+1);
    inputArr.push(currentChar);
  }

  // For numbers that are double digits or higher
  for(let i = 0; i < inputArr.length; i++)
  {
    let newNum = inputArr[i];
    if(newNum >= 0)
    {
      if(inputArr[i+1] >= 0)
      {
        while(inputArr[i+1] >= 0)
        {
          newNum = newNum.concat(inputArr[i+1]);
          i++;
          if(inputArr[i+1].match(/[a-z]/i))
          {
            // console.log("Pushing " + newNum + " into newNumArr")
            newNumArr.push(newNum);
            break;
          }
        }
      }
      else
      {
        newNumArr.push(newNum);
      }
    }
    else
    {
      newNumArr.push(inputArr[i]);
    }
  }
    
  // Actual decoding
  for(let i = 0; i < newNumArr.length; i++)
  {
    let currentChar = newNumArr[i];
    let nextChar = newNumArr[i+1];
    if(currentChar >= 1)
    {
      for(let j = 0; j < currentChar; j++)
      {
        decodeArr.push(nextChar);
      }
    }
  }

  let finalString = decodeArr.join("");
  // console.log(inputArr);
  console.log(newNumArr);
  return finalString;
}
// encode("aaaaaaaaaaaabbcaabbxx");
decode("10j20b12z2D");

// Previous Method:
  // let re = new RegExp(currentChar, 'gi')
  // let match = text.match(re).length

// Previous Method for numbers that are double digits or higher:
  // if(inputArr[i] >= 0 && inputArr[i+1] >= 0)
  // {
  //   let newNum = inputArr[i].concat(inputArr[i+1]);
  //   console.log(newNum);
  //   newNumArr.push(newNum);
  //   i++;
  // }
  // else
  // {
  //   newNumArr.push(inputArr[i]);
  // }

// Shorter Solution:
  // function encode(input) {
  //   return input.replace(/(.)\1*/g, (match, p1) => match.length + p1);
  // }

  // function decode(input) {
  //   return input.replace(/(\d+)(.)+?/g, (_, p1, p2) => p2.repeat(p1));
  // }
