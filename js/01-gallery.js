import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElement = document.querySelector(".gallery");

function createMarkupItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}
galleryElement.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems));

galleryElement.addEventListener("click", handlerClickImg);

function handlerClickImg(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains("gallery__image")) {
    const target = evt.target;
    const imgSource = target.dataset.source;
    const instance = basicLightbox
      .create(
        `
    <img src="${imgSource}" width="800" height="600">
`
      )
      .show();
  }
}
