const apiUrl = 'https://localhost:7209/api/todo'; // Replace with your API URL

document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskNameInput = document.getElementById('taskName');

    // Load all tasks when the page loads
    loadTasks();

    // Add new task
    addTaskBtn.addEventListener('click', async function () {
        const taskName = taskNameInput.value.trim();
        if (!taskName) {
            alert('Please enter a task name.');
            return;
        }

        const newTask = {
            taskName: taskName,
            isCompleted: false
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });
            if (response.ok) {
                taskNameInput.value = ''; // Clear input
                loadTasks(); // Refresh the task list
            }
        } catch (error) {
            console.error('Error adding task:', error);
        }
    });

    // Load tasks and display them
    async function loadTasks() {
        try {
            const response = await fetch(apiUrl);
            const tasks = await response.json();
            taskList.innerHTML = ''; // Clear the current list

            tasks.forEach(task => {
                const listItem = document.createElement('li');
                listItem.textContent = `${task.taskName}`;
                
                // Edit Task Button
                const editBtn = document.createElement('button');
                editBtn.textContent = 'Edit';
                editBtn.addEventListener('click', () => editTask(task.id, task.taskName, task.isCompleted));
                
                // Delete Task Button
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', () => deleteTask(task.id));

                listItem.appendChild(editBtn);
                listItem.appendChild(deleteBtn);
                taskList.appendChild(listItem);
            });
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    }

    // Edit a task
    async function editTask(id, taskName, isCompleted) {
        const newTaskName = prompt('Edit Task Name', taskName);
        if (!newTaskName) return;

        const updatedTask = {
            id: id,
            taskName: newTaskName
        };

        try {
            await fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTask)
            });
            loadTasks();
        } catch (error) {
            console.error('Error updating task:', error);
        }
    }

    // Delete a task
    async function deleteTask(id) {
        if (!confirm('Are you sure you want to delete this task?')) return;

        try {
            await fetch(`${apiUrl}/${id}`, {
                method: 'DELETE'
            });
            loadTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }
});
