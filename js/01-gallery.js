import { galleryItems } from './gallery-items.js';
// Change code below this line



 const galleryEl = document.querySelector('.gallery')
 galleryEl.addEventListener('click', selectImg)
 function selectImg(ev) {
    if(ev.target.nodeName !== "IMG"){
        return
    }
    const instance = basicLightbox.create(`
    <img src="${ev.target.dataset.source}" width="800" height="600">
`)
   instance.show()
 }
 
 const elements = galleryItems.map((image)=> `<li class= "gallery__item"> <img class = "gallery__image" src = "${image.preview}" data-source="${image.original}" alt= "${image.description}"/></li>`
).join('')


 galleryEl.insertAdjacentHTML("afterbegin", elements);