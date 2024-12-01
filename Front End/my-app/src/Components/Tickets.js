import React, { useState, useEffect } from "react";
import "../Styles/Tickets.css";
import FightClub from "../movies_img/FightClub.jpg";
import Inception from "../movies_img/Inception.jpg";
import Venom from "../movies_img/Venom.jpg";
import Balistic from "../movies_img/Balistic.jpg";
import Uprising from "../movies_img/Uprising.jpg";
import TakeCover from "../movies_img/TakeCover.jpg";
import { useNavigate } from "react-router-dom";



function Tickets() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    setUserEmail(email);
  }, []);


  const handleClick = (movie_name) =>{
    navigate(`/Tickets/${movie_name  }`);
  }
  return (
    <div className="tickets-container">
      <h1 className="header"> Movies Available for Tickets</h1>

      <div className="movie-cards-container">

      {/* Public Users */}

      <div className="movie-card">
        <img className="movie-poster" src={FightClub} alt="Fight Club" onClick={() => handleClick("FightClub")}/>
        <h2 className="movie-title">Fight Club</h2>
      </div>

      <div className="movie-card">
        <img className="movie-poster" src={Inception} alt="Inception" onClick={() => handleClick("Inception")} />
        <h2 className="movie-title">Inception</h2>
      </div>

      <div className="movie-card">
        <img className="movie-poster" src={Venom} alt="Venom" onClick={() => handleClick("Venom")}/>
        <h2 className="movie-title">Venom</h2>
      </div>

      {/* Regestered Users */}

      { userEmail && (
        <>
          <div className="movie-card">
            <img className="movie-poster" src={Balistic} alt="Balistic" onClick={() => handleClick("Balistic")}/>
            <h2 className="movie-title">Balistic</h2>
          </div>

          <div className="movie-card">
            <img className="movie-poster" src={Uprising} alt="Uprising" onClick={() => handleClick("Uprising")}/>
            <h2 className="movie-title">Uprising</h2>
          </div>
        
          <div className="movie-card">
            <img className="movie-poster" src={TakeCover} alt="TakeCover" onClick={() => handleClick("TakeCover")}/>
            <h2 className="movie-title">TakeCover</h2>
          </div>
        </>
      )}
      </div>
    </div>
  );
}



export default Tickets;