import React from 'react';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API_URL } from '../utils/constants.js';

const RestaurantMenu = () => {
	const [resInfo, setResInfo] = useState(null);

	const params = useParams();
	console.log(params);
	const { resId } = params;

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const response = await fetch(MENU_API_URL + resId);
		const data = await response.json();
		console.log(data);
		setResInfo(data);
	};
	if (resInfo === null) {
		return <Shimmer />;
	}
	return (
		<div>
			<h1>RestaurantMenu</h1>
			<p>Dynamic Route</p>
		</div>
	);
};

export default RestaurantMenu;
