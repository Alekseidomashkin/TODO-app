import { blockingButtons } from "./blocking-buttons";
import { discloseButtons } from "./disclose-button";
export const prepareToEditTask = function (currentTaskId, tasks, currentTaskElement) {
  const formCreateTaskElement = document.querySelector("[data-form]");
  const formEditTaskElement = document.querySelector('[data-action="editTask"]');
  const inputEditTaskElement = document.querySelector("[data-editTaskInput]");

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
    localStorage.setItem("tasks", JSON.stringify(tasks));

    formCreateTaskElement.classList.remove("hidden");
    formEditTaskElement.classList.add("hidden");
    discloseButtons();
    formEditTaskElement.removeEventListener("submit", editTask);
  };
  formEditTaskElement.addEventListener("submit", editTask);
};
