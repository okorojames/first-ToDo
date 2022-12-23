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
const userInput = document.querySelector(".todoHere").value;
addBtn.addEventListener("click", addToDo);
function addToDo() {
}
