const changeColorRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

function getRandomHexColor() {
  console.log(bodyRef.style.background = spanRef.textContent = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
  return;
}

changeColorRef.addEventListener("click", getRandomHexColor);
