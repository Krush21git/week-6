// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'
import App from './App';
import StoreProvider from './context/StoreContext';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create a root with createRoot

root.render(
    <StoreProvider>
        <App />
    </StoreProvider>
);
