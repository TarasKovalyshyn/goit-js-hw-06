const changeColorRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

function hendlerColor() {
  const randomColor = getRandomHexColor();
  console.log(
    ((bodyRef.style.background = randomColor),
    (spanRef.textContent = randomColor))
  );
}

changeColorRef.addEventListener("click", hendlerColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
