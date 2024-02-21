document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() === '') return;

    const newTask = createTaskElement(taskInput.value, false);
    document.getElementById('todoList').appendChild(newTask);
    saveTasks();
    taskInput.value = '';
}

function createTaskElement(text, completed) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    checkbox.addEventListener('change', function() {
        if(this.checked) {
            li.classList.add('task-done');
        } else {
            li.classList.remove('task-done');
        }
        saveTasks();
    });

    const taskText = document.createElement('span');
    taskText.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        li.remove();
        saveTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    if(completed) li.classList.add('task-done');

    return li;
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#todoList li').forEach(li => {
        tasks.push({
            text: li.innerText.replace('Delete', '').trim(),
            completed: li.firstChild.checked
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const newTask = createTaskElement(task.text, task.completed);
        document.getElementById('todoList').appendChild(newTask);
    });
}
