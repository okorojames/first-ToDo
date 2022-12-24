const date = document.querySelector(".todoDate");
const todaysDate = new Date();
let day = todaysDate.getDate();
let month = todaysDate.getMonth() + 1;
let year = todaysDate.getFullYear();
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
  let userInput = document.querySelector(".todoHere").value;
  if (userInput === "" || userInput === " " || userInput === "  ") {
    alert("please enter something");
  } else {
    addContent.innerHTML += `
    
          <div class="todo-item">
            <p class="todo-paragraph">${userInput}</p>
            <i class="fas fa-trash todo-delete"></i>
          </div>
    
    `;
    document.querySelector(".todoHere").value = "";
  }
}
addContent.addEventListener("click", function (e) {
  if (e.target.classList.contains("todo-delete")) {
    e.target.parentElement.remove();
  }
});
//
//
const user = {
  firstName: "James",
  lastName: "Chizaram",
  age: 18,
  address: "Onitsha",
};
const userData = localStorage.setItem("user", JSON.stringify(user));
const userData2 = JSON.parse(localStorage.getItem("user"));
console.log(userData2);
