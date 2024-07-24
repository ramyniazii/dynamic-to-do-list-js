document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    // Load tasks from Local Storage
    loadTasks();
  
    // Add task functionality
    document.getElementById('addTaskButton').addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    // Load tasks from Local Storage
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(addTask);
    }
  
    // Add a new task
    function addTask(taskText, save = true) {
      const taskElement = document.createElement('li');
      const taskTextElement = document.createElement('span');
      taskTextElement.textContent = taskText;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        removeTask(taskElement);
      });
  
      taskElement.appendChild(taskTextElement);
      taskElement.appendChild(removeButton);
      taskList.appendChild(taskElement);
  
      if (save) {
        saveTasks();
      }
    }
  
    // Remove a task
    function removeTask(taskElement) {
      taskList.removeChild(taskElement);
      saveTasks();
    }
  
    // Save tasks to Local Storage
    function saveTasks() {
      const tasks = Array.from(taskList.children).map(li => li.firstChild.textContent);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });