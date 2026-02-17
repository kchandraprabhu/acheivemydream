"use strict";

import Typewriter from 'typewriter-effect/dist/core';

export default function initType() {
    const targetElems = document.querySelectorAll('.type');
    if (targetElems) {
        targetElems.forEach(el => {
            new Typewriter(el, {
                strings: el.textContent,
                autoStart: true,
            });
        })
    }
}