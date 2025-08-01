import { selectors } from "./selectors";
export const adaptive = function () {
  const formEditTaskButtonElement = document.querySelector(selectors.formEditButton);
  const formCreateTaskButtonElement = document.querySelector(selectors.formCreateButton);
  const deleteAllTasksButtonElement = document.querySelector(selectors.deleteAll);
  const screenWidth = window.innerWidth;
  if (screenWidth < 515) {
    deleteAllTasksButtonElement.innerText = "Удалить";
  }
  if (screenWidth < 490) {
    formCreateTaskButtonElement.innerText = "+";
    formEditTaskButtonElement.innerText = "+";
  }
  if (screenWidth < 471) {
    deleteAllTasksButtonElement.innerText = "-";
  }
};
