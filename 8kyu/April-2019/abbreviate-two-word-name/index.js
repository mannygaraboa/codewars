function abbrevName(name){
  var string = name.split(" ")
  var firstName = string[0].toUpperCase();
  var lastName = string[1].toUpperCase();

  return firstName.charAt(0) + "." + lastName.charAt(0)
}