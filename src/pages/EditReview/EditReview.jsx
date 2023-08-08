import { useEffect, useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import { getOneReview, updateReview, deleteReview } from "../../utilities/reviews-service";
import "./EditReview.css";

export default function EditReview({getAllReviews}){
    const { id } = useParams();
    const [review, setReview] = useState({});
    const [currentReview, setCurrentReview] = useState({});
    const navigate = useNavigate();

    async function getReview(){
      const response = await getOneReview(id);
      setReview(response);
      setCurrentReview(response);
    }

    async function handleSubmit(evt) {
            evt.preventDefault();
            //console.log(currentReview);
            await updateReview(currentReview);
            getReview();
            getAllReviews();
            navigate("/");
      }
    
    function handleChange(evt) {
        const updatedReviewData = {
            ...currentReview,
            [evt.target.name]: evt.target.value,
          };
          console.log(updatedReviewData);
          setCurrentReview(updatedReviewData);    
      }

      const navigateHome = () => {
        navigate("/");
      };

     async function deleteThisReview(){
        await deleteReview(id);
        getAllReviews();        
        navigate("/");

      }

    useEffect(()=>{
        getReview();
        
    }, [])

    return(    
        <form onSubmit={handleSubmit}>
        <div className="form-contents">
          <div className="line-item">
            <label>Title: </label>
            <input
              type="text"
              name="title"
              defaultValue={review.title}
              onChange={handleChange}
            />
          </div>
          <div className="line-item">
            <label>Artist: </label>
            <input
              type="text"
              name="artist"
              defaultValue={review.artist}
              onChange={handleChange}
            />
          </div>
          <div className="line-item">
            <label>Review: </label>
            <textarea
              type="text"
              name="review"
              defaultValue={review.review}
              onChange={handleChange}
            />
          </div>
          <div className="submit-button">
                <button type="submit">Save Changes</button>
                <button onClick = {deleteThisReview}>Delete Review</button>
                <button onClick={navigateHome}>Close</button>
            </div>  
        </div>  
      </form>



    );

}