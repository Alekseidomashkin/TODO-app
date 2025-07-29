export const completeTask = function (tasks, taskId) {
  const index = tasks.findIndex((task) => task.id == taskId);
  tasks[index].isCompleted = !tasks[index].isCompleted;
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
