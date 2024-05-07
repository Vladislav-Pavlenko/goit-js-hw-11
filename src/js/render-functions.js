export function renderMarkup(params, gallery) {
  const galleryMarkup = params.reduce((acc, img) => {
    acc += `<li>
    <a>
        <img src="${img.webformatURL}" alt="${img.tags}"  width="360"></a>
        <p>Likes <span></span>${img.likes}</span></p>
        <p>Views <span></span>${img.likes}</span></p>
        <p>Comments <span></span>${img.likes}</span></p>
        <p>Downloads <span></span>${img.likes}</span></p>
            </li>`;
  }, '');
  gallery.adjacentHTML('beforeend', galleryMarkup);
}
