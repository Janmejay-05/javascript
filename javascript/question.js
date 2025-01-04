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
let count = 0;
let ans_count = 0;

function result() {
  ques.innerHTML = ` ${question[count].que}`;
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
    console.log(count);
    data();
  }
});
