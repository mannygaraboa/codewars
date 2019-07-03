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

  // For double digit numbers
  for(let i = 0; i < input.length; i++)
  {
    if(inputArr[i] >= 0 && inputArr[i+1] >= 0)
    {
      let newNum = inputArr[i].concat(inputArr[i+1]);
      console.log(newNum);
      newNumArr.push(newNum);
      i++;
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
  console.log(inputArr);
  console.log(newNumArr);
  return finalString;
}
encode("aaaaaaaaaaaabbcaabbxx");    // Returns '12A2B1C2A2B2X'
decode("10j4b12z2D");               // Returns 'JJJJJJJJJJBBBBZZZZZZZZZZZZDD'

// Previous Method:
// let re = new RegExp(currentChar, 'gi')
// let match = text.match(re).length