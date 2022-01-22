function createTask() {
    var newTask = document.createElement("button");
    newTask.id = "newTask1";
    // newTask.style.backgroundColor = "#3b3588";
    // newTask.style.width = "30px";
    // newTask.style.height = "10px";
    // newTask.style.fontSize = "16px";
    document.getElementById("newTask1").className = ("TaskButton");
    newTask.innerHTML = "Task Name";
    document.body.appendChild(newTask);
}