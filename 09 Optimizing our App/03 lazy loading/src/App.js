/* -----> Third Party Packages <----- */
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';

/* -----> External Coponents <----- */
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
import NotFound from './components/NotFound';

/* -----> Router Configuration <-----*/
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

/* -----> Components <----- */

// lazy loading
const Grocery = lazy(() => import('./components/Grocery'));

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
				path: '/grocery',
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<Grocery />
					</Suspense>
				),
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
