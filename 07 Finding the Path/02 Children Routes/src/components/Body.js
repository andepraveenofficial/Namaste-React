import RestaurantCard from './RestaurantCard';
import { swiggy_api_URL } from '../utils/constants';
import Shimmer from './Shimmer';

import { useState, useEffect } from 'react';

const Body = () => {
	console.log('Body Component');
	// Local State Variable - Super powerful variable
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
		[],
	);
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
		// console.log(data);
		setListOfRestaurants(data);
		setFilteredListOfRestaurants(data);
	};

	// Conditional Rendering
	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<input
					type="search"
					className="search-box"
					placeholder="search"
					value={searchText}
					onChange={(event) => {
						setSearchText(event.target.value);
					}}
				/>
				<button
					className="filter-btn"
					onClick={() => {
						console.log('filter data');
						console.log(searchText);
						const filteredData = listOfRestaurants.filter((each) =>
							each.title
								.toLowerCase()
								.includes(searchText.toLowerCase()),
						);
						setFilteredListOfRestaurants(filteredData);
					}}
				>
					Search
				</button>
			</div>
			<div className="res-container">
				{filteredListOfRestaurants.map((restaurant, index) => (
					<RestaurantCard key={restaurant.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
