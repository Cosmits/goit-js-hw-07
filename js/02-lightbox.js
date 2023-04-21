import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUlEl = document.querySelector('.gallery');
galleryUlEl.insertAdjacentHTML('beforeend', doGalleryList(galleryItems));

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    animationSpeed: 250,
});


//
//~ any functions 
//
function doGalleryList(arrGalleryItems) {
    return arrGalleryItems.map(({ preview, original, description }) => {
        //const { preview, origin, description } = el;
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    </li>`
    }).join('');
}
