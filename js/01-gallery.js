import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);

// =================== search link div-gallery ========================

const galleryContainer = document.querySelector('div.gallery');

// ===================function add div/a/img/-card=====================

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);


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

