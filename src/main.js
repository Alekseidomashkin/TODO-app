import { createTaskItemHTML } from "./modules/create-task-Item";
import { createTask } from "./modules/create-task";
import { completeTask } from "./modules/complete-task";
import { deleteTask } from "./modules/delete-task";
import { prepareToEditTask } from "./modules/edit-task";
import { deleteAllTasks } from "./modules/delete-all-tasks";
import { renderTasks } from "./modules/render-tasks";

const deleteAllButtonElement = document.querySelector(".delete-all-button");
const formCreateTaskElement = document.querySelector("[data-form]");
const inputCreateTaskElement = document.querySelector("[data-newTaskInput]");
const formEditTaskElement = document.querySelector('[data-action="editTask"]');
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
  const newTaskText = inputCreateTaskElement.value.trim();
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
  deleteAllTasks(tasks);
});
