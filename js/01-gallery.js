import { galleryItems } from './gallery-items.js';

console.log(galleryItems);


// =================== search link div-gallery ========================

const galleryContainer = document.querySelector("div.gallery");
// galleryContainer.addEventListener('click', onClickMarcup);

// ===================function add div/a/img/-card=====================

galleryContainer.insertAdjacentHTML("beforeend", createGalleryItemsMarkup());

// ================= create ele gellery ===============================
function createGalleryItemsMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", openCardGalleryClick);

const modal = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);

function openCardGalleryClick(evt) {
  evt.preventDefault();
  const imgCard = evt.target.classList.contains("gallery__image");
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
// ================== open/close-lightbox ==============================
  const modal = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`,
    {
      onShow: (modal) => {
        document.addEventListener("keydown", onEscapeButton);
      },

      onClose: (modal) => {
        document.removeEventListener("keydown", onEscapeButton);
      },
    }
  );

  modal.show();
// ================= function-key-checks-escape=========================
    
  function onEscapeButton(evt) {
    if (evt.key === "Escape") {
      modal.close();
    }
  }
}

// ======================  2v  ========================================

// galleryItems.map(({ preview, original, description }) => {
//     const div = document.createElement('div')
//     div.classList.add("gallery__item");
//     galleryContainer.append(div);
//     const a = document.createElement('a');
//     a.href = "large-image.jpg";
//     a.classList.add("gallery__link");
//     div.append(a);
//     const img = document.createElement('img');
//     img.classList.add("gallery__image");
//     img.src = preview;
//     img.setAttribute("data-source", original);
//     img.alt = description;
//     a.append(img);
// });
