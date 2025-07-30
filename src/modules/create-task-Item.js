export const createTaskItemHTML = function (element) {
  return `
    <li class="task ${element.isCompleted ? "task--completed" : ""}" data-id="${
    element.id
  }" data-task="item">
      <div class="task-text">${element.title}</div>
      <div class="task-actions">

        <button class="button-edit button" data-taskbutton data-task="edit-btn">
        <img src="https://img.icons8.com/?size=100&id=15049&format=png&color=FFFFFF" data-task="edit-btn" alt="" /></button>
        <button class="button-complete button" data-taskbutton data-task="check-btn">&#10004;</button>
        <button class="button-delete button" data-taskbutton data-task="delete-btn">&#10006;</button>
      </div>
    </li>
  `;
};
