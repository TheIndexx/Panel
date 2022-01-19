function createTask() {
    var newTask = document.createElement('taskbutton');
    newTask.style.backgroundColor = "#3b3588";
    newTask.style.width = "10px";
    newTask.style.height = "10px";
    newTask.style.fontSize = "16px";
    newTask.innerHTML = "New Task";
    document.body.appendChild(newTask);
}