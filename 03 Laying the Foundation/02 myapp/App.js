import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement(type, attr, children) => object => HTML Element
const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');
console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading); // render converts to HTML element then replaced.
