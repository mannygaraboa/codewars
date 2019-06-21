function toCamelCase(str){
  let arr = [];
  for(let i = 0; i < str.length; i++)
  {
    let currentChar = str.charAt(i);
    if(currentChar == "-" || currentChar == "_")
    {
      let nextChar = str.charAt(i+1).toUpperCase();
      arr.push(nextChar)
      i++;
      console.log(nextChar);
    }

    if(currentChar != "-" && currentChar != "_")
    {
      arr.push(currentChar)
    }
  }
  let finalString = arr.join("");
  console.log(finalString)
  return finalString;
}
toCamelCase("hello-world");

// Use .replace();

// Another Solution:

// function toCamelCase(str){
//   var regExp=/[-_]\w/ig;
//   return str.replace(regExp,function(match){
//         return match.charAt(1).toUpperCase();
//    });
// }