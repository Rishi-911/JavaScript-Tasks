let count = 0;

let btnClick = document.querySelector(".btn");
let counter = document.querySelector(".counter");
btnClick.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
