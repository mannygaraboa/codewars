function isPrime(num) {
  if(num < 0)
  {
    return false;
  }
  
  var bool = true;
  for(let i = 0; i < num; i++)
  {
    // while(bool = true)
    // {
      if(num % i == 0)
      {
        // bool = false;
        console.log(i + ":" + bool)
      }
    // }
  }
  return bool;
}
isPrime()