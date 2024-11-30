
import "../Styles/Booking.css"
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import FightClub from "../movies_img/FightClub.jpg";
import Inception from "../movies_img/Inception.jpg";
import Venom from "../movies_img/Venom.jpg";

const imageMap = {
  FightClub: FightClub,
  Inception: Inception,
  Venom: Venom,
}
function Booking() {
  const { movie } = useParams(); 
  const [movieDetails, setMovieDetails] = useState({ date: "", time: "" });

 
  const fetchMovieDetails = () => {
    fetch(`http://localhost:8080/Movies/${movie}`)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data)) 
      .catch((error) => console.log("Error fetching movie details:", error));
  };

  useEffect(() => {
    fetchMovieDetails(); 
  }, [movie]);

  return (
    <div className="container">
      <div className="movie-image">
        <img className="movie-poster" src={imageMap[movie]} alt={movie} />
      </div>
      <h1 className="title">🎬 {movie}</h1>
      <p className="message">Do your booking</p>
      <div className="movie-details">
        <p>
          <strong>Date:</strong> {movieDetails.date}
        </p>
        <p>
          <strong>Time:</strong> {movieDetails.time}
        </p>
      </div>
    </div>
  );
}

export default Booking;
  

