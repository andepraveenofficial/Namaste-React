import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';

import { useState } from 'react';

const Body = () => {
	console.log('Body Component');
	// Local State Variable - Super powerful variable
	// const [state, setState] = useState(defaultValue)
	/*
	const arr = useState(resList);
	const listOfRestaurants = arr[0];
	const setListOfRestaurants = arr[1];
	*/
	const [listOfRestaurants, setListOfRestaurants] = useState(resList);

	// Normal JS Variable
	let listOfRestaurantsJS = [
		{
			'type': 'restaurant',
			'info': {
				'resId': 20437601,
				'name': 'Varalakshmi Tiffins',
				'image': {
					'url': 'https://b.zmtcdn.com/data/pictures/chains/9/18774129/3ca1d7ed2d900793bc47b29c7681e982_o2_featured_v2.jpg',
				},
				'o2FeaturedImage': {
					'url': 'https://b.zmtcdn.com/data/pictures/chains/9/18774129/3ca1d7ed2d900793bc47b29c7681e982_o2_featured_v2.jpg',
				},
				'rating': {
					'has_fake_reviews': 0,
					'aggregate_rating': '4.3',
					'rating_text': '4.3',
					'rating_subtitle': 'Very Good',
					'rating_color': '5BA829',
					'votes': '3,575',
					'subtext': 'REVIEWS',
					'is_new': false,
				},
				'ratingNew': {
					'newlyOpenedObj': null,
					'suspiciousReviewObj': null,
					'ratings': {
						'DINING': {
							'rating_type': 'DINING',
							'rating': '',
							'reviewCount': '3',
							'reviewTextSmall': '3 Reviews',
							'subtext': 'Does not offer Dining',
							'color': '',
							'ratingV2': '-',
							'subtitle': 'DINING',
							'sideSubTitle': 'Dining Reviews',
							'bgColorV2': {
								'type': 'grey',
								'tint': '500',
							},
						},
						'DELIVERY': {
							'rating_type': 'DELIVERY',
							'rating': '4.3',
							'reviewCount': '3,572',
							'reviewTextSmall': '3,572 Reviews',
							'subtext': '3,572 Delivery Reviews',
							'color': '#E23744',
							'ratingV2': '4.3',
							'subtitle': 'DELIVERY',
							'sideSubTitle': 'Delivery Reviews',
							'bgColorV2': {
								'type': 'green',
								'tint': '700',
							},
							'newOnDelivery': false,
						},
					},
				},
				'cft': {
					'text': '\u20b9200 for two',
				},
				'cfo': {
					'text': '\u20b9100 for one',
				},
				'locality': {
					'name': 'Kukatpally, Hyderabad',
					'address': 'Shop E2 & E3, Plot 248, Kukatpally, Hyderabad',
					'localityUrl': 'hyderabad/kukatpally-restaurants',
				},
				'timing': {
					'text': 'Closes in 1 hour 53 minutes',
					'color': '#e5521f',
				},
				'cuisine': [
					{
						'deeplink':
							'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D',
						'url': 'https://www.zomato.com/hyderabad/restaurants/south-indian/',
						'name': 'South Indian',
					},
				],
				'should_ban_ugc': false,
				'costText': {
					'text': '\u20b9100 for one',
				},
			},
			'order': {
				'deliveryTime': '28 min',
				'isServiceable': true,
				'hasOnlineOrdering': true,
				'actionInfo': {
					'text': 'Order Now',
					'clickUrl':
						'/hyderabad/varalakshmi-tiffins-kukatpally/order',
				},
			},
			'gold': [],
			'takeaway': [],
			'cardAction': {
				'text': '',
				'clickUrl': '/hyderabad/varalakshmi-tiffins-kukatpally/order',
				'clickActionDeeplink': '',
			},
			'distance': '1.6 km',
			'isPromoted': false,
			'promotedText': '',
			'trackingData': [
				{
					'table_name': 'zsearch_events_log',
					'payload':
						'{"search_id":"1aac8822-5a00-4ebf-a755-775d75cd5f43","location_type":"delivery_cell","location_id":"4308697908087095296","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20437601","element_type":"listing","rank":1}',
					'event_names': {
						'tap': '{"action":"tap"}',
						'impression': '{"action":"impression"}',
					},
				},
			],
			'allCTA': [],
			'promoOffer': '',
			'checkBulkOffers': true,
			'bulkOffers': [
				{
					'text': '50% OFF',
					'color': {
						'tint': '500',
						'type': 'blue',
					},
				},
			],
			'isDisabled': false,
			'bottomContainers': [],
		},
		{
			'type': 'restaurant',
			'info': {
				'resId': 20263749,
				'name': 'Ram Ki Bandi',
				'image': {
					'url': 'https://b.zmtcdn.com/data/pictures/chains/1/92651/ce899d6034c29487c1a1f0c9552f6170_o2_featured_v2.jpg',
				},
				'o2FeaturedImage': {
					'url': 'https://b.zmtcdn.com/data/pictures/chains/1/92651/ce899d6034c29487c1a1f0c9552f6170_o2_featured_v2.jpg',
				},
				'rating': {
					'has_fake_reviews': 0,
					'aggregate_rating': '3.1',
					'rating_text': '3.1',
					'rating_subtitle': 'Average',
					'rating_color': 'CDD614',
					'votes': '3,074',
					'subtext': 'REVIEWS',
					'is_new': false,
				},
				'ratingNew': {
					'newlyOpenedObj': null,
					'suspiciousReviewObj': null,
					'ratings': {
						'DINING': {
							'rating_type': 'DINING',
							'rating': '2.1',
							'reviewCount': '11',
							'reviewTextSmall': '11 Reviews',
							'subtext': '11 Dining Reviews',
							'color': '#1C1C1C',
							'ratingV2': '2.1',
							'subtitle': 'DINING',
							'sideSubTitle': 'Dining Reviews',
							'bgColorV2': {
								'type': 'orange',
								'tint': '300',
							},
						},
						'DELIVERY': {
							'rating_type': 'DELIVERY',
							'rating': '4.0',
							'reviewCount': '3,063',
							'reviewTextSmall': '3,063 Reviews',
							'subtext': '3,063 Delivery Reviews',
							'color': '#E23744',
							'ratingV2': '4.0',
							'subtitle': 'DELIVERY',
							'sideSubTitle': 'Delivery Reviews',
							'bgColorV2': {
								'type': 'green',
								'tint': '700',
							},
							'newOnDelivery': false,
						},
					},
				},
				'cft': {
					'text': '\u20b9400 for two',
				},
				'cfo': {
					'text': '\u20b9100 for one',
				},
				'locality': {
					'name': 'Nizampet, Hyderabad',
					'address':
						'Plot 11/12, Shop 4 & 5, Block-F2, Sainath Enclave, Gokul Plots, Venkataramana Colony, Serilingampally, Nizampet, Hyderabad',
					'localityUrl': 'hyderabad/nizampet-restaurants',
				},
				'timing': {
					'text': '',
					'color': '',
				},
				'cuisine': [
					{
						'deeplink':
							'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D',
						'url': 'https://www.zomato.com/hyderabad/restaurants/south-indian/',
						'name': 'South Indian',
					},
				],
				'should_ban_ugc': false,
				'costText': {
					'text': '\u20b9100 for one',
				},
			},
			'order': {
				'deliveryTime': '30 min',
				'isServiceable': true,
				'hasOnlineOrdering': true,
				'actionInfo': {
					'text': 'Order Now',
					'clickUrl': '/hyderabad/ram-ki-bandi-nizampet/order',
				},
			},
			'gold': [],
			'takeaway': [],
			'cardAction': {
				'text': '',
				'clickUrl': '/hyderabad/ram-ki-bandi-nizampet/order',
				'clickActionDeeplink': '',
			},
			'distance': '2.6 km',
			'isPromoted': false,
			'promotedText': '',
			'trackingData': [
				{
					'table_name': 'zsearch_events_log',
					'payload':
						'{"search_id":"1aac8822-5a00-4ebf-a755-775d75cd5f43","location_type":"delivery_cell","location_id":"4308697908087095296","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20263749","element_type":"listing","rank":2}',
					'event_names': {
						'tap': '{"action":"tap"}',
						'impression': '{"action":"impression"}',
					},
				},
			],
			'allCTA': [],
			'promoOffer': '',
			'checkBulkOffers': true,
			'bulkOffers': [
				{
					'text': '50% OFF',
					'color': {
						'tint': '500',
						'type': 'blue',
					},
				},
			],
			'isDisabled': false,
			'bottomContainers': [],
		},
	];

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
