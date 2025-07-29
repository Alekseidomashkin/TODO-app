export const blockingButtons = function () {
  const deleteAllTasksButtonElement = document.querySelector(".delete-all-button");
  const deleteTaskButtonsElements = document.querySelectorAll('[data-task="delete-btn"]');
  const editButtonsElements = document.querySelectorAll('[data-task="edit-btn"]');
  editButtonsElements.forEach((btn) => {
    btn.setAttribute("disabled", "");
  });
  deleteTaskButtonsElements.forEach((btn) => {
    btn.setAttribute("disabled", "");
  });
  deleteAllTasksButtonElement.setAttribute("disabled", "");
};
