import { saveToLocalStorage } from "./save-to-local-storage";
import { selectors } from "./selectors";
import { blockingButtons } from "./blocking-buttons";
import { discloseButtons } from "./disclose-button";
export const prepareToEditTask = function (currentTaskId, tasks, currentTaskElement) {
  const formCreateTaskElement = document.querySelector(selectors.formCreate);
  const formEditTaskElement = document.querySelector(selectors.formEdit);
  const inputEditTaskElement = document.querySelector(selectors.inputEdit);

  inputEditTaskElement.value = currentTaskElement.innerText;
  inputEditTaskElement.focus();
  blockingButtons();
  const editTask = (event) => {
    event.preventDefault();
    const editTaskText = inputEditTaskElement.value.trim();
    if (editTaskText.length === 0) {
      inputEditTaskElement.value = "";
      return;
    }

    currentTaskElement.innerText = editTaskText;
    inputEditTaskElement.value = "";

    tasks.find((task) => task.id == currentTaskId).title = currentTaskElement.innerText;
    saveToLocalStorage(tasks);

    formCreateTaskElement.classList.remove("hidden");
    formEditTaskElement.classList.add("hidden");
    discloseButtons();
    formEditTaskElement.removeEventListener("submit", editTask);
  };
  formEditTaskElement.addEventListener("submit", editTask);
};
