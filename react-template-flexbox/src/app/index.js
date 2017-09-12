import React from "react";
import { render } from "react-dom";
import 'babel-polyfill';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from '../css/custom.css';
import MdIconPack from 'react-icons/lib/md';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { SignUp } from "./components/signup";

class App extends React.Component {
	render() {
		return(
			<Router>
				<div>
		      		<Route exact path="/" component={SignUp} />
		      	</div>
		   </Router >
		);
	}
}

render(<App/>, window.document.getElementById("app"));