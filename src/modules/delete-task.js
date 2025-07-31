import { saveToLocalStorage } from "./save-to-local-storage";

export const deleteTask = function (tasks, taskId) {
  const index = tasks.findIndex((task) => task.id == taskId);
  tasks.splice(index, 1);
  saveToLocalStorage(tasks);
};
