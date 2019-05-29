function noSpace(x){
  for(let i = 0; i < x.length; i++)
  {
    x = x.replace(" ", "");
  }
  return x
}
noSpace("asfd fdf")

// Another Solution:

// function noSpace(x){
//   return x.replace(/\s/g, '');
// }