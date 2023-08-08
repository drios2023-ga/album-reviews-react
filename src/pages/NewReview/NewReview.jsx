import { useState } from "react";
import { createReview } from "../../utilities/reviews-service";
import { useNavigate } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function NewReview(){
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const[newReview, setNewReview] = useState({
        title: "test",
        artist: "test",
        reviewDate: startDate,
        review: "test"
    });


    async function handleNewReview(evt){
        evt.preventDefault();
        console.log(newReview);
        await createReview(newReview);

        //navigate("/");

    }

    function handleChange(evt) {
        const reviewData = { ...newReview, [evt.target.name]: evt.target.value };
        setNewReview(reviewData);
      }

    return(
        <>
        <h2>New To-Do</h2>
        <form onSubmit={handleNewReview}>
          <input
            type="text"
            value={newReview.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            value={newReview.artist}
            onChange={handleChange}
            required
          />
            <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />       
          <input
            type="text"
            value={newReview.review}
            onChange={handleChange}
            required
          />                    
          <button type="submit">Add Review</button>
        </form>
      </>
    )
}