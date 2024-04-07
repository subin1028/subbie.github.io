todoForm = document.querySelector("#todo-form");
todoInput = document.querySelector("#todo-form input");
todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function addTodo(event){
    event.preventDefault();
    const todoval = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: todoval,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    showTodo(newTodoObj);
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveToDos();
}

function showTodo(todoval){
    const li = document.createElement("li");
    li.id = todoval.id;
    const span = document.createElement("span");
    span.innerText = todoval.text;
    const button = document.createElement("button");
    button.className = "todo-complete"
    button.innerText = "✕";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

todoForm.addEventListener("submit", addTodo);

const todo = localStorage.getItem(TODOS_KEY);
console.log(todo);

if(todo){
    const parsedTodos = JSON.parse(todo);
    toDos = parsedTodos;
    parsedTodos.forEach(showTodo);
}