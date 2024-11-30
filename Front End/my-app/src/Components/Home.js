import React, { useState, useEffect } from "react";
import "../Styles/Home.css";

import AnyoneButYou from "../movies_img/AnyoneButYou.jpg";
import Balistic from "../movies_img/Balistic.jpg";
import DoNotOpen from "../movies_img/DoNotOpen.jpg";
import FightClub from "../movies_img/FightClub.jpg";
import Gladiator2 from "../movies_img/Gladiator2.jpg";
import Inception from "../movies_img/Inception.jpg";
import Shooter from "../movies_img/Shooter.jpg";
import TakeCover from "../movies_img/TakeCover.jpg";
import Uprising from "../movies_img/Uprising.jpg";
import Venom from "../movies_img/Venom.jpg";

const imageMap = {
  AnyoneButYou: AnyoneButYou,
  Balistic: Balistic,
  DoNotOpen: DoNotOpen,
  FightClub: FightClub,
  Gladiator2: Gladiator2,
  Inception: Inception,
  Shooter: Shooter,
  TakeCover: TakeCover,
  Uprising: Uprising,
  Venom: Venom,
};

function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch("http://localhost:8080/Movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log("Error fetching movies:", error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="Home">
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img
              src={imageMap[movie.title] || "placeholder.jpg"}
              alt={movie.title || "Movie Poster"}
              className="movie-image"
            />
            <h2 className="movie-title">{movie.title || "Loading..."}</h2>
            <button className="book-ticket-button">Book Ticket</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
