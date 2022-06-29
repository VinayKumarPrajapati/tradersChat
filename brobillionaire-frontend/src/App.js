import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Login from "./authPages/loginPages/LoginPage";
import Register from "./authPages/registerPages/RegisterPage";
import Dashboard from "./Dashborad/dashboard";
import AlertNotification from "./shared/components/AlertNotification";
import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/dashboard">
						<Dashboard />
					</Route>
					<Route path="/">
						<Redirect to="/dashboard" />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
