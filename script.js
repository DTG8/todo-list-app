document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    document.getElementById('new-task').value = '';
});
