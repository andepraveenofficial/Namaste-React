import React, { useEffect, useState } from 'react';
import { MENU_API_URL } from './constants.js';

const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null);
	// fetchData
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch(MENU_API_URL + resId);
		const data = await response.json();
		setResInfo(data);
	};

	return resInfo;
};

export default useRestaurantMenu;
