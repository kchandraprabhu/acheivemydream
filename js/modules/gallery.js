"use strict";

import baguetteBox from 'baguettebox.js';

export default function initGallery(container = '.gallery', options) {
    const containerEl = document.querySelector(container);
    if (containerEl) {
        baguetteBox.run(container, options ? {...options} : {});
    }
}