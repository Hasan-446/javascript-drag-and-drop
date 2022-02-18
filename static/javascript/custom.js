const todos = document.querySelectorAll("#todo_box");
const allStatus = document.querySelectorAll(".col");
let draggable_todo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggable_todo = this;
  console.log("dragstart");
}

function dragEnd() {
  draggable_todo = null;
  console.log("dragend");
}

allStatus.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});
function dragOver(e) {
  e.preventDefault();
  //console.log("dragover");
}
function dragEnter() {
  console.log("dragenter");
}
function dragLeave() {
  console.log("dragleave");
}

function dragDrop() {
  this.appendChild(draggable_todo);
  console.log("dragdrop");
}

const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener("click", createTodo);

function createTodo() {
  const todo_div = document.createElement("div");
  const input_value = document.getElementById("todo_input").value;
  const txt = document.createTextNode(input_value);

  todo_div.appendChild(txt);
  todo_div.setAttribute("id", "todo_box");
  todo_div.setAttribute("class", "border border-1 p-2 mb-2 mt-2");
  todo_div.setAttribute("draggable", "true");

  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");

  span.appendChild(span_txt);
  span.setAttribute("id", "cross");

  todo_div.appendChild(span);

  no_status.appendChild(todo_div);

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });

  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  console.log(todo_div);
}
const close_btn = document.querySelectorAll("#cross");

close_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});
