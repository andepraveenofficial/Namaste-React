/* -----> Third Party Packages <----- */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* -----> External Coponents <----- */
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
import NotFound from './components/NotFound';

/* -----> Router Configuration <-----*/
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

/* -----> Components <----- */

const App = () => {
	console.log('App Component');
	// console.log(<Header />); // Virtual DOM
	return (
		<div className="app">
			<Header />
			<Outlet /> {/* Outlet is replaced by the component*/}
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Body />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/restaurants/:resId', // Dynamic Path
				element: <RestaurantMenu />,
			},
		],
		errorElement: <NotFound />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// render
root.render(<RouterProvider router={appRouter} />);
