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
];

let ques = document.getElementById("question");
let op1 = document.getElementById("option1");
let op2 = document.getElementById("option2");
let op3 = document.getElementById("option3");
let submit_btn = document.getElementById("submit_btn");
let count = 0;
function data() {
  ques.innerHTML = ` ${question[count].que}`;
  op1.innerHTML = `&nbsp;<input type="radio" name="options" class="opt" value="${question[count].a}"> ${question[count].a}`;
  op2.innerHTML = `&nbsp;<input type="radio" name="options" class="opt" value="${question[count].b}"> ${question[count].b}`;
  op3.innerHTML = `&nbsp;<input type="radio" name="options" class="opt" value="${question[count].c}"> ${question[count].c}`;
}
data();
let optval = document.querySelectorAll(".opt");
submit_btn.addEventListener("click", () => {
  if (count < question.length) {
    console.log(count, question[count].ans);
    count++;
    data();
  }
});
