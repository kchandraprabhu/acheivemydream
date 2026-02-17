"use strict";

export default function drawAccordion() {
    const accordionCards = document.querySelectorAll('.accordion .accordion-collapse');
    const icons = document.querySelectorAll('.title .title_icon');

    accordionCards.forEach((el, i) => {
        el.addEventListener('show.bs.collapse', () => {
            icons[i].classList.add('transform');
        })
        el.addEventListener('hide.bs.collapse', () => {
            icons[i].classList.remove('transform')
        })
    })
}
