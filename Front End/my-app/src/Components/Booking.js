import "../Styles/Booking.css"
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FightClub from "../movies_img/FightClub.jpg";
import Inception from "../movies_img/Inception.jpg";
import Venom from "../movies_img/Venom.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChair} from "@fortawesome/free-solid-svg-icons";

const imageMap = {
  FightClub: FightClub,
  Inception: Inception,
  Venom: Venom,
}

const rows = 5; // Number of rows
const cols = 10;

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

      <div className="cinema-map">
      <h2>Cinema Seating</h2>
      <div className="cinema-seating">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="cinema-row">
            {Array.from({ length: cols }).map((_, colIndex) => (
              <div key={colIndex} className="cinema-chair">
                <FontAwesomeIcon
                  icon={faChair}
                  className="chair-icon"
                  title={`Chair ${rowIndex + 1}-${colIndex + 1}`}
                />
                <div className="cinema-seat-number">
                  {rowIndex + 1}-{colIndex + 1}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  
      
    </div>
  );
}

export default Booking;