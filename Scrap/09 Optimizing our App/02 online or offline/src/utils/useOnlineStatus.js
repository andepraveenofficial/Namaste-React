import React, { useEffect, useState } from 'react';

const useOnlineStatus = () => {
	// check if online or not
	const [onlineStatus, setOnlineStatus] = useState(true);
	useEffect(() => {
		window.addEventListener('offline', () => {
			setOnlineStatus(false);
		});

		window.addEventListener('online', () => {
			setOnlineStatus(true);
		});
	}, []);

	// boolean value
	return onlineStatus;
};

export default useOnlineStatus;
