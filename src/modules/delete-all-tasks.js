import { selectors } from "./selectors";
export const deleteAllTasks = function (tasks) {
  document.querySelector(selectors.taskList).innerHTML = "";
  localStorage.removeItem("tasks");
  tasks.length = 0; //Очищение
};
