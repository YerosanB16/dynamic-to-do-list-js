document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        // Use classList.add instead of className assignment
        removeBtn.classList.add('remove-btn');

        // Remove task on button click
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append remove button to the list item
        li.appendChild(removeBtn);

        // Append list item to the task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

    // Event listener for add task button
    addButton.addEventListener('click', addTask);

    // Event listener for 'Enter' key on task input
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
