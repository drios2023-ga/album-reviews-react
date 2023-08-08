import { useState, useEffect } from "react";
import { createReview } from "../../utilities/reviews-service";
import { useNavigate } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./NewReview.css";

export default function NewReview({getAllReviews}){
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const[newReview, setNewReview] = useState({
        title: "",
        artist: "",
        reviewDate: startDate.getFullYear() 
                    + '-' +  ((startDate.getMonth() > 8) ? (startDate.getMonth() + 1) : ('0' + (startDate.getMonth() + 1))) 
                    + '-' + ((startDate.getDate() > 9) ? startDate.getDate() : ('0' + startDate.getDate())) + 'T05:00:00.000+00:00',       
        review:""
    });  

    async function handleNewReview(evt){
        evt.preventDefault();
        await createReview(newReview);
        navigate("/");
    }

    function handleChange(evt) {
        const reviewData = { ...newReview, [evt.target.name]: evt.target.value };
        setNewReview(reviewData);
      }

      const navigateHome = () => {
        navigate("/");
      };

    useEffect(()=>{
        getAllReviews();
    }, [getAllReviews])

    return(
        <>
        <h2>New Review</h2>
        <form onSubmit={handleNewReview}>
            <div className="form-contents">
                <div className="line-item">
                    <label>Title: </label>
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="line-item">
                    <label htmlFor="">Artist: </label>
                    <input
                        type="text"
                        name="artist"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="line-item">
                    <label htmlFor="">Review Date: </label>
                    <input
                        type="text"     
                        name="reviewDate"              
                        onChange={handleChange}
                        required
                    />                  
                </div>                

                <div className="line-item">
                    Review
                    <input
                        type="text"
                        name="review"
                        onChange={handleChange}
                        required
                    />  
                </div>
            </div>
            <div className="submit-button">
                <button type="submit">Add Review</button>
                <button onClick={navigateHome}>Close</button>
            </div>      
          
        </form>
      </>
    )
}