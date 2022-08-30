import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App';
import store from './store';
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}><App /></Provider>
    </React.StrictMode>
);