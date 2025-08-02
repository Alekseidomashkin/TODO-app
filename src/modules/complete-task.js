import { saveToLocalStorage } from "./save-to-local-storage";

export const completeTask = function (tasks, taskId) {
  const index = tasks.findIndex((task) => task.id === taskId);
  tasks[index].isCompleted = !tasks[index].isCompleted;
  saveToLocalStorage(tasks);
};
