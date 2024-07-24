document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Function to add a new task
    function addTask() {
      const taskText = taskInput.value.trim();
  
      // Check if the task input is not empty
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      // Create a new list item for the task
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;
  
      // Create a remove button for the task
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
      removeButton.onclick = function() {
        taskList.removeChild(taskItem);
      };
  
      // Append the remove button to the task item and the task item to the task list
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);
  
      // Clear the task input field
      taskInput.value = '';
    }
  
    // Add event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Invoke the addTask function when the page loads
    addTask();
  });