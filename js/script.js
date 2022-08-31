"use strict";

const showPopup = document.querySelector(".btns .btn--full");
const order = document.querySelector(".nav-cta");

const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form-popup");
const close = document.querySelector(".close-icon");

[showPopup, order].forEach((ev) =>
  ev.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.classList.remove("hidden");
    form.classList.remove("hidden");
  })
);

close.addEventListener("click", () => {
  overlay.classList.add("hidden");
  form.classList.add("hidden");
});
