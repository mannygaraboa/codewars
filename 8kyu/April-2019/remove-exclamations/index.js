// function remove(s,n){
//     for(i = 0; i < n.length; i++)
//     {
//       if(s.charAt[i] == "!")
//       {
//         s = s.replace('/!','/');
//         return s;
//       }
//     }
//   }
  remove("Hi!", 1)

  function remove(s,n){
    for(let i = 0; i < n; i++)
    {
      if(s.charAt[i] = "!")
      {
        s = s.substr(i, i) + "" + s.substr(i + 1);
        return s;
      }
    }
  }
  remove("Hi", 3)