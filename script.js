const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Load saved todos from localStorage
window.onload = () => {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodos.forEach(todo => createTodoItem(todo));
};

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") return;
  createTodoItem(todoText);
  saveTodo(todoText);
  todoInput.value = "";
}

function createTodoItem(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    todoList.removeChild(li);
    removeTodo(text);
  };

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

function saveTodo(text) {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(text);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodo(text) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter(todo => todo !== text);
  localStorage.setItem("todos", JSON.stringify(todos));
}
