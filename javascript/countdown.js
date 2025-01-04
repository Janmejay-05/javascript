let content = document.getElementById("content2");
let maincointainer = document.getElementById("main_cointainer");
let content2 = document.getElementById("content");
let count = 10;
content.innerHTML = `${count}`;
const id = setInterval(() => {
  if (count == 1) {
    content.innerHTML = `Its Time to WakeUp 😶‍🌫️`;
    maincointainer.style.backgroundColor = "rgba(0, 0, 0, 0.96)";
    maincointainer.style.transition = "0.5s";
    content.style.color = "white";
    content2.style.color = "white";
    clearInterval(id);
  } else {
    count--;
    content.innerHTML = `${count}`;
  }
}, 1000);
