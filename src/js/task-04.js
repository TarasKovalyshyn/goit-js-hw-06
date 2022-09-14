const decrementRef = document.querySelector('button[data-action="decrement"]');
console.log(decrementRef);

const incrementRef = document.querySelector('button[data-action="increment"]');
console.log(incrementRef);

const counterValueRef = document.querySelector("#value");
console.log(counterValueRef);

let counter = 0;

decrementRef.addEventListener("click", countDecrement);
function countDecrement() {
  counter -= 1;
  counterValueRef.textContent = counter;
}

incrementRef.addEventListener("click", countIncrement);
function countIncrement() {
  counter += 1;
  counterValueRef.textContent = counter;
}
