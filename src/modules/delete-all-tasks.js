export const deleteAllTasks = function () {
  document.querySelector(".tasks").innerHTML = "";
  localStorage.removeItem("tasks");
};
