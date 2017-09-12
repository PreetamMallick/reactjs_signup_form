import React from "react";

import { Header } from "./header";
import { Home } from "./home";

export class Root extends React.Component {
	render() {
		return(
			<div>
				<Home/>
			</div>
		);
	}
}