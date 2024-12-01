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

	const [selectedSeats, setSelectedSeats] = useState("1,5,7"); // putting values to check disable seats
	const [isPaymentPopupVisible, setIsPaymentPopupVisible] = useState(false);
    const [selectedSeatForPayment, setSelectedSeatForPayment] = useState(null);

	// Handlers for managing Payment popup visibility
	const openPaymentPopup = () => setIsPaymentPopupVisible(true);
	const closePaymentPopup = () => setIsPaymentPopupVisible(false);

	// Function to fetch selected seats from the backend
	const fetchSelectedSeats = () => {};

	useEffect(() => {
		fetchSelectedSeats();
	}, [selectedSeats]);

	const handleSeatClick = (seatNumber) => {

        // Store the selected seat and show the payment popup
        setSelectedSeatForPayment(seatNumber);
        console.log(` ${selectedSeatForPayment}`)
        openPaymentPopup();
    };

	const renderSeats = () => {
		const seatsArray = selectedSeats.split(",").map(Number);
		const rows = 5;
		const columns = 10;
		const seats = [];
		let seatNumber = 1;

		for (let i = 0; i < rows; i++) {
			const row = [];
			for (let j = 0; j < columns; j++) {
				const isSelected = seatsArray.includes(seatNumber);
				let seatClass;
				if (isSelected) {
					seatClass = "seat selected";
				} else {
					seatClass = "seat";
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

					>
						<FontAwesomeIcon icon={faChair} />
						<span>{seatNumber}</span>
					</div>
				);
				seatNumber++;
			}
			seats.push(
				<div className="row" key={i}>
					{row}
				</div>
			);
		}

		return seats;
	};

	const renderPaymentPopup = () => {
		if (!isPaymentPopupVisible) return null;

		return (
			<div className="Payment-popup">
				<div className="Payment-popup-content">
					<h2>Payment</h2>
					<form onSubmit={handlePaymentSubmit}>
						<label htmlFor="cnn">Credit Card Number</label>
						<input
							type="tel"
							id="ccn"
							name="ccn"
							placeholder="xxxx xxxx xxxx xxxx"
							inputMode="numeric"
							pattern="[0-9\s]{16}"
							maxLength="19"
							required
						/>
						<div className="payment-fields">
							<label htmlFor="exp">Exp</label>
							<input
								type="tel"
								id="exp"
								name="exp"
								placeholder="MM/YY"
								inputMode="numeric"
								pattern="(0[1-9]|1[0-2])\/\d{2}"
								maxLength="5"
								required
							/>

							<label htmlFor="cvv">CVV</label>
							<input
								type="tel"
								id="cvv"
								name="cvv"
								placeholder="xxx"
								inputMode="numeric"
								pattern="\d{3}"
								maxLength="3"
								required
							/>
						</div>
						<button type="submit" className="submit-button">
							Buy
						</button>
					</form>
					<button className="close-popup" onClick={closePaymentPopup}>
						Close
					</button>
				</div>
			</div>
		);
	};

	const handlePaymentSubmit = () => {
        console.log(`Submitting payment for seat ${selectedSeatForPayment}`);
        
        setSelectedSeatForPayment(null);
        closePaymentPopup();
        fetchSelectedSeats(); 
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
			{renderPaymentPopup()}
		</div>
	);
}

export default Booking;
