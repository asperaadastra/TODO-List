const form = document.getElementById("form");
const input = document.getElementById("input"); 
const todosUl = document.getElementById("todos");

function addTodo() {
    let todoText = input.value;

    
    todoText = todoText.text;
    
    
    

    const todoEl = document.createElement("li");



   
    const textnode = document.createTextNode(todoText);
    //todoEl.innerText = todoText;
    
    todosUl.appendChild(textnode);
    
    input.value = "";
}