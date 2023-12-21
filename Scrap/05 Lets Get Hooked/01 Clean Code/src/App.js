/* -----> Third Party Packages <----- */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* -----> External Coponents <----- */
import Header from './components/Header';
import Body from './components/Body';

/* -----> Components <----- */

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
