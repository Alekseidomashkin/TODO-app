import { selectors } from "./selectors";
import { completeTask } from "./complete-task";
import { deleteTask } from "./delete-task";
import { prepareToEditTask } from "./edit-task";
export const changeMovesAfterClickTaskList = function (event, tasks) {
  const formCreateTaskElement = document.querySelector(selectors.formCreate);
  const formEditTaskElement = document.querySelector(selectors.formEdit);
  const currentTaskElement = event.target.closest(selectors.currentTask);
  const currentTaskText = currentTaskElement.querySelector(selectors.currentTaskText);
  const currentTaskId = currentTaskElement.dataset.id;
  const datasetValue = event.target.dataset.task;
  if (!currentTaskElement) {
    return;
  }
  switch (datasetValue) {
    case "complete-btn":
      completeTask(tasks, currentTaskId);
      currentTaskElement.classList.toggle("task--completed");
      break;
    case "delete-btn":
      deleteTask(tasks, currentTaskId);
      currentTaskElement.remove();
      break;
    case "edit-btn":
      formCreateTaskElement.classList.add("hidden");
      formEditTaskElement.classList.remove("hidden");
      prepareToEditTask(currentTaskId, tasks, currentTaskText);
      break;
  }
};
