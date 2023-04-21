import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUlEl = document.querySelector('.gallery');
let instance = '';
galleryUlEl.insertAdjacentHTML('beforeend', doGalleryList(galleryItems));

galleryUlEl.addEventListener('click', onClickGalleryItems);


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
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`
    }).join('');
}

function onClickGalleryItems(event) {
    event.preventDefault();

    const elNodeName = event.target.nodeName;
    if (elNodeName !== 'IMG') {
        return;
    }

    // console.dir(event.target.dataset.source);

    const original = event.target.dataset.source;
    instance = basicLightbox.create(
        `<div class="modal">
            <img src="${original}">
        </div>`
    );

    instance.show();
    document.addEventListener("keydown", onListenerEsc);
}

function onListenerEsc(event) {
    if (event.code !== "Escape") return;

    instance.close();
    document.removeEventListener("keydown", onListenerEsc);
}