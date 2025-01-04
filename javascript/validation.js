let nam = document.getElementById("name");
let errnam = document.getElementById("nam_p");
let submit = document.getElementById("btn");
let email = document.getElementById("email");
let erremail = document.getElementById("email_p");
let date = document.getElementById("date");
let errdate = document.getElementById("date_p");
let number = document.getElementById("number");
let errnumber = document.getElementById("number_p");
let gender = document.querySelectorAll("#gender");
let errgender = document.getElementById("gender_p");
let hobbie = document.querySelectorAll("#hobbie");
let errhobbie = document.getElementById("hobbie_p");

function namevalidation() {
  if (nam.value == "") {
    errnam.innerText = "please enter your name";
    errnam.style.color = "red";
  } else {
    errnam.innerText = "";
  }
}

function emailvalidation() {
  if (email.value == "") {
    erremail.innerText = "please enter your email";
    erremail.style.color = "red";
  } else {
    erremail.innerText = "";
  }
}

function datevalidation() {
  if (date.value == "") {
    errdate.innerText = "please enter your date";
    errdate.style.color = "red";
  } else {
    errdate.innerText = "";
  }
}

function numbervalidation() {
  if (number.value == "") {
    errnumber.innerText = "please enter your number";
    errnumber.style.color = "red";
  } else if (Number(number.value) && number.value.length === 10) {
    errnumber.innerText = "";
  } else {
    errnumber.innerText = "please enter valid number";
    errnumber.style.color = "red";
  }
}

function gendervalidation() {
  let valid = false;
  for (let i = 0; i < gender.length; i++) {
    if (!valid) {
      if (gender[i].checked) {
        valid = true;
        errgender.innerText = "";
      }
    }

    if (!valid) {
      errgender.style.color = "red";
      errgender.innerText = "please select any one gender";
    }
  }
}
console.log(gender);

function hobbievalidation() {
  let valid = false;
  for (let i = 0; i < hobbie.length; i++) {
    if (!valid) {
      if (hobbie[i].checked) {
        valid = true;
      }
    }

    if (!valid) {
      errhobbie.style.color = "red";
      errhobbie.innerText = "please select any hobbie";
    } else {
      errhobbie.innerText = "";
    }
  }
}
console.log(hobbie);

submit.addEventListener("click", () => {
  namevalidation();
  emailvalidation();
  datevalidation();
  numbervalidation();
  gendervalidation();
  hobbievalidation();
});
