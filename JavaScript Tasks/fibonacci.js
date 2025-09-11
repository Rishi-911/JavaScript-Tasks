// printing the fibonacci

function fibonacci(n) {
  if (n === 0) return 0;

  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
let n = parseInt(prompt("Enter the value of n"));
if (isNaN(n)) {
  alert("Please enter the valid number");
} else {
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
}


const person = {
  firstName:"Rishi",
  lastName:"Shringi"
}

let p1 = person;
p1.firstName("Tanu")
console.log(p1)
