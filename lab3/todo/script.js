function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() === '') return; // Ignore empty tasks

    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');

    // Checkbox to mark the task as done
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        if (this.checked) {
            li.classList.add('task-done');
        } else {
            li.classList.remove('task-done');
        }
    };

    // Span to hold the task text
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        todoList.removeChild(li);
    };

    // Assemble the list item
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Clear input
    taskInput.value = '';
}
