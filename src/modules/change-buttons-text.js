import { selectors } from "./selectors";
export const changeButtonsText = function () {
  const formEditTaskButtonElement = document.querySelector(selectors.formEditButton);
  const formCreateTaskButtonElement = document.querySelector(selectors.formCreateButton);
  const deleteAllTasksButtonElement = document.querySelector(selectors.deleteAll);
  console.log(
    formEditTaskButtonElement,
    formCreateTaskButtonElement,
    deleteAllTasksButtonElement
  );
  const screenWidth = window.innerWidth;
  if (screenWidth < 515) {
    deleteAllTasksButtonElement.innerText = "Удалить";
  } else {
    deleteAllTasksButtonElement.innerText = "Удалить все";
  }
  if (screenWidth < 490) {
    formCreateTaskButtonElement.innerText = "+";
    formEditTaskButtonElement.innerText = "+";
  } else {
    formCreateTaskButtonElement.innerText = "Добавить";
    formEditTaskButtonElement.innerText = "Изменить";
  }
  if (screenWidth < 471) {
    deleteAllTasksButtonElement.innerText = "-";
  }
};
