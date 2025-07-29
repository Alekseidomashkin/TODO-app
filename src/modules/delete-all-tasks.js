export const deleteAllTasks = function (tasks) {
  tasks = [];
  document.querySelector(".tasks").innerHTML = "";
  localStorage.removeItem("tasks");
};
