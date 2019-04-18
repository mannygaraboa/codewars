// Sum Numbers
function sum (numbers) {
  "use strict";
  
  if(numbers.length == 0)
  {
    return 0;
  }
  
  var sum = 0;
  for(let i = 0; i < numbers.length; i++)
  {
    sum = sum + numbers[i];
  }

  console.log(sum)
  return sum;
};
sum([4, 32, 10]);