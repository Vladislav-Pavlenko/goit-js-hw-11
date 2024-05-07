import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function fetchImage(searchValue) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '43757343-ba5778b701f459784bea5ede7';
  const params = `?key=${API_KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(`${BASE_URL}${params}`).then(response => {
    // if (response) {
    //   iziToast.show({
    //     message:
    //       'Sorry, there are no images matching your search query. Please try again!',
    //     backgroundColor: 'red',
    //     icon: '../img/error.png',
    //     color: 'white',
    //   });
    // }
    console.log(response.data.hits);
  });
}
// fetchImage('hello');
