// Select elements from the DOM
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to Add a Task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a list item
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <div class="task-buttons">
      <button class="up-btn">⬆️</button>
      <button class="down-btn">⬇️</button>
      <button class="remove-btn">🗑️</button>
    </div>
  `;

  // Add event listener for Remove button
  taskItem.querySelector('.remove-btn').addEventListener('click', () => {
    taskItem.remove();
  });

  // Add event listener for Up button
  taskItem.querySelector('.up-btn').addEventListener('click', () => moveTask(taskItem, 'up'));

  // Add event listener for Down button
  taskItem.querySelector('.down-btn').addEventListener('click', () => moveTask(taskItem, 'down'));

  // Append to the task list
  taskList.appendChild(taskItem);

  // Clear the input
  taskInput.value = '';
}

// Function to Move Task Up or Down
function moveTask(taskItem, direction) {
  if (direction === 'up' && taskItem.previousElementSibling) {
    taskList.insertBefore(taskItem, taskItem.previousElementSibling);
  } else if (direction === 'down' && taskItem.nextElementSibling) {
    taskList.insertBefore(taskItem.nextElementSibling, taskItem);
  }
}

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
