let rand = Math.floor(Math.random() * 100) + 1;
let count = 0;

while (true) {
  let num = parseInt(prompt("Enter the guess between (1-100)"));
  
  if((num<1) || (num>100) || isNaN(num)){
    console.log("Please enter the valid number.")
    continue;
  }

  count++;

  if (num === rand) {
    alert(`You guessed the number in ${count} attempts`);
    break;
  } else if (num > rand) {
    alert("Too big!!!.");
  } else {
    alert("Too smalll!.");
  }
}
