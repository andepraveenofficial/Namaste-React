import RestaurantCard from './RestaurantCard';
import { swiggy_api_URL } from '../utils/constants';
import Shimmer from './Shimmer';

import { useState, useEffect } from 'react';

const Body = () => {
	console.log('Body Component');
	// Local State Variable - Super powerful variable
	const [listOfRestaurants, setListOfRestaurants] = useState([]);

	// Mounting
	// useEffect(callback, dependencyArray)
	useEffect(() => {
		console.log('Effect Hook called');
		fetchData();
	}, []);

	// Methods
	const fetchData = async () => {
		console.log('fetchData Method');
		const response = await fetch(swiggy_api_URL);
		const data = await response.json();
		console.log(data);
		setListOfRestaurants(data);
	};

	console.log('Body render');

	// Conditional Rendering
	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						console.log('fiter data');
					}}
				>
					Top Rated Restaurant
				</button>
			</div>
			<div className="res-container">
				{listOfRestaurants.map((restaurant, index) => (
					<RestaurantCard
						key={/*index*/ restaurant.id}
						resData={restaurant}
					/>
				))}
			</div>
		</div>
	);
};

export default Body;
