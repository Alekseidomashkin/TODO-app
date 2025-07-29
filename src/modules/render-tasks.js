export const renderTasks = function (tasks) {
  const taskList = document.querySelector("[data-taskList]");
  for (let counter = 0; counter + 1 <= tasks.length; counter++) {
    console.log(tasks[counter]);
    taskList.innerHTML =
      `
    <li class="task ${tasks[counter].isCompleted ? "task--completed" : ""}" data-id="${
        tasks[counter].id
      }" data-task="item">
      <div class="task-text">${tasks[counter].title}</div>
      <div class="task-actions">
        <button class="button-edit button" data-taskbutton data-task="edit-btn">&#128393;</button>
        <button class="button-complete button" data-taskbutton data-task="check-btn">&#10004;</button>
        <button class="button-delete button" data-taskbutton data-task="delete-btn">&#10006;</button>
      </div>
    </li>
  ` + taskList.innerHTML;
  }
};
