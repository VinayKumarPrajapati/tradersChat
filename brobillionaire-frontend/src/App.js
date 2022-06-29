import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import LoginPage from "./authPages/loginPages/LoginPage";
import RegisterPage from "./authPages/registerPages/RegisterPage";
import Dashboard from "./Dashborad/dashboard";
import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/login">
						<LoginPage />
					</Route>
					<Route exact path="/register">
						<RegisterPage />
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
