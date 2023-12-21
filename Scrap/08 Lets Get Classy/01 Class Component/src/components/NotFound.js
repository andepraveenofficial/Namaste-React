import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
	// const error = useRouteError();
	// console.log(error);
	return (
		<div>
			<h1>NotFound</h1>
			<p>Something went wrong</p>
		</div>
	);
};

export default NotFound;
