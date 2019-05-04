function remove(s,n)
{
    let finalString = "";
    let nCounter = 0;
    for(let i = 0; i < s.length; i++)
    {
      var currentChar = s.charAt(i);
      if(nCounter < n)
      {
        if(currentChar !== "!")
        {
          finalString += currentChar;
          console.log(finalString);
        }
        else if(currentChar == "!")
        {
          nCounter++;
        }
      }
      else
      {
        finalString += currentChar;
      }
    }
    console.log(nCounter);
    return finalString;
  }
  remove("!!!Hi!!!!", 5)

// Shorter Solution:

//   function remove(s,n){
//     for (var i=0;i<n;i++) s=s.replace("!","");
//     return s;
//   }