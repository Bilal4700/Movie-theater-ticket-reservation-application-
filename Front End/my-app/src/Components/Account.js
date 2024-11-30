import React, { useState } from "react";
import "../Styles/Account.css";

function Account() {
	// State variable to manage login popup visibility
	const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);

	// signup button handler
	const handleSignupSubmit = (e) => {
		//Creating an object to get data from JSX

		e.preventDefault();
		const formData = new FormData(e.target);
		const SignupData = {
			username: formData.get("username"), // Use the 'name' attributes to fetch values
			email: formData.get("email"),
			password: formData.get("password"),
			ccn: formData.get("ccn"),
			exp: formData.get("exp"),
			cvv: formData.get("cvv"),
		  };
		console.log(SignupData);
		const confirmPassword = e.target.confirmPassword.value;
		if (SignupData.password !== confirmPassword) {
			console.error("Passwords do not match!");
			alert("Passwords do not match. Please try again."); 
			return; 
		}


		fetch("http://localhost:8080/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(SignupData),
		})
			.then((res) => {
				if (res.ok) {
					console.log("Signup Succesfull");
					alert("Signup Successfull!");
				} else {
					console.log("Signup Unsuccesfull");
					alert("Signup Unsuccessfull!");
				}
			})
			.catch((error) => console.log("Error"));
	};
	// login button handeler
	const handleLoginSubmit = (e) => {
		e.preventDefault();
		const loginData = {
			email: e.target.loginEmail.value,
			password: e.target.loginPassword.value,
		};

		fetch("http://localhost:8080/logged", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData),
		})
			.then((res) => {
				if (res.ok) {
					console.log("Login Succesfull");
					localStorage.setItem("userEmail" , loginData.email);
					window.location.href = "/user-dashboard";
				} else {
					console.log("Login Unsuccesfull");
					alert("Invalid username or password!");
				}
			})
			.catch((error) => console.log("Error"));
	};

	// Handlers for managing login popup visibility
	const openLoginPopup = () => setIsLoginPopupVisible(true);
	const closeLoginPopup = () => setIsLoginPopupVisible(false);

	// JSX For login and Signup Starts here

	// function for LoginPop up
	const renderLoginPopup = () => {
		if (!isLoginPopupVisible) return null;

		return (
			<div className="login-popup">
				<div className="login-popup-content">
					<h2>Login</h2>
					<form onSubmit={handleLoginSubmit}>
						<div className="form-group">
							<label htmlFor="loginEmail">Email</label>
							<input
								type="email"
								id="loginEmail"
								placeholder="Enter your email"
								required
							/>
							<label htmlFor="loginPassword">Password</label>
							<input
								type="password"
								id="loginPassword"
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
						<label htmlFor="username">User Name</label>
						<input
							type="text"
							id="username"
							name="username"
							placeholder="Enter your User Name"
							required
						/>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email"
							required
						/>

						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Enter your password"
							required
						/>

						<label htmlFor="confirmPassword">Password</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							placeholder="Confirm Password"
							required
						/>
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
			
					</div>
					<button type="submit" className="submit-button">
						Sign Up
					</button>
				</form>
				<p className="login-link">
					Already have an account? <span onClick={openLoginPopup}>Login</span>
				</p>
			</div>

			{renderLoginPopup()}
		</div>
	);
}

export default Account;
