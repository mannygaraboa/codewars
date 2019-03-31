var countSquares = function(cuts){
  if(cuts == 0)
  {
      return 1;
  }

  let totalSquares = cuts + 1;
  let totalSquaresCubed = Math.pow(totalSquares, 3);
  let x = cuts - 1;
  let y = Math.pow(x, 3);
  let paintedSquares = (totalSquaresCubed - y);

  return paintedSquares;
}