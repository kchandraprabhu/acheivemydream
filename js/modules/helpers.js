"use strict";

export function preventDefault() {
    document.addEventListener('click', function (e) {
        if ((e.target.tagName === 'A' && e.target.getAttribute('href') === '#') || (e.target.closest('a') !== null && e.target.closest('a').getAttribute('href') === '#')) {
            e.preventDefault();
        }
    });

    document.addEventListener('submit', e => {
        if (e.target.tagName === 'FORM') {
            e.preventDefault();
        }
    })
}

export function setCurrentYear() {
    const container = document.getElementById('currentYear');

    if (container) {
        container.textContent = String(new Date().getFullYear());
    }
}

export function hideCover() {
    const coverElems = document.querySelectorAll('.cover');
    if (coverElems) {
        coverElems.forEach((el, i) => {
            el.addEventListener('click', () => {
                el.classList.add('hidden')
            })
        })
    }
}

export function setEdgePadding(container) {
    const margin = parseInt(window.getComputedStyle(document.querySelector(container)).marginLeft),
        padding = parseInt(window.getComputedStyle(document.querySelector(container)).paddingLeft);
    return margin + padding
}
