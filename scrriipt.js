document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="toggleTask(this)">Toggle</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    taskList.appendChild(li);

    saveTasks();
    taskInput.value = '';
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector('span');
    const newTaskText = prompt('Edit Task:', span.innerText.trim());
    if (newTaskText === null || newTaskText.trim() === '') return;
    span.innerText = newTaskText.trim();
    saveTasks();
}

function toggleTask(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('completed');
    saveTasks();
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById('taskList').innerHTML;
    localStorage.setItem('tasks', taskList);
}

function loadTasks() {
    const taskList = localStorage.getItem('tasks');
    if (taskList) {
        document.getElementById('taskList').innerHTML = taskList;
    }
}
