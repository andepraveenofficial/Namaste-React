import RestaurantCard from './RestaurantCard';
import { swiggy_api_URL } from '../utils/constants';

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

	if (listOfRestaurants.length === 0) {
		return <h1>Loading....</h1>;
	}

	return (
		<div className="body">
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						console.log('fiter data');
						/*
						// Filter logic
						const filteredList = resList.filter(
							(res) =>
								rating > 4,
						);
						console.log(filteredList);
						setListOfRestaurants(filteredList);
						*/
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
