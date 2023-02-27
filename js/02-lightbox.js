import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryContainer = document.querySelector("ul.gallery");
// ===================function add div/a/img/-card=====================

galleryContainer.insertAdjacentHTML(
  "beforeend",
  createGalleryItemsMarkup(galleryItems)
);
galleryContainer.addEventListener("click", openCardGalleryClick);
// ================= create ele gellery ===============================
function createGalleryItemsMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li> <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> </li>`;
    })
    .join("");
}

function openCardGalleryClick(evt) {
  evt.preventDefault();
  const imgCard = evt.target.classList.contains("gallery__image");
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  // ================== open/close-simplelightbox ==============================
  const modal = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  modal.show();
  // ================= function-key-checks-escape=========================

  function onEscapeButton(evt) {
    if (evt.key === "Escape") {
      modal.close();
    }
  }
}