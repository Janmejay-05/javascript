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

  todolist.forEach((element, index) => {
    //declaring variables
    let card = document.createElement("div");
    let para = document.createElement("p");
    let edit = document.createElement("button");
    let del = document.createElement("button");

    //css
    card.style.border = "1px solid black";
    card.style.height = "100px";
    card.style.width = "100px";
    card.style.marginTop = "20px";
    card.style.alignItems = "center";

    //showing value
    para.innerText = element;
    edit.innerText = "Edit";
    del.innerText = "Delete";

    //button listner to delete
    del.addEventListener("click", () => {
      todolist = todolist.filter((e, i) => i != index);
      localStorage.setItem("tododata", JSON.stringify(todolist));
      console.log(todolist);
      addelements();
    });

    //button listner to edit
    edit.addEventListener("click", () => {
      let storedata = prompt(element);
      todolist[index] = storedata;
      localStorage.setItem("tododata", JSON.stringify(todolist));
      addelements();
    });

    //appending elements
    card.append(para);
    card.append(edit);
    card.append(del);
    cointainer.append(card);
  });
}

addelements();

btn.addEventListener("click", () => {
  if (text.value === "") {
    alert("enter any value");
    return;
  } else {
    show();

    addelements();
    text.value = "";
  }
});
