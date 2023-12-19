/* -----> Third Party Packages <----- */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* -----> External Coponents <----- */
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

/* -----> Router Configuration <-----*/
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* -----> Components <----- */

const App = () => {
	console.log('App Component');
	// console.log(<Header />); // Virtual DOM
	return (
		<div className="app">
			<Header />
			<Body />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// render
root.render(<RouterProvider router={appRouter} />);
