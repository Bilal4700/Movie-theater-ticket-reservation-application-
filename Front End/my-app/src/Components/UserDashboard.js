import React, { useState, useEffect } from "react";
import "../Styles/UserDashboard.css";

function UserDashboard() {
  const [user, setUser] = useState(null); // State to store user data

  useEffect(() => {
    // Get the logged-in user's email from localStorage
    const email = localStorage.getItem("userEmail");
    if (!email) {
      console.error("No user is logged in.");
      return;
    }

    // Fetch user details from the backend using the email
    fetch(`http://localhost:8080/users/email/${email}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch user data");
        }
      })
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
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
      </div>
    </div>
  );
}

export default UserDashboard;
