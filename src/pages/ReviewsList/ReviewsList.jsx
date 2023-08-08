import ReviewCard from "../../components/ReviewCard/ReviewCard"

//here we simply map the reviews object from app.js to ReviewCard
export default function ReviewsList({reviews}){
    return(
      <div>
          <ul>
          {reviews.map((r, idx) => (
            <ReviewCard
              id={r.id}
              reviews={r}
              title={r.title}
              artist={r.artist}
              reviewDate={r.reviewDate}
              review={r.review}
              key={idx}
            />
          ))}
        </ul>      
      </div>  
    )
}