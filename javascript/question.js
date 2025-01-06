const question = [
  {
    que: "which language are u learning?",
    a: "javascript",
    b: "c",
    c: "java",
    ans: "javascript",
  },
  {
    que: "which language is used in mern stack?",
    a: "javascript",
    b: "angular",
    c: "java",
    ans: "javascript",
  },
  {
    que: "which different framework is used in mean stack and mern stack?",
    a: "Angular",
    b: "React js",
    c: "both a and b",
    ans: "both a and b",
  },
  {
    que: "your total score  out of 3 is ",
  },
];

let ques = document.getElementById("question");
let op1 = document.getElementById("option1");
let op2 = document.getElementById("option2");
let op3 = document.getElementById("option3");
let para = document.querySelectorAll("#para");
let submit_btn = document.getElementById("submit_btn");
let optval = document.querySelectorAll(".opt");
let submit = document.getElementById("submit");
let result_p = document.getElementById("result_p");
let result_show = document.getElementById("show_result");
let main = document.getElementById("main_cointainer");
let reset_btn = document.getElementById("reset_btn");
let count = 0;
let ans_count = 0;

function result() {
  ques.innerHTML = ` ${question[count].que}`;
  ques.style.height = "40%";
  ques.style.color = "white";
  ques.style.fontSize = "40px";
  op1.style.display = "none";
  op2.style.display = "none";
  op3.style.display = "none";
  submit_btn.style.display = "none";
  result_show.style.display = "block";
  result_p.innerHTML = `Congrats your Score = ${ans_count}`;
  main.style.backgroundColor = "black";
  main.style.transition = "0.5s";
  reset_btn.style.display = "block";
}
function data() {
  ques.innerHTML = ` ${question[count].que}`;

  para[0].innerText = ` ${question[count].a}`;
  para[1].innerText = ` ${question[count].b}`;
  para[2].innerText = ` ${question[count].c}`;
}
data();
console.log(count, question[count].ans);

function optvalidation() {
  let valid = false;

  for (let i = 0; i < optval.length; i++) {
    if (!valid) {
      if (optval[i].checked) {
        valid = true;
        if (para[i].innerText == question[count].ans) {
          console.log("correcty anwer");
          ans_count++;
        } else {
          console.log("wrong answer");
        }
        console.log("checked");
        count++;
        optval[i].checked = false;
      }
    }
    console.log(count);
  }
  if (!valid) {
    alert("please selected any option");
    return;
  }
}

submit_btn.addEventListener("click", () => {
  if (count < question.length - 1) {
    optvalidation();
    if (count === question.length - 1) {
      result();
    } else {
      console.log(count);
      data();
    }
  }
});

reset_btn.addEventListener("click", () => {
  count = 0;
  ans_count = 0;
  ques.style.height = "23%";
  ques.style.color = "black";
  ques.style.fontSize = "25px";
  op1.style.display = "block";
  op2.style.display = "block";
  op3.style.display = "block";
  submit_btn.style.display = "block";
  result_show.style.display = "none";
  main.style.backgroundColor = "rgba(0, 0, 0, 0.162)";
  main.style.transition = "0.5s";
  reset_btn.style.display = "none";
  data();
});
