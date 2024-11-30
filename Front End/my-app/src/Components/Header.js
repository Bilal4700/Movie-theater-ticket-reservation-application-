import "../Styles/Header.css";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faUser, faHome, faSignOut} from "@fortawesome/free-solid-svg-icons";


export default function Header() {

	const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail"); // Remove user data from localStorage
    setIsLoggedIn(false); // Update the logged-in state
    window.location.href = "/"; // Redirect to home page
  };
	return (
		<header className="App-header">
			<nav className="navbar">
				<div className="nav-title">
                <img 
						src={logo} 
						alt="Logo" 
                        style={{ height: "50px", width: "auto" }} 
				/>
				</div>
				<div className="nav-links">
					<NavLink to="/">
                        <FontAwesomeIcon icon={faHome} style={{ marginRight: "8px" }} /> Home
					</NavLink>
                    <NavLink to ="/Tickets">
                        <FontAwesomeIcon icon={faTicket} style={{ marginRight: "8px" }} /> Tickets
                    </NavLink>
					{isLoggedIn? (
						<>
						<NavLink to = "/user-dashboard">
						<FontAwesomeIcon icon={faUser} style={{ marginRight: "8px" }} /> Profile
						</NavLink>
						 <button onClick={handleLogout}><FontAwesomeIcon icon={faSignOut} style={{ marginRight: "8px" }} />Logout</button>
						 </> 
					) : ( 
						<NavLink to="/Account">
                        <FontAwesomeIcon icon={faUser} style={{ marginRight: "8px" }} /> Account
                    </NavLink>
					) }
				</div>
			</nav>
		</header>
	);
}