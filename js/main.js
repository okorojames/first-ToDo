const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const toDoContents = document.querySelector(".todo-contents");
const delBtn = document.querySelectorAll(".delete-btn");
// console.log(toDoContents.children);

// console.log(input, btn);

btn.addEventListener("click", addTodo);
function addTodo() {
  const inputValue = input.value;
  // console.log(inputValue);
  if (input.value === "") {
    document.querySelector(".error").textContent = `please enter a todo`;
    setTimeout(function () {
      document.querySelector(".error").textContent = ``;
    }, 5000);
  } else {
    toDoContents.innerHTML += `
  
  <div class="first-todo-content todo-second-flex-items">
              <p class="todo-paragraph">${inputValue}</p>
              <i class="fa-solid fa-trash delete-btn"></i>
            </div>

  `;
    input.value = ``;
  }
}

toDoContents.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.classList.contains("delete-btn")) {
    // console.log("hello");
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }
});

console.log(delBtn);
delBtn.forEach((del) => {});
