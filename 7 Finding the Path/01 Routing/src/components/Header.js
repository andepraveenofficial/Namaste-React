import { useEffect, useState } from 'react';

import { LOGO_URL } from '../utils/constants';

const Header = () => {
	console.log('Header Component');
	const [btnName, setBtnName] = useState('Login');

	useEffect(() => {
		console.log('useEffect called');
	});

	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
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
