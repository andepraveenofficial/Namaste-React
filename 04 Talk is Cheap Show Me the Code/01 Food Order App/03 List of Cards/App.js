/* -----> Third Party Packages <----- */
import React from 'react';
import ReactDOM from 'react-dom/client';

/*
Header
	- Logo
	- Nav Items
Body
	- Search
	- RestaurantContainer
	- RestaurantCard
		- Img
		Name of Restaurant, Start rating, cuisine, delivery time
Footer	
	- Copyright
	- Links
	- Address
	- Contact
*/

/* -----> Components <----- */
const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJ8giiCmiHq5_yA_zwouIXEt0mkAkDyM-ww&usqp=CAU"
				/>
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

// Inline Styles
const styleCard = {
	backgroundColor: '#f0f0f0',
	color: 'black',
};

const RestaurantCard = (props) => {
	const { resData } = props;
	console.log(resData);
	console.log(resData.info);

	const cardObj = {
		name: resData?.info.name, // Optional Chaining
		cost: resData.info.costText.text,
		rating: resData.info.rating.rating_text,
		timing: resData.info.timing.text,
		image: resData.info.image.url,
	};

	const { name, cost, rating, timing, image } = cardObj;
	return (
		<div className="res-card" style={styleCard}>
			<img src={image} alt="res-logo" className="res-logo" />
			<h3>{name}</h3>
			<h4>{cost}</h4>
			<h4>{rating} stars</h4>
			<h4>{timing} timing</h4>
		</div>
	);
};

