let form = document.querySelector("#leaderform");
let fname = document.querySelector("#firstname");
let lname = document.querySelector("#lastname");
let options = document.querySelector("#country");
let scores = document.querySelector("#score");
let leaderlist = document.querySelector("#playerlist");
let tasks = [];
let selectedIndex = null;

//table
let tabledata = document.createElement("table");
tabledata.className = "table";
document.body.append(tabledata);

let tableheadings = document.createElement("thead");
tabledata.append(tableheadings);

let tablerows = document.createElement("tr");
tableheadings.append(tablerows);

let fullname = document.createElement("th");
fullname.innerText = "Full Name";
tablerows.append(fullname);

let country = document.createElement("th");
country.innerText = "Country";
tablerows.append(country);

let score = document.createElement("th");
score.innerText = "Score";
tablerows.append(score);

let action = document.createElement("th");
action.innerText = "Action";
tablerows.append(action);

let tablerecord = document.createElement("tbody");
tablerecord.className = "record";
tabledata.append(tablerecord);

// form submission

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    Id: Date.now(),
    fullname: fname.value + lname.value,
    country: options.value,
    score: scores.value,
  };
  tasks.push(obj);
  console.log(tasks);

  form.reset();

  showOnDisplay();
});

function showOnDisplay() {
  tablerecord.innerHTML = "";
  tasks.map((object, index) => {
    let datarow = document.createElement("tr");
    tablerecord.append(datarow);

    let fullName = document.createElement("td");
    fullName.innerHTML = object.fullname;
    datarow.append(fullName);

    let datacountry = document.createElement("td");
    datacountry.innerHTML = object.country;
    datarow.append(datacountry);

    let datascore = document.createElement("td");
    datascore.innerHTML = object.score;
    datarow.append(datascore);

    let dataction = document.createElement("td");
    datarow.append(dataction);

    let incrementbtn = document.createElement("button");
    incrementbtn.innerText = "+5";
    dataction.appendChild(incrementbtn);

    let decrementbtn = document.createElement("button");
    decrementbtn.innerText = "-5";
    dataction.appendChild(decrementbtn);

    incrementbtn.addEventListener("click", () => {
      increaseScore(index);
    });

    decrementbtn.addEventListener("click", () => {
      decreaseScore(index);
    });

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash";
    dataction.append(deleteIcon);

    deleteIcon.addEventListener("click", () => {
      deleterow(index);
    });
  });
}
function deleterow(index) {
  selectedIndex = index;
  tasks.splice(selectedIndex, 1);
  showOnDisplay();
}

// function increaseScore(index) {
//   selectedIndex = index;
//   return score += 5;
  
// }

// function decreaseScore(index) {
//   selectedIndex = index;
//   score -= 5;
//   scoreDecrease.innerText = score.value;
//   showOnDisplay();
// }


function increaseScore(index) {
  tasks[index].score = Number(tasks[index].score) + 5;
  showOnDisplay();
}

function decreaseScore(index) {
  tasks[index].score = Number(tasks[index].score) - 5;
  showOnDisplay();
}