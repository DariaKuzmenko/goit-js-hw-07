import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const imageEl = document.querySelector(".gallery__image");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

console.log(galleryMarkup);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

const selectCard = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const modalImg = event.target.dataset.source;

  const modalOpen = createModal(modalImg);

  modalOpen.show();

  modalClose(modalOpen);
};

function createModal(modalImg) {
  return basicLightbox.create(`
    <img src="${modalImg}" width="1280">
`);
}

function modalClose(modalOpen) {
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      modalOpen.close();
      document.removeEventListener("keydown", modalClose);
    }
  });
}

galleryEl.addEventListener("click", selectCard);
