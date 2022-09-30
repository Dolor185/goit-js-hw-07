import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')
const elements = galleryItems.map((image)=> `<li class= "gallery__item"> <a class="gallery__item" href="${image.original}">
<img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a></li>`
).join('')
galleryEl.insertAdjacentHTML("afterbegin", elements);
const lightbox= new SimpleLightbox('.gallery__item', {
    captionsData : 'alt',
    captionsDelay : 250,
})