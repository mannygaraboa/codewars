function swap(st){
  for (var i = 0; i < st.length; i++) {
  
  console.log(st.charAt(i));
    
    if(
    st.charAt(i) == "a" ||
    st.charAt(i) == "e" ||
    st.charAt(i) == "i" ||
    st.charAt(i) == "o" ||
    st.charAt(i) == "u" 
    )
    {
      let capitalVowel = st.charAt[i].toUpperCase();
      return capitalVowel;
    }
    else
    {
      return capitalVowel;
    }
  }
  return capitalVowel;// st with uppercased vowels 
}