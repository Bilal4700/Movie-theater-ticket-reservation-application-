import React from "react";
import "../Styles/Header.css";
import { NavLink } from "react-router-dom";
import logo from "../images/Logo.png";
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
						Home
					</NavLink>
                    <NavLink to ="/Tickets">
                        Tickets
                    </NavLink>
                    <NavLink to="/Account">
                        Account
                    </NavLink>
				</div>
			</nav>
		</header>
	);
}