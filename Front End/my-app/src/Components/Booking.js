import React from "react";
import "../Styles/Booking.css"
import { useParams } from "react-router-dom";

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
  
    return (
      <div className="container">
        <div className="movie-image">
          <img
            className="movie-poster"
            src={imageMap[movie] }
            alt={movie}
          />
        </div>
        <h1 className="title">🎬 {movie}</h1>
        <p className="message">Do your booking</p>
      </div>
    );
  }
  
  export default Booking;
  

