const message = document.querySelector(".js-clock__message");

function messageChange(hours) {
  if (5 <= hours && hours <= 11) {
    message.innerHTML = "Good Morning";
  } else if (12 <= hours && hours <= 4) {
    message.innerHTML = "Good Afternoon";
  } else {
    message.innerHTML = "Good Evening";
  }
}

function init() {
  const date = new Date();
  const hours = date.getHours();
  messageChange(hours);
}

init();
