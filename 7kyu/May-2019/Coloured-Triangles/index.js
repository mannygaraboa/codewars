function triangle(row) 
{
  originalRowLength = row.length;
  for(let j = 0; j < originalRowLength; j++)
  {
    let newRow = "";
    if(row.length == 1)
    {
      return row;
    }
    else
    {
      for(var i = 0; i < row.length; i++)
      {
        var currentColor = row.charAt(i);
        var nextColor = row.charAt(i + 1);
        var colorPair = currentColor + nextColor;
        if(colorPair == "GB" || colorPair == "BG" || colorPair == "RR")
        {
          newRow += "R";
        }
        else if(colorPair == "RB" || colorPair == "BR" || colorPair == "GG")
        {
          newRow += "G";
        }
        else if(colorPair == "GR" || colorPair == "RG" || colorPair == "BB")
        {
          newRow += "B";
        }
      }
    }
    firstRow = newRow;
    row = newRow;
    triangle(row);
    console.log(row);
    return firstRow;
  }
}
triangle("GRBBRBBRGRGBRGG");

// Shortest Solution:

// const triangle = row => {
//   let reduced = row.length > 1 ? '' : row;
//   for (let i = 0; i < row.length - 1; i += 1) {
//     reduced += row[i] == row[i+1] ? row[i] : 'RGB'.replace(row[i], '').replace(row[i+1], '');
//   }
//   return reduced.length > 1 ? triangle(reduced) : reduced;
// }