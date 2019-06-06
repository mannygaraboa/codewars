var whatTimeIsIt = function(angle) {
  let hour = 00;
  let minute = 00;
  if(angle <= 29.9)
  {
    hour = 12;
  }
  else
  {
    hour = 1;
  }
  if(angle >= 30)
  {

  }
  for(let i = 0; i < angle; i+=0.5)
  {
    minute += 1;
  }
 
  return hour + ":" + minute;
}
whatTimeIsIt(2);

// 12:01 = 0.5 degrees
// 12:02 = 1 degree

// 30 == 1
// 60 == 2
// 90 == 3
// 120 == 4
// 150 == 5
// 180 == 6
// 210 == 7
// 240 == 8
// 270 == 9
// 300 == 10
// 330 == 11
// 360 == 12