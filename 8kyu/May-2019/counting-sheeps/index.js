function countSheeps(arrayOfSheep) {
  let sheepCount = 0;
  for(let i = 0; i < arrayOfSheep.length; i++)
  {
    if(arrayOfSheep[i] == true)
    {
      sheepCount++;
    }
  }
  return sheepCount;
}
countSheeps([true, true, true]);

// Shorter Solution:

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }