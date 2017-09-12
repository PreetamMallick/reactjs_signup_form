import React from "react";
import { render } from "react-dom";
import 'babel-polyfill';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from '../css/custom.css';
import MdIconPack from 'react-icons/lib/md';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { AutoComplete, RadioButtonGroup, SelectField, TextField, Toggle } from 'redux-form-material-ui';

import { SignUp } from "./components/signup";
import { Root } from "./components/root";
import { About } from "./components/about";

class App extends React.Component {
	render() {
		return(
			<Router>
				<div>
		      		<Route exact path="/" component={SignUp} />
		      		<Route path="/root" component={Root} />
		      		<Route path="/about" component={About} />
		      	</div>
		   </Router >
		);
	}
}

render(<App/>, window.document.getElementById("app"));