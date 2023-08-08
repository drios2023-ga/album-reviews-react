import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReviewsList from "./pages/ReviewsList/ReviewsList";
import EditReview from "./pages/EditReview/EditReview";
import NewReview from "./pages/NewReview/NewReview";
import { getReviews } from "./utilities/reviews-service";
import NavBar from "./components/NavBar/NavBar";

export default function App(){

  const [reviews, setReviews] = useState([]);

  const getAllReviews = async () => {
    const response = await getReviews();
    setReviews(response)
  }

  useEffect(()=>{

    getAllReviews();

  }, [])

  return(
    <main className="App">
    <>

    {/* <p>Hello </p> */}
    <NavBar></NavBar>
    <Routes>
      {/* route components in here */}
      <Route path="/" element={<ReviewsList reviews={reviews} />} />
      <Route path="/:id/update" element={<EditReview />}/>
      <Route path="/new" element={<NewReview />}/>
    </Routes>
  </>

  </main>
  )
}
