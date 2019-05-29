function isPrime(num) {
  var bool = true;
  if(num <= 1)
  {
    bool = false;
    return bool;
  }

  for(let i = 2; i < num; i++)
  {
    if(num % i == 0)
    {
      bool = false;
    }
  }
  return bool;
}
isPrime(5)