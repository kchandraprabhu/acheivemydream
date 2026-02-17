"use strict";

const emailRegExp = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

import {initModal} from "./modal.js";

const defaults = {
    toast: true,
    position: 'top-end',
    timer: 3000,
    customClass: {
        popup: 'alert_popup',
        title: 'alert_popup-title',
        htmlContainer: 'alert_popup-content',
        closeButton: 'alert_popup-close',
        container: 'alert_popup-container'
    }
}

async function sendForm(form) {
    let handler = form.getAttribute('action');
    const response = await fetch(
        handler,
        {
            method: 'POST',
            body: new FormData(form)
        }
    );
    if(response.ok) {
        form.reset();
    }
}

export function validateForm(target, fieldSelector = '.field') {
    const form = document.querySelector(target);
    const inputsArr = document.querySelectorAll(`${target} ${fieldSelector}`);
    const valid = elem => !elem.classList.contains('error');

    if (form) {
        let notificationText = '';

        form.addEventListener('submit', e => {
            e.preventDefault();
            for (let i = 0; i < inputsArr.length; i++) {
                const el = inputsArr[i];
                const value = el.value;
                if (el.classList.contains('required') && value === '') {
                    el.classList.add('error');
                } else if (el.dataset.type === 'email' && !emailRegExp.test(value)) {
                    el.classList.add('error');
                } else if (el.dataset.type === 'tel' && isNaN(+value)) {
                    el.classList.add('error');
                }

                el.addEventListener('input', () => {
                    el.classList.remove('error');
                });
            }

            if (Array.from(inputsArr).every(valid)) {
                inputsArr.forEach(el => {
                    el.classList.remove('error');
                })
                switch (form.dataset.type) {
                    case "feedback": {
                        notificationText = 'Your message has been sent. We\'ll reply you as soon as possible.';
                        break
                    }
                    case "signup": {
                        notificationText = 'Subscription confirmation has been sent to your Email.';
                        break
                    }
                    case "search": {
                        notificationText = 'Sorry, nothing found.';
                        break
                    }
                    case "reply": {
                        notificationText = 'Your comment is awaiting moderation.';
                        break
                    }
                }
                sendForm(form);
                initModal({...defaults, html: `<p class="main">${notificationText}</p>`});
            }
        })
    }
}

export function validate() {
    validateForm('[data-type="feedback"]');
    validateForm('[data-type="signup"]');
    validateForm('[data-type="search"]');
    validateForm('[data-type="reply"]');
}
