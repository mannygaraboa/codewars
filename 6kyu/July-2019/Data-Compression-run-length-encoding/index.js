function encode(input) {
  let arr = [];
  for(let i = 0; i < input.length; i++)
  {
    let currentChar = input.charAt(i);
    let upChar = currentChar.toUpperCase();
    let re = new RegExp(currentChar, 'gi')
    let match = input.match(re).length;
    let pairArr = [match, upChar]
    let pair = pairArr.join("")
    arr.push(pair)
  }
  console.log(arr);

  for(let i = 0; i < arr.length; i++)
  {
    for(let j = i; j < arr.length; j++)
    {
      if(arr[i] == arr[j+1])
      {
        console.log(arr[j+1] + " is getting spliced");
        arr.splice(j+1,1);
        console.log(arr);
      }
    }
  }
  console.log(arr)
  let finalString = arr.join("")
  return finalString;
}

function decode(input) {
  
}
encode("aabbcabccddaax")
// 2A2B1C1A1B2C2D2A1X

// let re = new RegExp(currentChar, 'gi')
// let match = text.match(re).length