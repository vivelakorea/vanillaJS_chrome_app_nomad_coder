const form = document.querySelector(".js-form"),
  input = document.querySelector(".js-form__input"),
  Message = document.querySelector(".js-clock__message"),
  question = document.querySelector(".js-form__question"),
  toDoForm_ = document.querySelector(".js-toDoForm");

const USER_LS = "currentUser";

function saveUser(value) {
  localStorage.setItem(USER_LS, value);
}

function handdleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  saveUser(currentValue);
  currentUser = localStorage.getItem(USER_LS);
  specifyMessage(currentUser);
}

function askForName() {
  question.classList.remove("no-name-question");
  input.classList.remove("no-name-input");
  toDoForm_.classList.add("no-toDo");
  form.addEventListener("submit", handdleSubmit);
}

function specifyMessage(user) {
  Message.innerHTML += `, ${user}`;
  question.classList.add("no-name-question");
  input.classList.add("no-name-input");
  toDoForm_.classList.remove("no-toDo");
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    specifyMessage(currentUser);
  }
}

function init() {
  loadName();
}

init();
