"use strict";

import initFilter from "./modules/filter.js";
import {initDestroySwiper} from "./modules/slider.js";
import initProgressbar from "./modules/progress.js";

document.addEventListener('DOMContentLoaded', () => {
    initFilter('.blog_posts', '.blog_filters-item', {
        itemSelector: '.blog_posts-item'
    });
    initProgressbar();
    initDestroySwiper();
    showPanel();
    triggerCommentMenu();
})

function showPanel() {
    const panel = document.querySelector('.share_panel');
    if (panel) {
        const observer = new IntersectionObserver(handleIntersection);
        observer.observe(panel);
    }

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0) {
                panel.style.animationPlayState = "running";
            }
        });
    }
}

function triggerCommentMenu() {
    const triggers = document.querySelectorAll('.post .menu_trigger');
    const menus = document.querySelectorAll('.post .menu_action');
    if (triggers) {
        triggers.forEach((el, i) => {
            el.addEventListener('click', () => {
                menus[i].classList.toggle('visible');
            })
        })
    }
}
