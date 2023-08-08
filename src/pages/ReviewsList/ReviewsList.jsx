import ReviewCard from "../../components/ReviewCard/ReviewCard"

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