const date = document.querySelector(".todoDate");
let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let fullDate = `${day}-${month}-${year}`;
date.textContent = fullDate;
//
//
const addContent = document.querySelector(".todoThirdContent");
const delBtn = document.querySelector(".todo-delete");
const addBtn = document.querySelector(".btn");
const item = document.querySelector(".todo-item");

addBtn.addEventListener("click", addToDo);
function addToDo() {
  const userInput = document.querySelector(".todoHere").value;
  if (userInput === "" || userInput === " " || userInput === "  ") {
    alert("please enter something");
  } else {
    addContent.innerHTML += `
    
          <div class="todo-item">
            <p class="todo-paragraph">${userInput}</p>
            <i class="fas fa-trash todo-delete"></i>
          </div>
    
    `;
  }
  userInput.value;
}
item.addEventListener("click", function (e) {
  if (e.target.classList.contains("todo-delete")) {
    e.target.parentElement.remove();
  }
});
