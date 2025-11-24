var age = 20;
function displayAge() {
  console.log(age);
}

function changeAge() {
  age++;
  console.log(age);
}

displayAge();
changeAge();
displayAge(); ///showing updated global variable
