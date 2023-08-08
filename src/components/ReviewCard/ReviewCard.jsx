import dayjs from "dayjs"; //date formatting library

import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import album from '../../static/img/album.png'
import "./ReviewCard.css";

export default function ReviewCard({
    id,
    reviews,
    title,
    artist,
    reviewDate,
    review,
    key
}){

  let { AlbumId } = useParams();

  useEffect(()=>{
      AlbumId = id;
  }, [])

    return(
      <li>
        <div className="card-container">
          <div>
            <Link to={"/"+id + "/update"} >
              <div><img src={album} /></div>
            </Link>
            </div>            
            <div className="li-elements">
              {/* <div>id: {id}</div> */}
              <div>Album: {title}</div>
              <div>Artist: {artist}</div>
              <div>Date: {dayjs(reviewDate).format("MM/DD/YYYY")}</div>
              <div>{review}</div>
            </div>

        </div>
      </li>
    
    )

}