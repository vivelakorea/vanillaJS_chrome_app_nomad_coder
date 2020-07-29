const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = document.querySelector(".js-toDoForm__input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function setIdOfToDos() {
  const len = toDos.length;
  for (let i = 0; i < len; i++) {
    toDos[i].id = i + 1;
  }
}

function deleteToDo(event) {
  event.preventDefault();
  const toDoForRemoval = event.target.parentNode;
  const idForRemoval = event.target.parentNode.id;
  const removedToDos = toDos.filter(function (toDo) {
    return parseInt(idForRemoval) !== toDo.id;
  });
  toDos = removedToDos;
  toDoForRemoval.remove();
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.addEventListener("click", deleteToDo);
  li.classList.add("js-toDoList__toDo");
  delBtn.innerHTML = "X";
  delBtn.classList.add("delBtn");
  span.innerHTML = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
}

function handdleSubmit(event) {
  setIdOfToDos();
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
  saveToDos();
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handdleSubmit);
}

init();
