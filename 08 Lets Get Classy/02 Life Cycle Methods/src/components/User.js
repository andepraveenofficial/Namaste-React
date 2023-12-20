import React from 'react';
import { useState } from 'react';

const User = ({ name }) => {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	return (
		<div className="user-card">
			<h1>count1 : {count1}</h1>
			<button onClick={() => setCount1((prev) => prev + 1)}>
				count1
			</button>
			<h1>count2 : {count2}</h1>

			<h2>Name : {name}</h2>
			<h3>Location : Dehradun</h3>
			<h4>Contact : @akshaymarch7</h4>
		</div>
	);
};

export default User;
