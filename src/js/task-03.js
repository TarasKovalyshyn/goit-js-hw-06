const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallaryRef = document.querySelector(".gallery");
// gallaryRef.classList.add("js__gallary__style");

const listItemsRef = images.map(({ url, alt }) => {
  const itemRef = document.createElement("li");
  // itemRef.classList.add("gallery__item");
  const linkRef = document.createElement("a");
  linkRef.href = "#";
  const imgRef = document.createElement("img");
  imgRef.src = url;
  imgRef.alt = alt;
  itemRef.style.cssText = 
  `display: flex;
  flex-direction = column;
  list-style: none;  
  margin-bottom: 20px;
  `;
  itemRef.append(linkRef);
  linkRef.append(imgRef);

  return itemRef;
});

gallaryRef.append(...listItemsRef);
