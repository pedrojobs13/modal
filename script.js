let modal = document.getElementById("openModal");
let text = document.querySelector(".modal_stye");
let body = document.querySelector("body");
let openModal = function () {
  text.classList.toggle("invisible");
  modal.classList.toggle("invisible");
};

let closeModal = function (e) {
  let modalq = text.classList.contains("invisible");
  let modalt = modal.classList.contains("invisible");
  let button = e.key;
  console.log(button);
  if (!modalq && modalt && button === "Escape") {
    text.classList.add("invisible");
    modal.classList.remove("invisible");
  }
};

modal.addEventListener("click", openModal);
body.addEventListener("keydown", closeModal);
