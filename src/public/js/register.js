const form = document.querySelector(".register-div");
const firstname = document.querySelector(".firstnameInput");
const lastname = document.querySelector(".lastnameInput");
const username = document.querySelector(".usernameInput");
const password = document.querySelector(".passwordInput");

function myFunction() {
  let x, y, z, m, t, h;
  m = document.querySelector("body");
  x = document.getElementById("toggle");
  y = document.getElementById("toggle-btn");
  t = document.getElementById("shape");

  z = document.getElementById("change-icon1");
  h = document.getElementById("change-icon2");

  m.classList.toggle("body-dark");
  m.classList.toggle("dark_mode");
  x.classList.toggle("toggle-dark");
  y.classList.toggle("span-dark");
  t.classList.toggle("shape-style");

  z.classList.toggle("moon-icon");
  h.classList.toggle("sun-icon");

  z.toggleAttribute("class", "fas fa-cloud-sun");
}

firstname.addEventListener("click", () => {
  firstname.value = "";
});
lastname.addEventListener("click", () => {
  lastname.value = "";
});
username.addEventListener("click", () => {
  username.value = "";
});
password.addEventListener("click", () => {
  password.value = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(firstname.value.trim());
  console.log(lastname.value.trim());
  console.log(username.value.trim());
  console.log(password.value.trim());
  fetch("http://localhost:2222/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: firstname.value.trim(),
      lastname: lastname.value.trim(),
      username: username.value.trim(),
      password: password.value.trim(),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message == "username already exist") {
        alert("username already exist");
      } else {
        window.location.replace(data.message);
      }
    });
});
