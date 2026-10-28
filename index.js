// let start = document.createElement("h1");
// numbercount.id = "start";
// document.body.append("start");

// let increase = document.createElement("button");
// increase.className = "increase";
// document.body.append("+");

// let decrease = document.createElement("button")
// decrease.className = "decrease";
// document.body.append("-");

// let reset = document.createElement("button")
// decrease.className = "reset";
// document.body.append("reset");

// let count = 0;
// function increase(){
// count++;
// document.getElementById("start").innerHTML = count
// }
// function decrease(){
// count--;
// document.getElementById("start").innerHTML = count
// }
// function reset(){
// count = 0;
// document.getElementById("start").innerHTML = count
// }




let count = 0;

let heading = document.createElement("h1");
heading.innerText = "counter";
document.body.appendChild(heading);

let counter = document.createElement("h3")
counter.innerText = count;
counter.id = "count";
document.body.appendChild(counter);

let decreasebtn = document.createElement("button");
decreasebtn.innerText = "-";
document.body.appendChild(decreasebtn);

let resetbtn = document.createElement("button");
resetbtn.innertext ="reset";
document.body.appendChild(resetbtn);

let increasebtn = document.createElement("button");
increasebtn.innertext = "+";
document.body.appendChild(increasebtn);


// way 1 =
// function decrease(){
//     count--;
//     counter.innerText = count;
// }
// decreasebtn.onclick = decrease;

// way 2 =
decreasebtn.addEventListener("click", ()=>{count--;
    counter.innerText = count;
});

function reset(){
    count = 0;
    counter.innerText = count;
}
resetbtn.onclick = reset;

increasebtn.addEventListener("click", ()=>{count++;
    counter.innerText = count;
});
