function partsSums(ls) {
  let sumArray = [];
  let sum = 0;

  for(let i = 0; i < ls.length; i++)
  {
    sumArray.push(i);
  }
  
  for(let i = 0; i < ls.length; i++)
  {
    sum += ls[i];
    if(i = ls.length)
    {
      sumArray.push(sum);
    }
  }
  sumArray.push(sum);
  return sumArray;
}
partsSums([1,3,5])

// ls.shift();

// while(ls.length > 0)
// {
//   console.log(ls);
//   sumArray.push(ls);
//   ls.shift();
// }