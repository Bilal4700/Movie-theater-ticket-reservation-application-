import Header from "./Components/Header";
import Home from "./Components/Home";
import React, { useEffect, useState } from "react";
import Tickets from "./Components/Tickets"
import Account from "./Components/Account"
import UserDashboard from "./Components/UserDashboard"
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(() => {
		const userEmail = localStorage.getItem("userEmail");
		if (userEmail) {
		  setIsLoggedIn(true);
		} else {
		  setIsLoggedIn(false);
		}
	  }, []);
	
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<Header />
					<Home />
				</>
			),
		},
    {
			path: "/Tickets",
			element: (
				<>
					<Header />
					<Tickets />
				</>
			),
		},
    {
			path: "/Account",
			element: (
				<>
        	<Header />
					<Account />
				</>
			),
		},
		{
			path: "/user-dashboard",
			element: isLoggedIn ? (
				<>
				  <Header />
				  <UserDashboard /> {/* User Dashboard for logged-in users */}
				</>
			  ) : (
				<>
				  <Header />
				  <Home /> {/* Redirect to Home if not logged in */}
				</>
			  ),
			},
	]);

	

	return (
        <div className="App">
           <RouterProvider router={router} />
        </div>
    );
}

export default App;
