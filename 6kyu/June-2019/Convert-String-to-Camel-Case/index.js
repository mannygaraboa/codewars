function toCamelCase(str){
  for(let i = 0; i < str.length; i++)
  {
    let currentChar = str.charAt(i);
    if(currentChar == "-" || currentChar == "_")
    {
      console.log(currentChar)
      let newString = str.slice(i, i+1);
      console.log(newString);
    } 
  }
  return str;
}
toCamelCase("hello-world");