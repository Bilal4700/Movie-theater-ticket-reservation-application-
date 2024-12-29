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
              <li key={index}>{ticket}</li>
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
