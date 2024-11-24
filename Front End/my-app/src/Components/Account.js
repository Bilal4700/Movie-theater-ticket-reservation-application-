import React, { useState } from "react";
import "../Styles/Account.css";

function Account() {
	// State variable to manage login popup visibility
	const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);

	// signup button handler
	const handleSignupSubmit = () => {
		alert("Account created successfully!");
	};

	// login button handeler 
	const handleLoginSubmit = () => {
		alert("Login successful!");
		closeLoginPopup(); // Close popup after successful login
	};

	// Handlers for managing login popup visibility
	const openLoginPopup = () => setIsLoginPopupVisible(true);
	const closeLoginPopup = () => setIsLoginPopupVisible(false);










	// JSX For login and Signup
	// function for LoginPop up 
	const renderLoginPopup = () => {
		if (!isLoginPopupVisible) return null;

		return (
			<div className="login-popup">
				<div className="login-popup-content">
					<h2>Login</h2>
					<form onSubmit={handleLoginSubmit}>
						<div className="form-group">
							<label htmlFor="login-email">Email</label>
							<input
								type="email"
								id="login-email"
								placeholder="Enter your email"
								required
							/>
							<label htmlFor="login-password">Password</label>
							<input
								type="password"
								id="login-password"
								placeholder="Enter your password"
								required
							/>
						</div>
						<button type="submit" className="submit-button">
							Login
						</button>
					</form>
					<button className="close-popup" onClick={closeLoginPopup}>
						Close
					</button>
				</div>
			</div>
		);
	};

	return (
		<div className="Account">
			<div className="Account-body">
				<h2>Sign Up</h2>
				<form className="account-form" onSubmit={handleSignupSubmit}>
					<div className="form-group">
						<label htmlFor="name">Full Name</label>
						<input
							type="text"
							id="name"
							placeholder="Enter your full name"
							required
						/>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							placeholder="Enter your email"
							required
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							placeholder="Enter your password"
							required
						/>
					</div>
					<button type="submit" className="submit-button">
						Sign Up
					</button>
				</form>
				<p className="login-link">
					Already have an account?{" "}
					<span onClick={openLoginPopup}>Login</span>
				</p>
			</div>

			{renderLoginPopup()}
		</div>
	);
}

export default Account;
