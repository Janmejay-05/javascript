let text = document.getElementById("text");
let btn = document.getElementById("btn");
let cointainer = document.getElementById("cointainer");
const apikey = "cc4d32f41a3f22e1d6d47d128ed76149";

async function weather() {
  cointainer.innerHTML = "";
  const showdata = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${text.value}` +
      `&appid=${apikey}`
  );
  const data = await showdata.json();
  console.log(data);
  let h = document.createElement("h1");
  h.style.marginLeft = "20px";
  h.innerText = `${data.name}`;
  cointainer.append(h);
  cointainer.style.backgroundColor = "white";
  cointainer.style.transition = "1s";

  // let div2=document.createElement("div");
  // let para2=document.createElement("div");
  // para2.innerText=`${data.}`

  let div1 = document.createElement("div");
  div1.id = "divtag";
  for (const key in data.main) {
    // console.log(`${key} : ${data.main[key]}`);
    let p = document.createElement("p");
    p.innerText = `${key} : ${data.main[key]}`;
    p.style.color = "black";
    p.style.fontSize = "20px";
    p.style.textAlign = "center";
    p.style.transition = "1s";
    div1.append(p);
    cointainer.append(div1);
  }
}

btn.addEventListener("click", () => {
  if (text.value === "") {
    alert("enter some value");
    return;
  } else {
    cointainer.style.transition = "0.5s";
    weather();
  }
  text.value = "";
});
