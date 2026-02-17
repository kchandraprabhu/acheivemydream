"use strict";

import {initSwiperSlider} from "./modules/slider.js";
import setYTFrame from "./modules/video.js";

document.addEventListener('DOMContentLoaded', () => {

    console.log('DOMContentLoaded!!!!!!');

    initSwiperSlider('.chart_slider', '.chart_slider', {
        effect: "coverflow",
        centeredSlides: true,
        autoplay: true,
        speed: 700,
        slidesPerView: "auto",
        spaceBetween: 30,
        initialSlide: 2,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
        },
        breakpoints: {
            767.98: {
                spaceBetween: 0
            }
        }
    })
})
