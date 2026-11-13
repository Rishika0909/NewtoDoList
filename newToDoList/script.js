let form = document.querySelector("form");
let nameField = document.querySelector("#name");
let taskField = document.querySelector("#task");
let listdiv = document.querySelector("#list");
let submitbtn = document.getElementById("submit");
let tasks = [];
let editIndex = false;
let selectedIndex = null;

//    table

let datatable = document.createElement("table");
datatable.className = "table";
document.body.append(datatable);

let tableheadings = document.createElement("thead");
datatable.append(tableheadings);

let tablerows = document.createElement("tr");
tableheadings.append(tablerows);

let todoname = document.createElement("td");
todoname.innerText = "Name";
tablerows.append(todoname);

let todotask = document.createElement("td");
todotask.innerText = "Task";
tablerows.append(todotask);

let todoactions = document.createElement("td");
todoactions.innerText = "Actions";
tablerows.append(todoactions);

let tablerecord = document.createElement("tbody");
tablerecord.className = "record";
datatable.append(tablerecord);

// form submition

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (editIndex === true) {
    tasks[selectedIndex].name = nameField.value;
    tasks[selectedIndex].task = taskField.value;

    editIndex = false;
    selectedIndex = null;

    submitbtn.innerHTML = "Submit";
  } else {
    let obj = {
      id: Date.now(),
      name: nameField.value,
      task: taskField.value,
    };
    tasks.push(obj);
    console.log(tasks);
  }

  form.reset();

  showOnDisplay();
});

function showOnDisplay() {
  tablerecord.innerHTML = "";
  tasks.map((task, index) => {
    let datarow = document.createElement("tr");
    tablerecord.append(datarow);

    let namep = document.createElement("td");
    namep.innerHTML = task.name;
    datarow.append(namep);

    let taskp = document.createElement("td");
    taskp.innerHTML = task.task;
    datarow.append(taskp);

    let actionp = document.createElement("td");
    datarow.append(actionp);

    let editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pencil";
    actionp.append(editIcon);

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash";
    actionp.append(deleteIcon);

    deleteIcon.addEventListener("click", () => {
      deleterow(index);
    });
    editIcon.addEventListener("click", () => {
      editvalue(index);
    });
  });
}

function editvalue(index) {
  editIndex = true;
  selectedIndex = index;

  nameField.value = tasks[selectedIndex].name;
  taskField.value = tasks[selectedIndex].task;

  submitbtn.innerHTML = "Update";
}

function deleterow(index) {
  selectedIndex = index;
  tasks.splice(selectedIndex, 1);
  showOnDisplay();
}
