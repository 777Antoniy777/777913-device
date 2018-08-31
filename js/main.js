var feedback = document.querySelector(".feedback");
var feedback_button = document.querySelector(".contacts-link a");
var feedback_close = feedback.querySelector(".button-close");
var map = document.querySelector(".map-popup");
var map_button = document.querySelector(".map");
var map_close = map.querySelector(".button-close");

feedback_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("feedback-show");
});

feedback_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("feedback-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

      if (feedback.classList.contains("feedback-show")) {
        feedback.classList.remove("feedback-show");
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
    evt.preventDefault();
      
      if (map.classList.contains("map-popup-show")) {
        map.classList.remove("map-popup-show");
      }
  }
});