var whatTimeIsIt = function(angle) {
  let hour = 00;
  let minute = 00;
  let difference = 360 - angle;
  let newMinute = angle / 30;
  console.log(difference);
  console.log(newMinute);
  if(angle <= 29.9)
  {
    hour = 12;
    for(let i = 0; i < angle; i+=0.5)
    {
      minute += 1;
    }
  }

  if(angle >= 30)
  {
    for(let i = 0; i < angle; i+=30)
    {
      hour += 1;
    }

    for(let i = 0; i < newMinute; i++)
    {
      minute += 1;
    }
  }

  return hour + ":" + minute;
}
whatTimeIsIt(301);