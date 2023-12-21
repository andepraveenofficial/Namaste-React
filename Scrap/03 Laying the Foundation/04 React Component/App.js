import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

const jsxHeading2 = (
	<h1 id="heading" className="heading">
		Namaste React using JSX
	</h1>
);

/*----- React Functional Component -----*/
// Component uses PascalCase naming convention
const HeadingComponent = () => {
	//Return JSX
	return <h1 id="heading">Namaste React Functional Component</h1>;
};

const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>;
console.log(HeadingComponent2);

const HeadingComponent3 = () => (
	<h1 id="heading" className="heading">
		Namaste React using JSX
	</h1>
);
const number = 10000;

// Component Composition
const App = () => {
	return (
		<div>
			<h1 id="heading" className="heading">
				Namaste React 2
			</h1>
			{/* -----Component-----*/}
			<HeadingComponent />
			<HeadingComponent> </HeadingComponent>
			{HeadingComponent()}
			{/* -----React Element-----*/}
			{jsxHeading} {/*React Element*/}
			{/*-----JScode in JSX-----*/}
			{number} {/*JS code*/}
			<h2>{number}</h2>
			{console.log('Hello JS COde')}
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// render
root.render(<App />);
