const categoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach((item) => {
  const titleRef = item.querySelector("h2");
  const itemsRef = item.querySelectorAll("li");
  console.log(`Category: ${titleRef.textContent}`);
  console.log(`Elements: ${itemsRef.length}`);
});
