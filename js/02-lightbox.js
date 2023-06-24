import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElement = document.querySelector(".gallery");

function createMarkupItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join("");
}
galleryElement.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems));

let lightbox = new SimpleLightbox(".gallery__item a", {
  captionsData: `alt`,
  captionDelay: 250,
});
