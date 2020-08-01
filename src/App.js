import React, { Component } from "react";
import LandingRegister from "./pages/LandingRegister";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/css/style.css";
export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Route>
						<LandingRegister />
					</Route>
				</Router>
			</div>
		);
	}
}