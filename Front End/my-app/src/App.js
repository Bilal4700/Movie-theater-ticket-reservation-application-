import Header from "./Components/Header";
import Home from "./Components/Home";
import Tickets from "./Components/Tickets"
import Account from "./Components/Account"
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
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
	]);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
