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
	/*({resName, cuisine}) - This is destructure on Fly */
	console.log(props);
	const { resName, cuisine } = props;
	return (
		<div className="res-card" style={styleCard}>
			<img
				src="https://b.zmtcdn.com/data/dish_photos/24c/c74c20e5a727f53cd4a63c0533f7b24c.jpg"
				alt="res-logo"
				className="res-logo"
			/>
			<h3>{resName}</h3>
			<h4>{cuisine}</h4>
			<h4>4.3 stars</h4>
			<h4>38 minutes</h4>
		</div>
	);
};

const Body = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				<RestaurantCard
					resName="Meghana Foods"
					cuisine="Biryani, North Indian, Asian"
				/>
				<RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
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
