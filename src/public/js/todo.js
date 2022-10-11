let elInputPlane = document.querySelector(".input-plane");
let elAddPlaneBtn = document.querySelector(".add");
let elResultPlane = document.querySelector(".todo-plane-list");
let elComletedPlane = document.querySelector(".todo-done-list");
let elUnComletedPlane = document.querySelector(".todo-notdone-list");
let user = document.querySelector(".heading");

const createElements = () => {
  let todoItem = document.createElement("li");
  let todoTitle = document.createElement("p");
  let todoCheckBtn = document.createElement("button");
  let todoEditBtn = document.createElement("button");
  let todoDeleteBtn = document.createElement("button");
  return { todoItem, todoTitle, todoCheckBtn, todoEditBtn, todoDeleteBtn };
};
const crateHeading = (place, headingTitle) => {
  place.innerHTML = null;
  const heading = document.createElement("li");
  heading.classList.add("todo-list-heading");
  heading.textContent = headingTitle;
  place.appendChild(heading);
};
const addClass = (elements, isComplated) => {
  elements.todoItem.classList.add("todo_all_item");
  elements.todoTitle.classList.add("todo_item_title");
  elements.todoEditBtn.classList.add("todo_edit_btn");
  elements.todoDeleteBtn.classList.add("todo_delete_btn");
  if (isComplated) {
    elements.todoCheckBtn.classList.add("todo_check_btn_checked");
  } else {
    elements.todoCheckBtn.classList.add("todo_check_btn");
  }
};
const collectItems = (elements, place) => {
  elements.todoItem.appendChild(elements.todoCheckBtn);
  elements.todoItem.appendChild(elements.todoTitle);
  elements.todoItem.appendChild(elements.todoEditBtn);
  elements.todoItem.appendChild(elements.todoDeleteBtn);
  place.appendChild(elements.todoItem);
};

const todosAll = (todos, place, headingTitle) => {
  place.innerHTML = null;
  crateHeading(place, headingTitle);
  todos.forEach((todo) => {
    const elements = createElements();
    addClass(elements, todo.isCompleted);
    collectItems(elements, place);
    elements.todoTitle.textContent = todo.title;
    elements.todoCheckBtn.addEventListener("click", () => {
      fetch("http://localhost:2222/todoEdit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: todo._id,
          isComplated: !todo.isCompleted,
          userId: user.dataset.userId.trim(),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          todosAll(data, elResultPlane, "Planned works");
          todosAll(
            data.filter((d) => d.isCompleted),
            elComletedPlane,
            "Complated works"
          );
          todosAll(
            data.filter((d) => !d.isCompleted),
            elUnComletedPlane,
            "UnComplated works"
          );
        });
    });

    elements.todoEditBtn.addEventListener("click", () => {
      const title = prompt("Enter new title");
      fetch("http://localhost:2222/todoEdit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: todo._id,
          title,
          userId: user.dataset.userId.trim(),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          todosAll(data, elResultPlane, "Planned works");
          todosAll(
            data.filter((d) => d.isCompleted),
            elComletedPlane,
            "Complated works"
          );
          todosAll(
            data.filter((d) => !d.isCompleted),
            elUnComletedPlane,
            "UnComplated works"
          );
        });
    });
    elements.todoDeleteBtn.addEventListener("click", () => {
      fetch("http://localhost:2222/todoDelete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: todo._id,
          userId: user.dataset.userId.trim(),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          todosAll(data, elResultPlane, "Planned works");
          todosAll(
            data.filter((d) => d.isCompleted),
            elComletedPlane,
            "Complated works"
          );
          todosAll(
            data.filter((d) => !d.isCompleted),
            elUnComletedPlane,
            "UnComplated works"
          );
        });
    });
  });
};

elAddPlaneBtn.addEventListener("click", () => {
  let title = elInputPlane.value;
  console.log(title);
  if (title !== "") {
    fetch("http://localhost:2222/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        userId: user.dataset.userId.trim(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        todosAll(data, elResultPlane, "Planned works");
        todosAll(
          data.filter((d) => d.isComplated),
          elComletedPlane,
          "Complated works"
        );
        todosAll(
          data.filter((d) => !d.isComplated),
          elUnComletedPlane,
          "UnComplated works"
        );
      });
  }
  elInputPlane.value = "";
});

(() => {
  fetch("http://localhost:2222/todo/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: user.dataset.userId.trim(),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      todosAll(data, elResultPlane, "Planned works");
      todosAll(
        data.filter((d) => d.isCompleted),
        elComletedPlane,
        "Complated works"
      );
      todosAll(
        data.filter((d) => !d.isCompleted),
        elUnComletedPlane,
        "UnComplated works"
      );
    });
})();
