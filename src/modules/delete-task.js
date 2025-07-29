export const deleteTask = function (tasks, taskId) {
  const index = tasks.findIndex((task) => task.id == taskId);
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
