import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';

import { useState, useEffect } from 'react';

const Body = () => {
	console.log('Body Component');
	// Local State Variable - Super powerful variable
	const [listOfRestaurants, setListOfRestaurants] = useState(resList);

	// Mounting
	// useEffect(callback, dependencyArray)
	useEffect(() => console.log('Effect Hook called'), []);

	console.log('Line after useEffect');
	return (
		<div className="body">
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						// Filter logic
						const filteredList = resList.filter(
							(res) =>
								parseFloat(res.info.rating.rating_text) > 4,
						);
						console.log(filteredList);
						setListOfRestaurants(filteredList);
					}}
				>
					Top Rated Restaurant
				</button>
			</div>
			<div className="res-container">
				{listOfRestaurants.map((restaurant, index) => (
					<RestaurantCard
						key={/*index*/ restaurant.info.resId}
						resData={restaurant}
					/>
				))}
			</div>
		</div>
	);
};

export default Body;
