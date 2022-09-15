const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("#controls input");
const boxesRef = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
});
destroyBtn.addEventListener("click", () => {
  boxesRef.innerHTML = "";
  newArray = [];
  inputRef.value = "";
});
let newArray = [];
const basicSize = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    const item = document.createElement("div");
    item.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin-bottom: 10px;`;
    newArray.push(item);
  }
  boxesRef.append(...newArray);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
