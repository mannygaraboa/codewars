function swap(st){
  let finalString = "";
  for (let i = 0; i < st.length; i++) 
  {
    let currentLetter = st.charAt(i);
    let capitalVowel = currentLetter.toUpperCase();
    
    if(
    st.charAt(i) == "a" ||
    st.charAt(i) == "e" ||
    st.charAt(i) == "i" ||
    st.charAt(i) == "o" ||
    st.charAt(i) == "u" 
    )
    {
      finalString += capitalVowel;
    }
    else
    {
      finalString += currentLetter;
    }
  }
  return finalString;
}
swap("hello")

// Shorter Solution:

// function swap(st){
//   return st.replace(/[aeiou]/g, v => v.toUpperCase() )
// }//z.