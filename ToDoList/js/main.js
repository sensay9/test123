// SELECTORS

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");


// EVENT LISTENERS

todoButton.addEventListener('click', addTodo)

// FUNCTIONS

function addTodo(event){
  // Prevent FORM from Submitting
   event.preventDefault();
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');
 //Create Li
 const newTodo = document.createElement('li');
 newTodo.innerText = todoInput.value;
 newTodo.classList.add('todo-item');
 todoDiv.appendChild(newTodo);
 //Checkmark button
 const completedButton = document.createElement('button');
 completedButton.innerHTML = '<i class= "fas fa-check"></i>'
 completedButton.classList.add("complete-btn");
 todoDiv.appendChild(completedButton);
 //Trash button
 const trashButton = document.createElement('button');
 trashButton.innerHTML = '<i class= "fas fa-trash"></i>'
 trashButton.classList.add("trash-btn");
 todoDiv.appendChild(trashButton);
 //Append to List
 todoList.appendChild(todoDiv);
 //Clear todo input value
 todoInput.value = ""
}
