let count = 0

let heading = document.createElement("div");
heading.className ="counter";
document.body.append(heading);

let counterValue = document.createElement("h1");
counterValue.innerText = "Counter by 5 = ";
heading.appendChild(counterValue);

let countStart = document.createElement("h1");
countStart.innerText = count;
heading.appendChild(countStart);


let countButtons = document.createElement("div");
countButtons.className ="buttons";
document.body.append(countButtons);

let incrementbtn = document.createElement("button");
incrementbtn.innerText = "+";
countButtons.appendChild(incrementbtn);

let resetbtn = document.createElement("button");
resetbtn.innerText = "reset";
countButtons.appendChild(resetbtn);

let decrementbtn = document.createElement("button");
decrementbtn.innerText = "-";
countButtons.appendChild(decrementbtn);


function increasebtn(){
    count += 5;
    countStart.innerText = count;
}

function startbtn(){
    count = 0;
    countStart.innerText = count;
}

function decreasebtn(){
    count -= 5;
    countStart.innerText = count;
}


incrementbtn.addEventListener("click", increasebtn);
resetbtn.addEventListener("click", startbtn);
decrementbtn.addEventListener("click", decreasebtn);