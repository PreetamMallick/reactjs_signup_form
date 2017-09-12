import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import store from './store';
import WizardForm from './WizardForm';
import showResults from './showResults';

export class SignUp extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return(
			<div className="signup-box">
				<Provider store={store}>
			    	<div>
			      		
			      		<WizardForm onSubmit={showResults} />
			      		
			    	</div>
				</Provider>
			</div>
		);
	}
}