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

const userInput = document.querySelector(".user-input");
const passInput = document.querySelector(".pass-input");

userInput.addEventListener("click", () => {
  userInput.value = "";
});
passInput.addEventListener("click", () => {
  passInput.value = "";
});
