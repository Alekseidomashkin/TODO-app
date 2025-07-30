import { createTaskItemHTML } from "./modules/create-task-Item";
import { createTask } from "./modules/create-task";
import { completeTask } from "./modules/complete-task";
import { deleteTask } from "./modules/delete-task";
import { prepareToEditTask } from "./modules/edit-task";
import { deleteAllTasks } from "./modules/delete-all-tasks";
import { renderTasks } from "./modules/render-tasks";

const formCreateTaskElement = document.querySelector("[data-form]");
const inputCreateTaskElement = document.querySelector("[data-newTaskInput]");
const formEditTaskElement = document.querySelector('[data-action="editTask"]');
const deleteAllButtonElement = document.querySelector(".delete-all-button");
const formEditTaskButtonElement = formEditTaskElement.querySelector("button");
const formCreateTaskButtonElement = formCreateTaskElement.querySelector("button");
const taskList = document.querySelector("[data-taskList]");
let tasks;
if (!localStorage.getItem("tasks")) {
  tasks = [];
} else {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  renderTasks(tasks);
}

formCreateTaskElement.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputCreateTaskElement.value.trim().length === 0) {
    inputCreateTaskElement.value = "";
    return;
  }
  createTask(tasks);
  inputCreateTaskElement.value = "";
  const lastTask = tasks[tasks.length - 1];
  taskList.insertAdjacentHTML("afterbegin", createTaskItemHTML(lastTask));
});

taskList.addEventListener("click", (event) => {
  const currentTask = event.target.closest('li[data-task="item"]');
  const currentTaskId = currentTask.dataset.id;
  const currentTaskText = currentTask.querySelector(".task-text");
  const action = event.target.dataset.task;
  if (!currentTask) return;

  switch (action) {
    case "check-btn":
      completeTask(tasks, currentTaskId);
      currentTask.classList.toggle("task--completed");
      break;
    case "delete-btn":
      deleteTask(tasks, currentTaskId);
      currentTask.remove();
      break;
    case "edit-btn":
      formCreateTaskElement.classList.add("hidden");
      formEditTaskElement.classList.remove("hidden");
      prepareToEditTask(currentTaskId, tasks, currentTaskText);
      break;
  }
});

deleteAllButtonElement.addEventListener("click", () => {
  tasks = [];
  deleteAllTasks();
});

function changeButtonText() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 559) {
    deleteAllButtonElement.innerText = "Удалить";
  }
  if (screenWidth < 528) {
    formCreateTaskButtonElement.innerText = "+";
    formEditTaskButtonElement.innerText = "+";
  }
  if (screenWidth < 425) {
    deleteAllButtonElement.innerText = "-";
  }
}

window.addEventListener("load", changeButtonText);
window.addEventListener("resize", changeButtonText);
