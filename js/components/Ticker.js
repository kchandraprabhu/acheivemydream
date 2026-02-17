import React from 'react';
import Marquee from "react-easy-marquee";

export default function Ticker() {
    // create an empty array to store ticker text
    let textArr = [];
    // get all the HTML elements containing ticker text
    const textElems = document.querySelectorAll('.ticker-item');
    // push every text string to an array
    textElems.forEach(el => {
        textArr.push(el.textContent);
    })
    // render
    return React.createElement(
        // wrapper tag name
        "div",
        // wrapper props
        {className: "ticker-wrapper"},
        // render Marquee component
        React.createElement(
            Marquee,
            // props
            { duration: 15000, reverse: true, className: "ticker-component"},
            // create Marquee component child elements
            textArr.map(text => React.createElement("div", {className: "ticker-text"}, text))
        )
    );
}