const resList = [
	{
		'type': 'restaurant',
		'info': {
			'resId': 20444101,
			'name': 'Red Bucket Biryani',
			'image': {
				'url': 'https://b.zmtcdn.com/data/pictures/0/20444100/b9d23c95876ec95a98d1f25c4a2e161f_o2_featured_v2.jpg',
			},
			'o2FeaturedImage': {
				'url': 'https://b.zmtcdn.com/data/pictures/0/20444100/b9d23c95876ec95a98d1f25c4a2e161f_o2_featured_v2.jpg',
			},
			'rating': {
				'has_fake_reviews': 0,
				'aggregate_rating': '3.5',
				'rating_text': '3.5',
				'rating_subtitle': 'Good',
				'rating_color': '9ACD32',
				'votes': '3,182',
				'subtext': 'REVIEWS',
				'is_new': false,
			},
			'ratingNew': {
				'newlyOpenedObj': null,
				'suspiciousReviewObj': null,
				'ratings': {
					'DINING': {
						'rating_type': 'DINING',
						'rating': '3.0',
						'reviewCount': '12',
						'reviewTextSmall': '12 Reviews',
						'subtext': '12 Dining Reviews',
						'color': '#1C1C1C',
						'ratingV2': '3.0',
						'subtitle': 'DINING',
						'sideSubTitle': 'Dining Reviews',
						'bgColorV2': {
							'type': 'green',
							'tint': '500',
						},
					},
					'DELIVERY': {
						'rating_type': 'DELIVERY',
						'rating': '4.0',
						'reviewCount': '3,170',
						'reviewTextSmall': '3,170 Reviews',
						'subtext': '3,170 Delivery Reviews',
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
				'text': '\u20b9500 for two',
			},
			'cfo': {
				'text': '\u20b9200 for one',
			},
			'locality': {
				'name': 'Madhapur, Hyderabad',
				'address':
					'Shop 5, Plot 816-817-818, Platinum Heights, Sri Swamy Ayyappa Society, 100 Feet Road, Near YSR Statue, Madhapur, Hyderabad',
				'localityUrl': 'hyderabad/madhapur-restaurants',
			},
			'timing': {
				'text': '',
				'color': '',
			},
			'cuisine': [
				{
					'deeplink':
						'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D',
					'url': 'https://www.zomato.com/hyderabad/restaurants/biryani/',
					'name': 'Biryani',
				},
			],
			'should_ban_ugc': false,
			'costText': {
				'text': '\u20b9200 for one',
			},
		},
		'order': {
			'deliveryTime': '30 min',
			'isServiceable': true,
			'hasOnlineOrdering': true,
			'actionInfo': {
				'text': 'Order Now',
				'clickUrl': '/hyderabad/red-bucket-biryani-madhapur/order',
			},
		},
		'gold': [],
		'takeaway': [],
		'cardAction': {
			'text': '',
			'clickUrl': '/hyderabad/red-bucket-biryani-madhapur/order',
			'clickActionDeeplink': '',
		},
		'distance': '2.7 km',
		'isPromoted': false,
		'promotedText': '',
		'trackingData': [
			{
				'table_name': 'zsearch_events_log',
				'payload':
					'{"search_id":"b240bc97-caf8-495f-b676-7afe2deddff1","location_type":"delivery_cell","location_id":"4308697137140465664","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20444100","element_type":"listing","rank":10}',
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
			'resId': 20444102,
			'name': 'Red Bucket Biryani',
			'image': {
				'url': 'https://b.zmtcdn.com/data/pictures/0/20444100/b9d23c95876ec95a98d1f25c4a2e161f_o2_featured_v2.jpg',
			},
			'o2FeaturedImage': {
				'url': 'https://b.zmtcdn.com/data/pictures/0/20444100/b9d23c95876ec95a98d1f25c4a2e161f_o2_featured_v2.jpg',
			},
			'rating': {
				'has_fake_reviews': 0,
				'aggregate_rating': '3.5',
				'rating_text': '3.5',
				'rating_subtitle': 'Good',
				'rating_color': '9ACD32',
				'votes': '3,182',
				'subtext': 'REVIEWS',
				'is_new': false,
			},
			'ratingNew': {
				'newlyOpenedObj': null,
				'suspiciousReviewObj': null,
				'ratings': {
					'DINING': {
						'rating_type': 'DINING',
						'rating': '3.0',
						'reviewCount': '12',
						'reviewTextSmall': '12 Reviews',
						'subtext': '12 Dining Reviews',
						'color': '#1C1C1C',
						'ratingV2': '3.0',
						'subtitle': 'DINING',
						'sideSubTitle': 'Dining Reviews',
						'bgColorV2': {
							'type': 'green',
							'tint': '500',
						},
					},
					'DELIVERY': {
						'rating_type': 'DELIVERY',
						'rating': '4.0',
						'reviewCount': '3,170',
						'reviewTextSmall': '3,170 Reviews',
						'subtext': '3,170 Delivery Reviews',
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
				'text': '\u20b9500 for two',
			},
			'cfo': {
				'text': '\u20b9200 for one',
			},
			'locality': {
				'name': 'Madhapur, Hyderabad',
				'address':
					'Shop 5, Plot 816-817-818, Platinum Heights, Sri Swamy Ayyappa Society, 100 Feet Road, Near YSR Statue, Madhapur, Hyderabad',
				'localityUrl': 'hyderabad/madhapur-restaurants',
			},
			'timing': {
				'text': '',
				'color': '',
			},
			'cuisine': [
				{
					'deeplink':
						'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D',
					'url': 'https://www.zomato.com/hyderabad/restaurants/biryani/',
					'name': 'Biryani',
				},
			],
			'should_ban_ugc': false,
			'costText': {
				'text': '\u20b9200 for one',
			},
		},
		'order': {
			'deliveryTime': '30 min',
			'isServiceable': true,
			'hasOnlineOrdering': true,
			'actionInfo': {
				'text': 'Order Now',
				'clickUrl': '/hyderabad/red-bucket-biryani-madhapur/order',
			},
		},
		'gold': [],
		'takeaway': [],
		'cardAction': {
			'text': '',
			'clickUrl': '/hyderabad/red-bucket-biryani-madhapur/order',
			'clickActionDeeplink': '',
		},
		'distance': '2.7 km',
		'isPromoted': false,
		'promotedText': '',
		'trackingData': [
			{
				'table_name': 'zsearch_events_log',
				'payload':
					'{"search_id":"b240bc97-caf8-495f-b676-7afe2deddff1","location_type":"delivery_cell","location_id":"4308697137140465664","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20444100","element_type":"listing","rank":10}',
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
			'resId': 20444103,
			'name': 'Red Bucket Biryani',
			'image': {
				'url': 'https://b.zmtcdn.com/data/pictures/0/20444100/b9d23c95876ec95a98d1f25c4a2e161f_o2_featured_v2.jpg',
			},
			'o2FeaturedImage': {
				'url': 'https://b.zmtcdn.com/data/pictures/0/20444100/b9d23c95876ec95a98d1f25c4a2e161f_o2_featured_v2.jpg',
			},
			'rating': {
				'has_fake_reviews': 0,
				'aggregate_rating': '3.5',
				'rating_text': '3.5',
				'rating_subtitle': 'Good',
				'rating_color': '9ACD32',
				'votes': '3,182',
				'subtext': 'REVIEWS',
				'is_new': false,
			},
			'ratingNew': {
				'newlyOpenedObj': null,
				'suspiciousReviewObj': null,
				'ratings': {
					'DINING': {
						'rating_type': 'DINING',
						'rating': '3.0',
						'reviewCount': '12',
						'reviewTextSmall': '12 Reviews',
						'subtext': '12 Dining Reviews',
						'color': '#1C1C1C',
						'ratingV2': '3.0',
						'subtitle': 'DINING',
						'sideSubTitle': 'Dining Reviews',
						'bgColorV2': {
							'type': 'green',
							'tint': '500',
						},
					},
					'DELIVERY': {
						'rating_type': 'DELIVERY',
						'rating': '4.0',
						'reviewCount': '3,170',
						'reviewTextSmall': '3,170 Reviews',
						'subtext': '3,170 Delivery Reviews',
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
				'text': '\u20b9500 for two',
			},
			'cfo': {
				'text': '\u20b9200 for one',
			},
			'locality': {
				'name': 'Madhapur, Hyderabad',
				'address':
					'Shop 5, Plot 816-817-818, Platinum Heights, Sri Swamy Ayyappa Society, 100 Feet Road, Near YSR Statue, Madhapur, Hyderabad',
				'localityUrl': 'hyderabad/madhapur-restaurants',
			},
			'timing': {
				'text': '',
				'color': '',
			},
			'cuisine': [
				{
					'deeplink':
						'zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D',
					'url': 'https://www.zomato.com/hyderabad/restaurants/biryani/',
					'name': 'Biryani',
				},
			],
			'should_ban_ugc': false,
			'costText': {
				'text': '\u20b9200 for one',
			},
		},
		'order': {
			'deliveryTime': '30 min',
			'isServiceable': true,
			'hasOnlineOrdering': true,
			'actionInfo': {
				'text': 'Order Now',
				'clickUrl': '/hyderabad/red-bucket-biryani-madhapur/order',
			},
		},
		'gold': [],
		'takeaway': [],
		'cardAction': {
			'text': '',
			'clickUrl': '/hyderabad/red-bucket-biryani-madhapur/order',
			'clickActionDeeplink': '',
		},
		'distance': '2.7 km',
		'isPromoted': false,
		'promotedText': '',
		'trackingData': [
			{
				'table_name': 'zsearch_events_log',
				'payload':
					'{"search_id":"b240bc97-caf8-495f-b676-7afe2deddff1","location_type":"delivery_cell","location_id":"4308697137140465664","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20444100","element_type":"listing","rank":10}',
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

const Body = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				{resList.map((restaurant, index) => (
					<RestaurantCard
						key={/*index*/ restaurant.info.resId}
						resData={restaurant}
					/>
				))}
			</div>
		</div>
	);
};

const App = () => {
	console.log('App Component');
	return (
		<div className="app">
			<Header />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// render
root.render(<App />);
