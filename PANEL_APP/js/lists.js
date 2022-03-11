// looks weird, fix later
if (localStorage.getItem("listNameArray") === null) {
    var listNameArray = [];
}
else {
    var listNameArray = JSON.parse(localStorage.getItem("listNameArray"));
}

if (localStorage.getItem("taskArray") === null) {
    var taskArray = [];
}
else {
    var taskArray = JSON.parse(localStorage.getItem("taskArray"));
}

var rightClickID = '';
var listID = -1;

function init() {
    let deleteAllButton = document.createElement("button");
    deleteAllButton.classList.add("button_deleteAll");
    deleteAllButton.innerHTML = '<span class="material-icons">delete_forever</span>';
    //add button to page
    document.body.appendChild(deleteAllButton);
    deleteAllButton.addEventListener("click", function() {deleteAllLists()});

    //genesis button =  "Create New List"
    let genesisButton = document.createElement("button");
    genesisButton.classList.add("button_create")
    genesisButton.innerHTML = '<span class="material-icons">add</span>';
    //add button to page
    document.body.appendChild(genesisButton);
    //when button clicked, call genesisOnClick
    genesisButton.addEventListener("click", function() {genesisOnClick()});
    createExistingLists(listNameArray, taskArray);
}

function deleteAllLists() {
    for (let i = 0; i < listNameArray.length; i++) {
        var button = document.getElementById(i);
        button.parentElement.removeChild(button);
    }
    listNameArray = [];
    taskArray = [];
    listID = -1;
    localStorage.clear();
}

//function called when genesis button clicked clicked. creates a new list and prompts for a name
function genesisOnClick() {
    listName = prompt("Enter the name of this list:", "Eg. School Work");
    if (listName === null){
        return;
    }
    let newButton = document.createElement("button");
    listID = listID + 1;
    newButton.id = listID;
    //formats the lists
    newButton.classList.add("list");
    document.body.appendChild(newButton);

    //prompts for a name
    listNameArray.push(listName);
    taskArray.push([]);
    //bolds the name of list
    var listNameStr = new String(listNameArray[listID]);
    localStorage.setItem("listNameArray", JSON.stringify(listNameArray));
    newButton.innerHTML = '<b>' + listNameStr + '</b>';

    //when button is clicked, call newTask which creates a task
    newButton.addEventListener("click", function() {newTask(newButton.id)});

    contextMenuActivation(newButton);
}

// function to re-create lists and tasks from localstorage
function createExistingLists(listNameArray, taskArray) {
    for (let i = 0; i < listNameArray.length; i++) {
        listID = listID + 1;
        let newButton = document.createElement("button");
        newButton.id = listID;
        newButton.classList.add("list");   
        document.body.appendChild(newButton);
        newButton.innerHTML = '<b>' + listNameArray[i] + '</b>';
        currentTaskArray = taskArray[i];
        if (currentTaskArray === undefined || currentTaskArray.length == 0) {
        }
        else {
            for (let n = 0; n < currentTaskArray.length; n++) {
                newButton.innerHTML += '\n' + currentTaskArray[n];
            }
        }
        newButton.addEventListener("click", function() {newTask(newButton.id)});
        contextMenuActivation(newButton);
    }
}

function contextMenuActivation(object) {
    const contextMenu = document.getElementById("context-menu");
    object.addEventListener("contextmenu", (event) => {
        rightClickID = object.id;
        event.preventDefault();
        const { clientX: mouseX, clientY: mouseY } = event;
        contextMenu.style.top = `${mouseY}px`;
        contextMenu.style.left = `${mouseX}px`;
        contextMenu.classList.add("visible");
    });
    document.addEventListener("click", (e) => {
        if (e.target.offsetParent != contextMenu) {
            contextMenu.classList.remove("visible");
        }
    });
}

function deleteList() {
    const contextMenu = document.getElementById("context-menu");
    contextMenu.classList.remove("visible");
    btnToDelete = document.getElementById(rightClickID);
    btnToDelete.parentElement.removeChild(btnToDelete);
    listNameArray.splice(rightClickID, 1);
    taskArray.splice(rightClickID, 1)
    for (let i = 0; i < listNameArray.length; i++) {
        if (i > rightClickID) { 
            btn = document.getElementById(i);
            btn.id = String(Number(btn.id) - 1);
        }
    }
    listID = listID - 1;
    localStorage.setItem("listNameArray", JSON.stringify(listNameArray));
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
}

function newTask(btnID) {
    //get button that was clicked on
    let btn = document.getElementById(btnID);
    // if no array, create list of tasks
    if (taskArray[btnID] == null) {
        newList = [];
        //request name of task
        requestTask1 = prompt("Enter a task for " + listNameArray[btnID], "Eg. Math hw");
        if (requestTask1 === null){
            return;
        }
        newList.push(requestTask1);
        taskArray.push(newList);
        //current task list being dealt with
        currentTLIST = taskArray[btnID];
        // \n == new line. adds task last added
        btn.innerHTML += '\n' + currentTLIST[currentTLIST.length - 1];
    }
    //if already array of list of tasks, add to it.
    else {
        currentTLIST = taskArray[btnID];
        requestTask2 = prompt("Enter a task for " + listNameArray[btnID], "Eg. Math hw");
        if (requestTask2 === null){
            return;
        }
        currentTLIST.push(requestTask2);
        btn.innerHTML += '\n' + currentTLIST[currentTLIST.length - 1];
    }
    localStorage.setItem("listNameArray", JSON.stringify(listNameArray));
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
}

init();