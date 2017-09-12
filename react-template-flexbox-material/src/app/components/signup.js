import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import store from './store';
import WizardForm from './WizardForm';
import showResults from './showResults';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialUiForm from './MaterialUiForm';

export class SignUp extends React.Component {

	render() {

		return(
			<div className="signup-box">
				<Provider store={store}>
			    	<div>
			      		<MuiThemeProvider muiTheme={getMuiTheme()}>
			      			<WizardForm onSubmit={showResults} />
			      		</MuiThemeProvider>
			    	</div>
				</Provider>
			</div>
		);
	}
}