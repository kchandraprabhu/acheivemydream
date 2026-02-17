"use strict";

import ProgressBar from 'progressbar.js/dist/progressbar.js';

export default function initProgressbar() {
    const progressBars = document.querySelectorAll('.progressLine');
    progressBars.forEach(bar => {
        let id = bar.getAttribute('id');
        let value = bar.dataset.value;
        let limit = value / 100;

        let lineBar = new ProgressBar.Line(`#${id}`, {
            strokeWidth: 3,
            trailWidth: 3,
            trailColor: '#2A2AFF',
            from: {
                color: '#f8f8f8',
            },
            to: {
                color: '#f8f8f8',
            },
            text: {
                value: '0',
                className: 'progressLine-text',
            },
            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.setText(`+${value}%`);
            }
        });

        const observer = new IntersectionObserver(handleIntersection);
        observer.observe(bar);

        function handleIntersection(entries, observer) {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    lineBar.animate(limit, {
                        duration: 700
                    });
                }
            });
        }
    })
}
