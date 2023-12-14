// what to render
const heading = React.createElement(
	'h1',
	{ id: 'heading' },
	'Hello World from React!',
); // (Tag, attributes, children)

console.log(heading); // object

// where to render
const rootElement = document.getElementById('root');

// create root
const root = ReactDOM.createRoot(rootElement);

// rendering
root.render(heading);
