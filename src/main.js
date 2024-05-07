import { fetchImage } from './js/pixabay-api';
import './js/render-functions';

const refs = {
  formEL: document.querySelector('#form'),
  inputEL: document.querySelector('#image-input'),
};

function onFormSubmit(event) {
  event.preventDefault();
  const searchValue = refs.inputEL.value;
  fetchImage(searchValue);
}

refs.formEL.addEventListener('submit', onFormSubmit);
