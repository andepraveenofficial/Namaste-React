// what to render
const heading = React.createElement('h1', {}, 'Hello World from React!'); // (Tag, attributes, children)

// where to render
const rootElement = document.getElementById('root');

// create root
const root = ReactDOM.createRoot(rootElement);

// rendering
root.render(heading);
