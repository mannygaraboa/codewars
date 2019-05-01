function remove(s,n){
    for(i = 0; i < n.length; i++)
    {
      if(s.charAt[i] == "!")
      {
        s = s.replace('/!','/');
        return s;
      }
    }
  }
  remove("Hi!", 1)