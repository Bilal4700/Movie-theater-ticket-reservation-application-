import React from "react";
import "../Styles/Header.css";
import { NavLink } from "react-router-dom";
import logo from "../images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faUser, faHome } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
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
                    <NavLink to="/Account">
                        <FontAwesomeIcon icon={faUser} style={{ marginRight: "8px" }} /> Account
                    </NavLink>
				</div>
			</nav>
		</header>
	);
}