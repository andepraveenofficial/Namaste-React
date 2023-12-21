import React, { Component } from 'react';

class UserClass extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = { count1: 0, count2: 0 };
	}

	render() {
		const { name, location } = this.props;
		const { count1, count2 } = this.state;
		return (
			<div className="user-card">
				<h1>count1 : {count1}</h1>
				<button
					onClick={() => {
						console.log('button click');
						this.setState((prev) => ({
							count1: prev.count1 + 1,
						}));
					}}
				>
					count1
				</button>
				<h1>count2 : {count2}</h1>
				<button
					onClick={() =>
						this.setState({ count2: this.state.count2 + 1 })
					}
				>
					count2
				</button>
				<h2>Name : {name}</h2>
				<h3>Location : {location}</h3>
				<h4>Contact : @akshaymarch7</h4>
			</div>
		);
	}
}

export default UserClass;
