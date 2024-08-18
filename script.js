document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    const taskDate = document.getElementById('task-date').value;
    const taskTime = document.getElementById('task-time').value;
    const alarmActive = !document.getElementById('alarm-icon').classList.contains('inactive');
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.textContent = `${taskText} - ${taskDate} ${taskTime}`;
    
    if (alarmActive) {
        // Set alarm for the task (Pseudo-code, you need a real implementation)
        setAlarm(taskDate, taskTime, taskText);
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
        // Clear alarm if task is deleted (Pseudo-code, you need a real implementation)
        clearAlarm(taskDate, taskTime);
    });

    li.appendChild(deleteButton);
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    document.getElementById('new-task').value = '';
    document.getElementById('task-date').value = '';
    document.getElementById('task-time').value = '';
});

document.getElementById('alarm-icon').addEventListener('click', function() {
    this.classList.toggle('inactive');
    if (!this.classList.contains('inactive')) {
        this.style.color = '#a52a2a'; // More pronounced color
    } else {
        this.style.color = '#d3d3d3'; // Faded color
    }
});

function setAlarm(date, time, task) {
    // Implement the alarm logic here
    console.log(`Alarm set for ${date} ${time} for task: ${task}`);
}

function clearAlarm(date, time) {
    // Implement alarm clearing logic here
    console.log(`Alarm cleared for ${date} ${time}`);
}
