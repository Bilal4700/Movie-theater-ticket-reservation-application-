import React from "react";
import "../Styles/Booking.css"
import { useParams } from "react-router-dom";

function Booking() {
    const { movie } = useParams();
  
    return (
      <div>
        <h1>Booking Page</h1>
        <p>You are booking a ticket for: <strong>{movie}</strong></p>
      </div>
    );
  }
  
  export default Booking;
  

