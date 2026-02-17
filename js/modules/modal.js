"use strict";

import Swal from 'sweetalert2/dist/sweetalert2.js'
import {validateForm} from "./forms.js";

export function initModal(settings, customPopupClass) {
    Swal.fire({
        showClass: {
            popup: 'fadeIn'
        },
        hideClass: {
            popup: 'fadeOut'
        },
        showConfirmButton: false,
        showCloseButton: true,
        closeButtonHtml: `
                <i class="icon-times"></i>
            `,
        customClass: {
            container: 'modal',
            popup: customPopupClass ? `${customPopupClass}` : 'modal_popup',
            closeButton: 'modal_popup-close',
            htmlContainer: 'modal_popup-content',
        },
        ...settings
    })
}
