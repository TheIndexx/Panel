//localStorage.clear();
// const testListName = ["Math", "French"]
// const testTasks = [["Calc1", "Calc2"], ["Yabla1", "Yabla2"]]
// localStorage.setItem("listNameArray", JSON.stringify(testListName));
// localStorage.setItem("taskArray", JSON.stringify(testTasks));

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

var listID = -1;

function init() {
    //genesis button =  "Create New List"
    let genesisButton = document.createElement("button");
    var genesisString = new String("Create New List");
    //innerHTML: text inside button being bolded
    genesisButton.innerHTML = '<b>' + genesisString + '</b>';
    //add button to page
    document.body.appendChild(genesisButton);
    //when button clicked, call genesisOnClick
    genesisButton.onclick = function() {genesisOnClick()};
    createExistingLists(listNameArray, taskArray);
}

//function called when genesis button clicked clicked. creates a new list and prompts for a name
function genesisOnClick() {
    let newButton = document.createElement("button");
    listID = listID + 1;
    newButton.id = listID;
    //formats the lists
    newButton.style.whiteSpace = "pre-line";
    newButton.style.wordSpacing = "3px";

    document.body.appendChild(newButton);
    //prompts for a name
    listNameArray.push(prompt("Enter the name of this list:", "Eg. School Work"));
    taskArray.push([]);
    //bolds the name of list
    var listName = new String(listNameArray[listID]);
    localStorage.setItem("listNameArray", JSON.stringify(listNameArray));
    newButton.innerHTML = '<b>' + listName + '</b>';

    //when button is clicked, call newTask which creates a task
    newButton.addEventListener("click", function() {newTask(newButton.id)});
}

// function to re-create lists and tasks from localstorage
function createExistingLists(listNameArray, taskArray) {
    for (let i = 0; i < listNameArray.length; i++) {
        listID = listID + 1;
        let newButton = document.createElement("button");
        newButton.id = listID;
        newButton.style.whiteSpace = "pre-line";
        newButton.style.wordSpacing = "3px";    
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
    }
}

function newTask(btnID) {
    //get button that was clicked on
    let btn = document.getElementById(btnID);
    // if no array, create list of tasks
    if (taskArray[btnID] == null) {
        newList = [];
        //request name of task
        newList.push(prompt("Enter a task for " + listNameArray[btnID], "Eg. Math hw"));
        taskArray.push(newList);
        //current task list being dealt with
        currentTLIST = taskArray[btnID];
        // \n == new line. adds task last added
        btn.innerHTML += '\n' + currentTLIST[currentTLIST.length - 1];
    }
    //if already array of list of tasks, add to it.
    else {
        currentTLIST = taskArray[btnID];
        currentTLIST.push(prompt("Enter a task for " + listNameArray[btnID], "Eg. Math hw"));
        btn.innerHTML += '\n' + currentTLIST[currentTLIST.length - 1];
    }
    localStorage.setItem("listNameArray", JSON.stringify(listNameArray));
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
}

init();