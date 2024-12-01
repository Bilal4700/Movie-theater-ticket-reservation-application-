import "../Styles/Booking.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FightClub from "../movies_img/FightClub.jpg";
import Inception from "../movies_img/Inception.jpg";
import Venom from "../movies_img/Venom.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair } from "@fortawesome/free-solid-svg-icons";

const imageMap = {
	FightClub: FightClub,
	Inception: Inception,
	Venom: Venom,
};

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

	//for Seat map functinos start here

	const [selectedSeats, setSelectedSeats] = useState('1,3,5,100');
	const rows = 5;
	const columns = 10;

	// Function to fetch selected seats from the backend
	const fetchSelectedSeats = () => {

  };

	useEffect(() => {
		fetchSelectedSeats();
	}, []);

	const handleSeatClick = () => {

  };

	const renderSeats = () => {
        const seatsArray = selectedSeats.split(',').map(Number);
        const rows = 5;
        const columns = 10;
        const seats = [];
        let seatNumber = 1;

        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < columns; j++) {
                const isSelected = seatsArray.includes(seatNumber);

                let title;
                if (isSelected) {
                    title = `Seat ${seatNumber} selected`;
                } else {
                    title = `Seat ${seatNumber} available`;
                }

                let seatClass;
                if (isSelected) {
                    seatClass = 'seat selected';
                } else {
                    seatClass = 'seat';
                }

                row.push(
                    <div
                        key={seatNumber}
                        className={seatClass}
                        // eslint-disable-next-line no-loop-func
                        onClick={() => {
                            if (!isSelected) {
                                handleSeatClick(seatNumber);
                            }
                        }}
                        title={title}
                    >
                        <FontAwesomeIcon icon={faChair} />
                        <span>{seatNumber}</span>
                    </div>
                );
                seatNumber++;
            }
            seats.push(<div className="row" key={i}>{row}</div>);
        }

        return seats;
    };

	return (
		<div className="container">
			<div className="movie-image">
				<img className="movie-poster" src={imageMap[movie]} alt={movie} />
			</div>
			<h1 className="title">🎬 {movie}</h1>
			<p className="message">Book Your Tickets Now!</p>
			<div className="movie-details">
				<p>
					<strong>Date:</strong> {movieDetails.date}
				</p>
				<p>
					<strong>Time:</strong> {movieDetails.time}
				</p>
			</div>

			<div className="seat-map">
				<h2>Seat Map</h2>
				{renderSeats()}
			</div>
		</div>
	);
}

export default Booking;
