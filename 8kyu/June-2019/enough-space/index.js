function enough(cap, on, wait) {
  let total = on + wait;
  if(on + wait <= cap)
  {
    return 0;
  }
  else
  {
    return total - cap;
  }
}
enough(10, 5, 6);

// cap = # of people the bus can hold excluding driver
// on = # of people on the bus 
// wait = # of people waiting to get on bus


// Shorter Solution:
// function enough(cap, on, wait) {
//   return Math.max(wait + on - cap, 0);
// }