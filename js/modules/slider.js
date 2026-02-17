"use strict";

import Swiper from 'swiper';
import { Navigation, Autoplay, Grid, EffectCoverflow, Pagination } from 'swiper/modules';

const commonOptions = {
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
}

// basic swiper initialization
export function initSwiperSlider(container, parentClass, options) {
    const containerEL = document.querySelector(container);
    if (containerEL) {
        const swiper = new Swiper(container, {
            modules: [Navigation, Autoplay, Grid, EffectCoverflow, Pagination],
            ...commonOptions,
            pagination: {
                el: `${parentClass} .swiper-pagination`,
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: `${parentClass} .swiper-button-next`,
                prevEl: `${parentClass} .swiper-button-prev`,
            },
            ...options,
        });
    }
}

export function initDestroySwiper(container = '.recent_posts', parentClass = '.recent_controls') {
    const containerEl = document.querySelector(container);

    let swiperInstance = {};
    let init = false;

    const options = {
        navigation: {
            nextEl: `${parentClass} .swiper-button-next`,
            prevEl: `${parentClass} .swiper-button-prev`,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            575.98: {
                slidesPerView: 2,
            },
            767.98: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991.98: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    }

    function swiperMode() {
        let isSlider = window.matchMedia('(max-width: 1199.98px)');
        let isGrid = window.matchMedia('(min-width: 1200px)');

        if (containerEl) {
            if (isSlider.matches) {
                if (!init) {
                    init = true;
                    swiperInstance = new Swiper(container, {
                        modules: [Navigation, Autoplay, Grid, EffectCoverflow, Pagination],
                        ...commonOptions,
                        ...options
                    });
                }

            } else if (isGrid.matches && Object.keys(swiperInstance).length !== 0) {
                swiperInstance.destroy(true, true);
                init = false;
            }
        }
    }

    window.addEventListener('load', swiperMode);
    window.addEventListener('resize', swiperMode);
}
