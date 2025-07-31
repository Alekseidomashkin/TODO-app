import { selectors } from "./selectors";
export const changeButtonsText = function () {
  const formEditTaskButtonElement = document.querySelector(selectors.formEdit);
  const formCreateTaskButtonElement = document.querySelector(selectors.formCreate);
  const deleteAllTasksButtonElement = document.querySelector(selectors.deleteAll);
  const screenWidth = window.innerWidth;
  if (screenWidth < 559) {
    deleteAllTasksButtonElement.innerText = "Удалить";
  }
  if (screenWidth < 528) {
    formCreateTaskButtonElement.innerText = "+";
    formEditTaskButtonElement.innerText = "+";
  }
  if (screenWidth < 425) {
    deleteAllTasksButtonElement.innerText = "-";
  }
};
