var listID = -1;
var tlistNAME = [];
var tlistLIST = [];

function init() {
    let genesisButton = document.createElement("button");
    genesisButton.innerHTML = "Create New List";
    document.body.appendChild(genesisButton);
    genesisButton.onclick = function() {genesisOnClick()};
}

function genesisOnClick() {
    let newButton = document.createElement("button");
    listID = listID + 1;
    newButton.id = listID;
    newButton.style.whiteSpace = "pre-line";
    newButton.style.wordSpacing = "3px";
    document.body.appendChild(newButton);
    tlistNAME.push(prompt("Enter the name of this list:", "Eg. School Work"));
    newButton.innerHTML = tlistNAME[listID];
    newButton.addEventListener("click", function() {listOnClick(newButton.id)});
}

function listOnClick(btnID) {
    let btn = document.getElementById(btnID);
    if (tlistLIST[btnID] == null) {
        newList = [];
        newList.push(prompt("Enter a task for List " + btnID, "Eg. Math hw"));
        tlistLIST.push(newList);
        currentTLIST = tlistLIST[btnID];
        btn.innerHTML += '\n' + currentTLIST[currentTLIST.length - 1];
    }
    else {
        currentTLIST = tlistLIST[btnID];
        currentTLIST.push(prompt("Enter a task for List " + btnID, "Eg. Math hw"));
        btn.innerHTML += '\n' + currentTLIST[currentTLIST.length - 1];
    }
}

init();