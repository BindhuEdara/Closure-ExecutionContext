var age = 20;
function displayAge() {
  console.log(age);
}

function changeAge() {
  age = 30;
  console.log(age);
}

displayAge();
changeAge();
displayAge(); ///showing updated global variable
