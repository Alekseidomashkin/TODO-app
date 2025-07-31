export const saveToLocalStorage = function (tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
