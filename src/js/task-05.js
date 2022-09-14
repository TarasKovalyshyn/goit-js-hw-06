const inputRef = document.querySelector("#name-input");
console.log(inputRef);
const spanRef = document.querySelector("#name-output");
console.log(spanRef);

const handleInputName = (event) => {
  console.log(event.target.value);
  spanRef.textContent = event.target.value ? event.target.value : "Anonymous";

  // Деструктиризуємо event.target.value
  // const {value} = event.target
  // spanRef.textContent = value ? value : 'Anonymous'----
  // аналогічний запис -   spanRef.textContent = event.target.value ? event.target.value : "Anonymous";
};
inputRef.addEventListener("input", handleInputName);
