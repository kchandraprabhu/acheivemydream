import React from 'react';
import {Parallax} from "react-scroll-parallax";

export default function ParallaxEl() {
    return React.createElement(
        Parallax,
        { speed: -10 },
        React.createElement("div", null)
    );
}