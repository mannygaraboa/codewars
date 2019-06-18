function generateShape(int){
  let row = "";
  let shape = "";
  for(let i = 0; i < int; i++)
  {
    row += "+";
  }
  for(let i = 0; i < int; i++)
  {
    if(i == int - 1)
    {
      shape += row;
    }
    else 
    {
      shape += (row + "\n");
    }
  }
  console.log(shape);
  return shape;
}
generateShape(3);

// Shorter Solution:

// function generateShape(n){
//   return ("+".repeat(n)+"\n").repeat(n).trim()
// }