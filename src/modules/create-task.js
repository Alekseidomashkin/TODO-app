const inputElement = document.querySelector("[data-newTaskInput]");
export const createTask = function (tasks) {
  const id = crypto?.randomUUID() ?? Date.toString();
  const newTask = {
    id: id,
    title: inputElement.value,
    isCompleted: false,
  };
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
