const form = document.getElementById("form");
const input = document.getElementById("input"); 
const todosUl = document.getElementById("todos");


Todo = [];

function lsSetItem() {
    let todoText = input.value;
    
    if (localStorage.length != 0){
        let Todo = localStorage.getItem('Todo');
        Todo = JSON.parse(Todo);
        Todo.push(todoText)
        localStorage.setItem('Todo', JSON.stringify(Todo));
    }else {
        Todo.push(todoText)
        localStorage.setItem('Todo', JSON.stringify(Todo));
    }
}


function lsGetItem(){
    const todoEl = document.createElement("li");
    Todo = JSON.parse(localStorage.getItem('Todo'));

    Todo.forEach(todo => {
        
        todoEl.innerText = todo;
        todosUl.appendChild(todoEl);



    });




    
}


// const todoStr = localStorage.getItem('Todo');
// Todos = JSON.parse(todoStr);

// for(let index = Todos.length; index > 0; index--) {
        
//     currentTodo = Todos[index-1]
//     todoEl.innerText = currentTodo;

//     todosUl.appendChild(todoEl);

//     input.value = "";
// }
// // todoEl.addEventListener("click", () => {
// //     todoEl.classList.toggle("completed");
// // })





