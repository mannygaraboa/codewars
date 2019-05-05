function triangle(row) {
  let newRow = "";
  for(var i = 0; i < row.length; i++)
  {
    var currentColor = row.charAt(i);
    var nextColor = row.charAt(i + 1);
    var colorPair = currentColor + nextColor;
  
    if(colorPair == "GB" || colorPair == "BG" || colorPair == "RR")
    {
      newRow += "R"
    }
    else if(colorPair == "RB" || colorPair == "BR" || colorPair == "GG")
    {
      newRow += "G"
    }
    else if(colorPair == "GR" || colorPair == "RG" || colorPair == "BB")
    {
      newRow += "B"
    }
  }
  return newRow;
}
triangle("BBRG");