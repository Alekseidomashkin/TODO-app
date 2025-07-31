import { selectors } from "./selectors";
import { createTaskItemHTML } from "./create-task-Item";
export const renderTasks = function (tasks) {
  const taskListElement = document.querySelector(selectors.taskList);
  for (let counter = 0; counter + 1 <= tasks.length; counter++) {
    taskListElement.insertAdjacentHTML("afterbegin", createTaskItemHTML(tasks[counter]));
  }
};
