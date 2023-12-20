import React, { Component } from 'react';

class UserClass extends Component {
	constructor(props) {
		super(props);
		console.log('UserClass Component');
		console.log('UserClass constructor method');
		this.state = {
			userInfo: {
				name: 'Dummy',
				location: 'Default',
				avatar_url: 'http://dummy_photo',
			},
			count: 0,
		};
	}

	async componentDidMount() {
		console.log('componentDidMount method');
		// API calls
		const response = await fetch(
			'https://api.github.com/users/andepraveenofficial',
		);
		const data = await response.json();
		console.log(data);

		this.setState({ userInfo: data });
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.count !== prevState.count) {
			console.log('componentDidUpdate method');
		}
	}

	componentWillUnmount() {
		console.log('componentWillUnmount method');
	}
	render() {
		console.log('UserClass render method');
		const { name, location, avatar_url } = this.state.userInfo;
		console.log(this.state.userInfo);
		// debugger;
		return (
			<div className="user-card">
				<img src={avatar_url} alt="avatar" />
				<h2>Name : {name}</h2>
				<h3>Location : {location}</h3>
				<h4>Contact : @akshaymarch7</h4>
				<h1>{this.state.count}</h1>
				<button
					onClick={() =>
						this.setState((prev) => ({ count: prev.count + 1 }))
					}
				>
					Button
				</button>
			</div>
		);
	}
}

export default UserClass;

/*

-----------MOUNTING------------
constructor
render (dummy data) 
    - <HTML Dummy>

componentDidMount 
    - <API call/>
	<this.setState>

----------UPDATE--------------
render (API data)	
	- <HTML newAPIdata>
componentDidUpdate
=============================	



*/
