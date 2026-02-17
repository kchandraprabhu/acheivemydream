import React from 'react';
import ReactDOM from 'react-dom';
import Ticker from "./components/Ticker.js";

const container = document.getElementById('ticker');
if (container) {
    ReactDOM.render(React.createElement(
        React.StrictMode,
        null,
        React.createElement(Ticker, null)
    ), container);
}



