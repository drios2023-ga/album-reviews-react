import sendRequest from './send-request';
//const BASE_URL = '/albums'
const BASE_URL = 'https://album-reviews-7bc46722d23a.herokuapp.com/albums';

export async function getReviews() {
  return sendRequest(BASE_URL);
}

export async function getOneReview(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function newReview(formData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', formData);
}

export async function deleteReview(id){
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function updateReview(formData){
  const id  = formData.id;
  return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', formData);
}