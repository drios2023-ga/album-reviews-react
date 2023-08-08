//import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import album from '../../static/img/album.png'
//import { getOneReview } from "../../utilities/reviews-api";

export default function ReviewCard({
    id,
    reviews,
    title,
    artist,
    reviewDate,
    review,
    key
}){

  //const [currentReview, setCurrentReview] = useState();
  let { AlbumId } = useParams();

  useEffect(()=>{
      AlbumId = id;
  }, [])

    return(
      <li>
        <div>
          <Link to={"/"+id + "/update"} >
            <div><img src={album} /></div>
          </Link>
          <div>
            <div>id: {id}</div>
            <div>Album: {title}</div>
            <div>Artist: {artist}</div>
            <div>Date: {reviewDate}</div>
            <div>{review}</div>
          </div>
        </div>
      </li>
    
    )

}