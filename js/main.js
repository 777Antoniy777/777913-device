var feedback = document.querySelector(".feedback");
var feedback_button = document.querySelector(".contacts-link a");
var feedback_close = feedback.querySelector(".button-close");
var form = feedback.querySelector("form");
var login = feedback.querySelector(".feedback-name");
var email = feedback.querySelector(".feedback-email");
var map = document.querySelector(".map-popup");
var map_button = document.querySelector(".map");
var map_close = map.querySelector(".button-close");

var support_storage = true;
var storage_name = "";
var storage_email = "";

try {
  storage_name = localStorage.getItem("login");
  storage_email = localStorage.getItem("email");
}
catch (err) {
  support_storage = false;
}

feedback_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("feedback-show");
  if (storage_name) {
    storage_name = login.value;
    email.focus();
  }

  if (storage_email) {
    storage_email = email.value;
    comment.focus();
  } else {
      login.focus();
    }
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    feedback.classList.remove("error-show");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("error-show");
  } else {

    if (storage_name || storage_email) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  }
});

feedback_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("feedback-show");
  feedback.classList.remove("error-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {

      if (feedback.classList.contains("feedback-show")) {
        feedback.classList.remove("feedback-show");
        feedback.classList.remove("error-show");
        evt.preventDefault();
      }
  }
});

map_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("map-popup-show");
});

map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("map-popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      
      if (map.classList.contains("map-popup-show")) {
        map.classList.remove("map-popup-show");
        evt.preventDefault();
      }
  }
});