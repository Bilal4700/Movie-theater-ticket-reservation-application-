import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const available_movies = ["FightClub", "Inception", "Shooter"];

  const fetchMovies = () => {
    fetch("http://localhost:8080/Movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      })
      .catch((error) => console.log("Error fetching movies:", error));
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(term)
    );
    setFilteredMovies(filtered);
  };

  const HandleClick = (movieTitle) => {
    if (available_movies.includes(movieTitle)) {
      navigate(`/Tickets/${movieTitle}`);
    } else {
      navigate(`/ComingSoon/${movieTitle}`);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="Home">
      <div className="Tickets">
        <div className="Search-Bar-Container">
          <h2 className="Search-Bar-Heading">
            Search:
            <input
              type="text"
              placeholder="Search Movies"
              className="Search-Input"
              value={searchTerm}
              onChange={handleSearch}
            />
          </h2>
        </div>
      </div>
      <div className="movie-grid">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img
              src={imageMap[movie.title]}
              alt={movie.title}
              className="movie-image"
            />
            <h2 className="movie-title">{movie.title || "Loading..."}</h2>
            <button
              className="book-ticket-button"
              onClick={() => HandleClick(movie.title)}
            >
              Book Ticket
            </button>
          </div>
        ))}
        {filteredMovies.length === 0 && (
          <p className="no-movies-message">No movies found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
