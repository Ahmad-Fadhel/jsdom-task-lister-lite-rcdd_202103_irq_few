document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let todoLi = document.createElement("li");
  let tasks = document.getElementById("tasks");
  let todoSubmit = document.getElementById("submit");
  let TodoInput = document.getElementById("new-task-description");
  todoLi.innerHTML = TodoInput.value;
  tasks.append(todoLi);
});
