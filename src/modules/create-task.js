import { saveToLocalStorage } from "./save-to-local-storage";
import { selectors } from "./selectors";
export const createTask = function (tasks) {
  const inputCreateTaskElement = document.querySelector(selectors.inputCreate);
  const idNewTask = crypto?.randomUUID() ?? Date.toString();
  const newTaskObj = {
    id: idNewTask,
    title: inputCreateTaskElement.value,
    isCompleted: false,
  };
  tasks.push(newTaskObj);
  saveToLocalStorage(tasks);
};
