import RestaurantCard from './RestaurantCard';
import { swiggy_api_URL } from '../utils/constants';
import Shimmer from './Shimmer';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import onlineStatus from '../utils/useOnlineStatus';
import useOnlineStatus from '../utils/useOnlineStatus';

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

	const onlineStatus = useOnlineStatus();
	if (onlineStatus === false) return <h1>Check your Internet connection</h1>;

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
					<Link key={restaurant.id} to={'/restaurants/' + '1'}>
						<RestaurantCard resData={restaurant} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
