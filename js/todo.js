const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDO(event){
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // event.target ==> button
    saveToDos();
}

function paintToDo(newTodo){
    // console.log("I will paint", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDO);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleTodoSubmit(e){
    e.preventDefault();
    // console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // Array
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // paintToDo 배열의 요소마다 실행
}
