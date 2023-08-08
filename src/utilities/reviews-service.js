import * as reviewsAPI from './reviews-api';

export async function getReviews() {
  const token = await reviewsAPI.getReviews();
  return token
}

export async function getOneReview(id){
  const token = await reviewsAPI.getOneReview(id);
  return token
}

export async function createReview(formData){
  await reviewsAPI.newReview(formData);
}

export async function deleteReview(id){
  await reviewsAPI.deleteReview(id);
}

export async function updateReview(formData){
  await reviewsAPI.updateReview(formData);
}

