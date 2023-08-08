import { useEffect, useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import { getOneReview, updateReview } from "../../utilities/reviews-service";

export default function EditReview(){
    const { id } = useParams();
    const [review, setReview] = useState({});
    const [currentReview, setCurrentReview] = useState({});
    const navigate = useNavigate();


    async function getReview(){
      const response = await getOneReview(id);
      setReview(response);
      setCurrentReview(response);
      //console.log(review);
    }

    async function handleSubmit(evt) {
            evt.preventDefault();
            //console.log(currentReview);
            await updateReview(currentReview);
            getReview();
            navigate("/");
      }
    
    function handleChange(evt) {
        const updatedReviewData = {
            ...currentReview,
            [evt.target.name]: evt.target.value,
          };
          setCurrentReview(updatedReviewData);    
      }

      const navigateHome = () => {
        navigate('/');
      };

    useEffect(()=>{
        getReview();
    }, [])


    console.log(review);
    return(    
        
        <form className="item-form" onSubmit={handleSubmit}>
        <p>test edit {id}</p>
        <input
          type="text"
          name="title"
          defaultValue={review.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="artist"
          defaultValue={review.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          name="review"
          defaultValue={review.review}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <button onClick={navigateHome}>Close</button>
      </form>



    );

}