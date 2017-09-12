import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import showResults from './showResults';
import MaterialUiForm from './MaterialUiForm';

export class Home extends React.Component {
	render() {
		return(
			<div>
				<Provider store={store}>
				    <MuiThemeProvider muiTheme={getMuiTheme()}>
				      <div style={{ padding: 15 }}>
				        <h2>Material UI</h2>
				        <MaterialUiForm onSubmit={showResults} />
				        <Values form="MaterialUiForm" />
				      </div>
				    </MuiThemeProvider>
				</Provider>
			</div>
		);
	}
}