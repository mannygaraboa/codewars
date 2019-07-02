function abbrevName(name){
  var string = name.split(" ")
  var firstName = string[0].toUpperCase();
  var lastName = string[1].toUpperCase();

  console.log(firstName + " " + lastName);
  return firstName.charAt(0) + "." + lastName.charAt(0)
}
abbrevName("billy bob")