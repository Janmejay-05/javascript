let btn = document.getElementById("btn");
let cointainer = document.getElementById("cointainer");
let text = document.getElementById("text");
let todolist = JSON.parse(localStorage.getItem("tododata")) || [];

function show() {
  todolist.push(text.value);

  localStorage.setItem("tododata", JSON.stringify(todolist));
  //   console.log(todolist);
}

function addelements() {
  cointainer.innerHTML = "";

  todolist.forEach((element) => {
    let card = document.createElement("div");
    let para = document.createElement("p");
    para.innerText = element;
    card.append(para);
    cointainer.append(card);
  });
}

addelements();

btn.addEventListener("click", () => {
  if (text.value === "") {
    alert("enter any value");
    return;
  } else {
    // show();

    addelements();
    text.value = "";
  }
});
