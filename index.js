const btn = document.querySelector(".btn");
const first = document.querySelector(".first-content");
const second = document.querySelector(".second-content");
const rate = document.querySelector("rate-circle");
const orange = document.querySelector("orange");
const grey = document.querySelector("grey");

btn.addEventListener("click", () => {
  first.classList.toggle("show");
  second.classList.toggle("show");
});
