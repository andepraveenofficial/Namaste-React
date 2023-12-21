import React from 'react';
import UserClass from './UserClass';

import React, { Component } from 'react';

class About extends Component {
	constructor(props) {
		console.log('About Component');
		console.log('About constructor method');
		super(props);
	}

	componentDidMount() {
		// API call
		console.log('About componentDidMount method');
	}

	componentWillUnmount() {
		// Remove API calls
		// Clear timers
		console.log('About componentWillUnmount method');
	}

	render() {
		console.log('About render method');
		return (
			<div>
				<h1>About</h1>
				<h2>This is Namaste React Web Series</h2>
				<UserClass name="UserClass" location="Hyderabad" />
			</div>
		);
	}
}

/*
- Parent constructor
- Parent render

	- FirstChild constructor
	- FirstChild render
	- SecondChild constructor
	- SecondChild render

	- FirstChild componentDidMount
	- SecondChild componentDidMount
- Parent componentDidMount	


*/

export default About;
