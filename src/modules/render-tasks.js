import { createTaskItemHTML } from "./create-task-Item";
export const renderTasks = function (tasks) {
  const taskList = document.querySelector("[data-taskList]");
  for (let counter = 0; counter + 1 <= tasks.length; counter++) {
    taskList.insertAdjacentHTML("afterbegin", createTaskItemHTML(tasks[counter]));
  }
};
