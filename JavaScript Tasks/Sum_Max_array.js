// printing the maximum element
let arr = [23, 4, 5, 32, 6, 87];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Maximum element is " + max);

let sum = 0;

for(let i = 0; i< arr.length; i++){
    sum += arr[i]
}

console.log("Sum of the elements of the array is " + sum)
