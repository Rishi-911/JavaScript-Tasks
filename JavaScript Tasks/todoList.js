let btn = document.querySelector(".add");
let placeholder = document.querySelector("#taskInput");
let counter = document.querySelector("#countText");
let clear = document.querySelector("#clearDone");
let count = 0;
const appendToDisplay = () => {
  let display = document.querySelector("#list");

  if (placeholder.value.trim() !== "") {
    let li = document.createElement("li");
    li.classList.add("list-div");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("check");

    let taskText = document.createElement("span");
    taskText.classList.add("text-placeholder");
    taskText.textContent = placeholder.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-button");

    deleteBtn.addEventListener("click", () => {
      li.remove();
      count--;
      counter.textContent = count;
    });

    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "gray";
      } else {
        taskText.style.textDecoration = "none";
        taskText.style.color = "white";
      }
    });

    li.appendChild(checkBox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    display.appendChild(li);

    placeholder.value = "";

    count++;
    counter.textContent = count;
  } else if (!placeholder.value) {
    alert("Please add the task first");
  }
};
btn.addEventListener("click", appendToDisplay);

placeholder.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    appendToDisplay();
  }
});

clear.addEventListener("click", () => {
  let tasks = document.querySelectorAll("#list li");
  tasks.forEach((li) => {
    let checkBox = li.querySelector(".check");
    if (checkBox && checkBox.checked) {
      li.remove();
      count--;
      counter.textContent = count;
    }
  });
});
