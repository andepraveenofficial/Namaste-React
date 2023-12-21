import React from 'react';
import ReactDOM from 'react-dom/client';

/*
<div id="parent">
	<div id="child">
		<h1>Hello World</h1>
	</div>
</div>
*/

// what to render : Create Elements
const heading1 = React.createElement('h1', { id: 'heading' }, 'Hello Wolrd');
const heading2 = React.createElement('h1', { id: 'heading' }, 'Hello Universe');
const child = React.createElement('div', { id: 'child' }, [heading1, heading2]);
const parent = React.createElement('div', { id: 'parent' }, child);

console.log(parent); // object

// where to render
const rootElement = document.getElementById('root');

// create root
const root = ReactDOM.createRoot(rootElement);

// render
root.render(parent); // render method is used to replace
