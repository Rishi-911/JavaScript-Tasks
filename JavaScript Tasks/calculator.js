let num1 = parseFloat(prompt("Enter the number 1"));
let operator = prompt("Enter the operator: (+ - * /)");
let num2 = parseFloat(prompt("Enter the number 2"));
let result;

if (isNaN(num1) || isNaN(num2)) {
  alert("Please enter the valid number");
} else {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      if (num2 === 0) {
        alert("Denominator cannot be 0");   
      } else {
        result =  num1 / num2;
      }
      break;
    default:
      alert("Please enter the operator");
  }
  alert("The result is "+ result)
}
