// Inline Styles
const styleCard = {
	backgroundColor: '#f0f0f0',
	color: 'black',
};

const RestaurantCard = (props) => {
	const { resData } = props;
	// console.log(resData);
	// console.log(resData.info);

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

export default RestaurantCard;
