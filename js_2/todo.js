const todoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('input');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  // console.log('i will paint', newTodo);
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  const button = document.createElement('button');
  button.innerText = 'X';
  button.addEventListener('click', (event) => {
    const li = event.target.parentNode;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); // = return todo.id !== parseInt(li.id);
    saveToDos();
  });
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  // console.log(li);
  toDoList.appendChild(li);
}

todoForm.addEventListener('submit', (event) => {
  // console.log(event);
  event.preventDefault();
  // console.log(todoInput.value);
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
});

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // console.log(toDos);
  parsedToDos.forEach(paintToDo);
}
