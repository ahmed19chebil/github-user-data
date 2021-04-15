import React, { Component } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

// Import Routes
import {  publicRoutes } from "./routes";
import AppRoute from "./routes/route";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}

	render() {

		return (
			<React.Fragment>
				<Router>
					<Switch>
						{publicRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								component={route.component}
								key={idx}
							/>
						))}
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		layout: state.Layout
	};
};

export default connect(mapStateToProps, null)(App);
