import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

// =================== search link div-gallery ========================

const galleryContainer = document.querySelector("ul.gallery");

// ===================function add div/a/img/-card=====================

galleryItems.map(({ preview, original, description }) => {
  const div = document.createElement("div");
  div.classList.add("gallery__item");
  galleryContainer.append(div);
  const a = document.createElement("a");
  a.href = "large-image.jpg";
  a.classList.add("gallery__link");
  div.append(a);
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = preview;
  img.setAttribute("data-source", original);
  img.alt = description;
  a.append(img);
});
