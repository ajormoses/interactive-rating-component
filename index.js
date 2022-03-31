const btn = document.querySelector(".btn");
const first = document.querySelector(".first-content");
const second = document.querySelector(".second-content");

one = () => {
  btn.addEventListener("click", () => {
    document.getElementById(
      "select"
    ).innerHTML = `<p>You selected out 1 of 5<p>`;
    first.classList.toggle("show");
    second.classList.toggle("show");
  });
};

two = () => {
  btn.addEventListener("click", () => {
    document.getElementById(
      "select"
    ).innerHTML = `<p>You selected out 2 of 5<p>`;
    first.classList.toggle("show");
    second.classList.toggle("show");
  });
};

three = () => {
  btn.addEventListener("click", () => {
    document.getElementById(
      "select"
    ).innerHTML = `<p>You selected out 3 of 5<p>`;
    first.classList.toggle("show");
    second.classList.toggle("show");
  });
};

four = () => {
  btn.addEventListener("click", () => {
    document.getElementById(
      "select"
    ).innerHTML = `<p>You selected out 4 of 5<p>`;
    first.classList.toggle("show");
    second.classList.toggle("show");
  });
};

five = () => {
  btn.addEventListener("click", () => {
    document.getElementById(
      "select"
    ).innerHTML = `<p>You selected out 5 of 5<p>`;
    first.classList.toggle("show");
    second.classList.toggle("show");
  });
};
