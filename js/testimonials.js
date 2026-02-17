"use strict";

import {initSwiperSlider} from "./modules/slider.js";
import {setEdgePadding} from "./modules/helpers.js";

document.addEventListener('DOMContentLoaded', () => {
    initSwiperSlider('.testimonials_slider', '.testimonials_controls', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        speed: 1200,
        breakpoints: {
            767.98: {
                spaceBetween: 40,
            },
            991.98: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1199.98: {
                slidesPerView: "auto",
                spaceBetween: 50,
            }
        }
    })

    setEdge();
    window.addEventListener('resize', setEdge);
})

function setEdge() {
    const container = document.querySelector('.testimonials .container');
    if (window.innerWidth >= 1199.98) {
        container.style.marginLeft = `${setEdgePadding('.header .container')}px`
    } else {
        container.style.marginLeft = "auto";
    }
}
