import sendRequest from './send-request';
//const BASE_URL = '/albums'
const BASE_URL = 'http://localhost:8080/albums';

export async function getReviews() {
  return sendRequest(BASE_URL);

  // let obj = [
  //           {
  //             id: 1,
  //             title:"test title 1", 
  //             artist:"test artist 1", 
  //             reviewDate: "2023-08-04",
  //             review:"test review 1" },
            
  //           {
  //             id: 2,
  //             title:"test title 2", 
  //             artist:"test artist 2", 
  //             reviewDate: "2023-08-04",
  //             review:"test review 2" }            
  //           ];

  //return obj;
}

export async function getOneReview(id) {
  return sendRequest(`${BASE_URL}/${id}`);

//   let obj = [];
//   console.log(id);
//    if (id==='1'){
//         obj = 
//           {
//             id: 1,
//             title:"test title 1", 
//             artist:"test artist 1", 
//             //reviewDate: "2023-08-04T05:00:00.000+00:00",
//             reviewDate: "2023-08-04",
//             review:"test review 1" 
//           };           
        
//       } else {
//         obj = 
//           {
//             id: 2,
//             title:"test title 2", 
//             artist:"test artist 2", 
//             reviewDate: "2023-08-04",
//             review:"test review 2" 
//           };            
//     }
// return obj

}

export async function newReview(formData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', formData);
}

export async function deleteReview(id){
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function updateReview(formData){
  const id  = formData.id;
  console.log(formData);
  console.log(`${BASE_URL}/${id}/update`);
  return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', formData);
}