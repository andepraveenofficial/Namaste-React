// Inline Styles
const styleCard = {
	backgroundColor: '#f0f0f0',
	color: 'black',
};

const RestaurantCard = (props) => {
	const { resData } = props;
	// console.log(resData);
	const { id, title, url, thumbnailUrl } = resData;

	return (
		<div className="res-card" style={styleCard}>
			<img src={url} alt="res-logo" className="res-logo" />
			<h3>{title}</h3>
		</div>
	);
};

export default RestaurantCard;
