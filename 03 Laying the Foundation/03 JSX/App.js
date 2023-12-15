import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement(type, attr, children) => React Element - JS object => HTML Element
const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');
console.log(heading); // Object

/*
JSX => HTML like syntax => PARCEL - Babel
JSX (transpiled before it reaches the JS Engine)
Babel converts JSX into React code
JSX => React.createElement(type, attr, children) => React Element - JS object => HTML Element
*/
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
console.log(jsxHeading); // Object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading); // render converts to HTML element then replaced.
