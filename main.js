const open = document.querySelector("#open");
const close = document.querySelector("#close");
const nav = document.querySelector("#nav");

open.addEventListener("click", () => {
  nav.classList.add("visible")
})

close.addEventListener("click", () => {
  nav.classList.remove("visible")
})