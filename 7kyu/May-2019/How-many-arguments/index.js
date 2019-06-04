function args_count()
{ 
  let arr_count = 0;
  for(var i = 0; i < arguments.length; i++)
  {
    arr_count++;
  }
  return arr_count;
}
args_count(5,4,2,5,3,3)

// There's a weird "magic" variable you can reference called "arguments":

// It's like an array, but it's not an array. In fact it's so weird that you really shouldn't use it much at all. A common practice is to get the values of it into a real array:

// Shorter Solution:
// function args_count() {
//   return arguments.length;
// }