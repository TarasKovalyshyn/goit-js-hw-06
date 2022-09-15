const inputRef = document.querySelector("#font-size-control");
console.log(inputRef);
const textRef = document.querySelector("#text");
console.log(textRef);

const inputHandler = (event) => {
  console.log(event.target.value);

  textRef.style.fontSize = ` ${event.target.value}px`;
};
inputRef.addEventListener("input", inputHandler);
