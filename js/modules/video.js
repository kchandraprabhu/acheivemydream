"use strict";

import YouTubePlayer from 'youtube-player';

export default function setYTFrame(videoId = "MLpWrANjFbI") {
    const trigger = document.querySelector('.videoTrigger');
    const popup = document.querySelector('.videoPopup');
    const playerElem = document.querySelector('#YTplayer');

    if (playerElem) {
        let player;
        player = YouTubePlayer('YTplayer');
        player.loadVideoById(videoId);
        player.stopVideo();

        if (popup) {
            document.body.addEventListener('click', (e) => {
                if (e.target !== null) {
                    if (popup.classList.contains('visible')) {
                        if (e.target !== playerElem) {
                            popup.classList.remove('visible', 'fadeIn');
                            popup.classList.add('fadeOut');
                            player.stopVideo();
                        }
                    } else if (e.target === trigger || (e.target.closest('span') !== null && e.target.closest('span').classList.contains('videoTrigger'))) {
                        e.preventDefault();
                        popup.classList.remove('fadeOut');
                        popup.classList.add('visible', 'fadeIn');
                    }
                }
            })
        }
    }
}