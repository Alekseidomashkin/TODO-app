import { selectors } from "./selectors";
export const blockingButtons = function () {
  const deleteAllTasksButtonElement = document.querySelector(selectors.deleteAll);
  const deleteTaskButtonsElements = document.querySelectorAll(selectors.deleteButtons);
  const editButtonsElements = document.querySelectorAll(selectors.editButtons);
  editButtonsElements.forEach((btn) => {
    btn.setAttribute("disabled", "");
  });
  deleteTaskButtonsElements.forEach((btn) => {
    btn.setAttribute("disabled", "");
  });
  deleteAllTasksButtonElement.setAttribute("disabled", "");
};
