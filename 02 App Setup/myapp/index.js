import React from 'react';
import ReactDOM from 'react-dom';

// what to render
const parent = (
	<div class="parent">
		<div class="child">
			<h1 className="greeting">Hello World!</h1>
			<h1 className="greeting">Hello Universe!</h1>
		</div>
	</div>
);
console.log(parent); // Object

// where to render
const rootElement = document.getElementById('root');

// Create root
const root = ReactDOM.createRoot(rootElement);

// Render
// The `ReactDOM.render()` method returns only one element in render.
root.render(parent);
