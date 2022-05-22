const todoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('input');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const checkBtn = document.createElement('button');
  checkBtn.className = 'checkBtn';
  checkBtn.innerHTML = '<i class="fa-solid fa-circle"></i>';
  checkBtn.addEventListener('click', (event) => {
    let button = event.target;
    if (button.nodeName === 'I') button = event.target.parentNode;
    checkBtn.classList.toggle('complete');
    if (!newTodo.completed) newTodo.completed = true;
    else newTodo.completed = false;
    saveToDos();
  });
  if (newTodo.completed) checkBtn.classList.add('complete');
  const span = document.createElement('span');
  const button = document.createElement('button');
  button.className = 'deleteBtn';
  button.innerHTML = '<i class="fa-solid fa-trash"></i>';
  button.addEventListener('click', (event) => {
    let li = event.target.parentNode;
    if (event.target.parentNode.nodeName === 'BUTTON')
      li = event.target.parentNode.parentNode;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
  });

  li.appendChild(checkBtn);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
    completed: false,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
});

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); // json문자열의 구문을 분석하고 js값이나 객체를 생성
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
