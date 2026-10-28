let form = document.querySelector("form");
let nameField = document.querySelector("#name");
let taskField = document.querySelector("#task");
let listdiv = document.querySelector("#list");
let tasks = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
    let obj = {
        id: Date.now(),
        name: nameField.value,
        task: taskField.value,
    };
    tasks.push(obj);
    console.log(tasks);

    form.reset();

showOnDisplay();
})

function showOnDisplay() {
    let lastTask = tasks[tasks.length-1];

    let tablerecord = document.createElement("div");
    tablerecord.className = "record";
   listdiv.append(tablerecord);

    let namep = document.createElement("p");
   namep.innerText = lastTask.name;
   tablerecord.appendChild(namep);

    let taskp = document.createElement("p");
   taskp.innerText = lastTask.task;
   tablerecord.appendChild(taskp);

    let actionp = document.createElement("p");
    
   tablerecord.appendChild(actionp);

   let editIcon = document.createElement("i")
   editIcon.className ="fa-solid fa-pencil";
   actionp.append(editIcon);

    let deleteIcon = document.createElement("i")
   deleteIcon.className ="fa-solid fa-trash";
   actionp.append(deleteIcon);

   listdiv.append(tablerecord);
}