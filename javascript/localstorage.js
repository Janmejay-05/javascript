let keyinput = document.getElementById("keyinput");
let valueinput = document.getElementById("valueinput");
let dropdown = document.getElementById("dropdownlist");

let keyname = [];

function addelement() {
  //   console.log(keynamearr);
  dropdown.innerHTML = "";
  keyname.forEach((element) => {
    let optionelement = document.createElement("option");
    optionelement.innerText = `${element}`;
    optionelement.value = `${element}`;
    optionelement.id = "options";

    dropdown.append(optionelement);
    // console.log(element);
  });
}

function add() {
  if (keyinput.value === "" || valueinput.value === "") {
    alert("please enter the key or value");
    return;
  } else {
    localStorage.setItem(keyinput.value, valueinput.value);
    keyname.push(keyinput.value);

    // console.log(keyname);

    addelement();

    keyinput.value = "";
    valueinput.value = "";
  }
}

// let Options = document.getElementById("options");
function remove() {
  localStorage.removeItem(dropdown.value);
  keyname = keyname.filter((element) => {
    return element !== dropdown.value;
  });
  addelement();
}
// remove();
