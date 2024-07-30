// Activity -1 
// Task - 1

let original = document.getElementById("textContent");
original.innerText =  "Changed Text";

// Task -2
let colour = document.querySelector(".changecolour");
colour.style.backgroundColor = "Black";

// Activity - 2
// Task - 3

let body=document.querySelector("body");
let div = document.createElement("div");

div.innerText = "New div is added";
div.style.border = "dotted";
div.style.textAlign= "center";
div.style.position = "fixed";
body.append(div);

// Task - 4
let list = document.getElementById("hobbies");
let li = document.createElement("li");
li.innerText = "Acting";
list.append(li);

// Activity - 3
// Task - 5
let text =document.getElementById("remove");
text.remove();

// Task - 6
body.lastChild.remove();

// Activity - 4
// Task - 7
let flower1 = document.getElementById("flower");
flower1.src="data:image/jpeg;base64,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"

// Task - 8
let word = document.querySelector(".change1");
word.classList.add("color"); // Addded the css class
word.classList.remove("color"); // removed the css class

// Activity - 5
// Task -9
let btn = document.querySelector("#btn");
let para =document.getElementById("para");
btn.addEventListener("click",()=>{
    para.innerText ="Text content is modified";
});

// Task -10
para.addEventListener("mouseover",()=>{
    para.style.borderColor="black";
})

