import { selectors } from "./modules/selectors";
import { createTaskItemHTML } from "./modules/create-task-Item";
import { createTask } from "./modules/create-task";
import { deleteAllTasks } from "./modules/delete-all-tasks";
import { renderTasks } from "./modules/render-tasks";
import { changeButtonsText } from "./modules/change-buttons-text";
import { changeMovesAfterClickTaskList } from "./modules/change-moves-after-click-taskList";

const formCreateTaskElement = document.querySelector(selectors.formCreate);
const inputCreateTaskElement = document.querySelector(selectors.inputCreate);
const deleteAllTasksButtonElement = document.querySelector(selectors.deleteAll);
const taskListElement = document.querySelector(selectors.taskList);

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
  taskListElement.insertAdjacentHTML("afterbegin", createTaskItemHTML(lastTask));
});

taskListElement.addEventListener("click", (event) => {
  changeMovesAfterClickTaskList(event, tasks);
});

deleteAllTasksButtonElement.addEventListener("click", () => {
  deleteAllTasks(tasks);
});

window.addEventListener("load", changeButtonsText);
window.addEventListener("resize", changeButtonsText);
