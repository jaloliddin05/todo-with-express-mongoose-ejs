let elInputPlane = document.querySelector(".input-plane");
let elAddPlaneBtn = document.querySelector(".add");
let elResultPlane = document.querySelector(".todo-plane-list");
let elComletedPlane = document.querySelector(".todo-done-list");

elAddPlaneBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  let userPlane = elInputPlane.value;
  if (userPlane !== "") {
    addPlanelist(userPlane);
  }
  elInputPlane.value = "";
});

function addPlanelist(plane) {
  let itemPlane = document.createElement("li");
  itemPlane.innerHTML = plane;
  itemPlane.classList.add("todo-item-add");
  let itemBtn = document.createElement("button");
  itemBtn.classList.add("todo-add-btn");
  itemPlane.appendChild(itemBtn);
  elResultPlane.appendChild(itemPlane);

  itemBtn.addEventListener("click", function () {
    itemPlane.classList.remove("todo-item-add");
    itemPlane.classList.add("todo-item-done");
    elComletedPlane.appendChild(itemPlane);
  });
}
