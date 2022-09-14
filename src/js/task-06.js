const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

const inputBlur = (event) => {
  console.log("blur");
  console.log(event.target.value.length);
  if (event.target.value.length === Number(event.target.dataset.length)) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
};
inputRef.addEventListener("blur", inputBlur);
