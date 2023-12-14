/*
<div id="parent">
	<div id="child">
		<h1>Hello World</h1>
	</div>
</div>
*/

// what to render : Create Elements
const heading = React.createElement('h1', { id: 'heading' }, 'Hello Wolrd');
const child = React.createElement('div', { id: 'child' }, heading);
const parent = React.createElement('div', { id: 'parent' }, child);

console.log(parent); // object

// where to render
const rootElement = document.getElementById('root');

// create root
const root = ReactDOM.createRoot(rootElement);

// rendering
root.render(parent);
