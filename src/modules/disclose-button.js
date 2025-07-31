import { selectors } from "./selectors";
export const discloseButtons = function () {
  const deleteAllTasksButtonElement = document.querySelector(selectors.deleteAll);
  const deleteTaskButtonsElements = document.querySelectorAll(selectors.deleteButtons);
  const editTaskButtonsElements = document.querySelectorAll(selectors.editButtons);
  deleteTaskButtonsElements.forEach((btn) => {
    btn.removeAttribute("disabled");
  });
  editTaskButtonsElements.forEach((btn) => {
    btn.removeAttribute("disabled");
  });
  deleteAllTasksButtonElement.removeAttribute("disabled");
};
