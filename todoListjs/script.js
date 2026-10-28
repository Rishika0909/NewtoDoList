let form = document.getElementById("taskform");
let nameinp = document.getElementById("name");
let taskinp = document.getElementById("task");
let tablebody = document.getElementById("tasktable");
let tasks = [];
let count = 1;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = nameinp.value;
  let task = taskinp.value;
  let obj = { id: Date.now(), name: name, task: task };
  console.log(obj.id);
  tasks.push(obj);

  let row = tablebody.insertRow();
  row.insertCell(0).innerText = count;
  row.insertCell(1).innerText = name;
  row.insertCell(2).innerText = task;
  row.insertCell(3).innerHTML =
    '<button type ="button"> <i class="fa-solid fa-pen-to-square"></i> </button> <button type ="button" onclick = "handleclick()"> <i class="fa-solid fa-trash"></i> </button>';

  form.reset();
});
function handleclick(){
console.log("Rishika");
}
