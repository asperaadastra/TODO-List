const form = document.getElementById("form");
const input = document.getElementById("input"); 
const todosUl = document.getElementById("todos");

function addTodo() {
    let todoText = input.value;

    
    todoText = todoText.text;
    
    console.log(todoText);
    
    const todoEl = document.createElement("li");
    
    todoEl.innerText = todoText;
    
    todosUl.appendChild(todoEl);
    
    input.value = "";
}