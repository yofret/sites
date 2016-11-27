// --------------------------------------------------
//  Dependencies
// --------------------------------------------------

	import React, { Component } from 'react';
	const one = require('./../images/one.jpg');

// --------------------------------------------------
//  React Class Component
// --------------------------------------------------
	
	class Main extends Component {

		// Component Life Cycle

		componentWillMount() {}

		componentDidMount() {}

		componentWillUpdate(nextProps, nextState) {}

		componentDidUpdate(prevProps, prevState) {}

		componentWillReceiveProps(nextProps) {}

		// Functions

		// Private Functions

		// render functions

		render() {
			return (
				<div>
					<h1>Hello React JS</h1>
					<p>Hi</p>
					<a>Holis</a>
					<img src={one}/>
				</div>
			);
		}
	}


	export default Main
	

