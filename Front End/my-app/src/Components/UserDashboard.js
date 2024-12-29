import React, { useState, useEffect } from "react";
import "../Styles/UserDashboard.css";

function UserDashboard() {
  const [user, setUser] = useState(null); 
  const [tickets, setTickets] = useState([]); 

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      console.error("No user is logged in.");
      return;
    }

    // Fetch user details
    fetch(`http://localhost:8080/users/email/${email}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch user data");
        }
      })
      .then((data) => {
        setUser(data);

        // Fetch user tickets
        return fetch(`http://localhost:8080/users/tickets/${email}`);
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch tickets");
        }
      })
      .then((ticketData) => {
        setTickets(ticketData); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleRefund = (ticket) => {
    const email = localStorage.getItem("userEmail");
    if (!email) {
      console.error("No user is logged in.");
      return;
    }

    // Extract movie and seat number from the ticket
    const parts = ticket.split(" Seat number ");
    const movie = parts[0];
    const seatNumber = parts[1];

    // Refund the user ticket
    fetch(`http://localhost:8080/users/refund/${email}/${movie}/${seatNumber}`, {
      method: "PUT",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to refund user ticket");
        }
        return res.text();
      })
      .then(() => {
        // Refund the movie seat
        return fetch(`http://localhost:8080/Movies/refund/${movie}/${seatNumber}`, {
          method: "PUT",
        });
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to refund movie seat");
        }
        return res.text();
      })
      .then(() => {
        // Remove the refunded ticket from the UI
        setTickets((prevTickets) =>
          prevTickets.filter((t) => t !== ticket)
        );
      })
      .catch((error) => {
        console.error("Error refunding ticket:", error);
      });
  };

  if (!user) {
    return <p>Loading user details...</p>;
  }

  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <h2>Welcome, {user.username}!</h2>
      </div>
      <div className="dashboard-content">
        <p><strong>Email:</strong> {user.email}</p>
        <h3>Your Tickets:</h3>
        {tickets.length > 0 ? (
          <ul className="tickets-list">
            {tickets.map((ticket, index) => (
              <li key={index}>
                {ticket}
                <button
                  className="refund-button"
                  onClick={() => handleRefund(ticket)}
                >
                  Refund
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>You have no tickets.</p>
        )}
      </div>
    </div>
  );
}

export default UserDashboard;
