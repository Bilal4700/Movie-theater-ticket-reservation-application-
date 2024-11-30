import React, { useState, useEffect } from "react";
import "../Styles/Home.css";

function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch("http://localhost:8080/Movies")
      .then((res) => {
        if (res.ok) {
          console.log("Fetch Successful");
          return res.json();
        } else {
          console.log("Fetch Unsuccessful");
        }
      })
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.log("Error"));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="Home">
      <div>
        <h1>{movies[0]?.title || "Loading..."}</h1>
      </div>
    </div>
  );
}

export default Home;