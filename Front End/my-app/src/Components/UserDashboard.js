import React, { useState, useEffect } from "react";
import "../Styles/UserDashboard.css";

function UserDashboard() {
  const [user, setUser] = useState(null); // State to store user data
  const username = "fateh.syedb"; // Replace with dynamic logic if needed

  useEffect(() => {
    // Fetch user details from the backend
    fetch(`http://localhost:8080/users/${username}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch user data");
        }
      })
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [username]);

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
