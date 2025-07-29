export const discloseButtons = function () {
  const deleteAllTasksButtonElement = document.querySelector(".delete-all-button");
  const deleteTaskButtonsElements = document.querySelectorAll('[data-task="delete-btn"]');
  const editButtonsElements = document.querySelectorAll('[data-task="edit-btn"]');
  deleteTaskButtonsElements.forEach((btn) => {
    btn.removeAttribute("disabled");
  });
  editButtonsElements.forEach((btn) => {
    btn.removeAttribute("disabled");
  });
  deleteAllTasksButtonElement.removeAttribute("disabled");
};
