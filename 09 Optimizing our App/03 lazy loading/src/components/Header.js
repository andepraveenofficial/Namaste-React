import { useEffect, useState } from 'react';

import { LOGO_URL } from '../utils/constants';

import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
	console.log('Header Component');
	const [btnName, setBtnName] = useState('Login');

	const onlineStatus = useOnlineStatus();

	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul>
					<li>
						Online Status :
						{onlineStatus ? (
							<div
								style={{
									width: '20px',
									height: '20px',
									backgroundColor: 'green',
								}}
							></div>
						) : (
							<div
								style={{
									width: '20px',
									height: '20px',
									backgroundColor: 'red',
								}}
							></div>
						)}
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
					<li>
						<Link to="/grocery">Grocery</Link>
					</li>
					<button
						className="login"
						onClick={() => {
							btnName === 'Login'
								? setBtnName('Logout')
								: setBtnName('Login');
						}}
					>
						{btnName}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
