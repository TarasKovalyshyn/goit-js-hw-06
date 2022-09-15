const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = ingredients.map((element) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = `${element}`;
  itemRef.classList.add("item");

  return itemRef;
});

const ingredient = document.querySelector("ul");
ingredient.append(...ingredientsListRef);
