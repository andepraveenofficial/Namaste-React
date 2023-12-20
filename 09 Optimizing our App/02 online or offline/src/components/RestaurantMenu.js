import React from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
	const params = useParams();
	console.log(params);
	const { resId } = params;
	const resInfo = useRestaurantMenu(resId);

	if (resInfo === null) {
		return <Shimmer />;
	}
	return (
		<div>
			<h1>RestaurantMenu</h1>
			<p>Dynamic Route</p>
			<p>{resInfo}</p>
		</div>
	);
};

export default RestaurantMenu;
