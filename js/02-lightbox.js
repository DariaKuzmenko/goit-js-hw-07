import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");
console.log(galleryMarkup);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

const gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  docClose: true,
});
