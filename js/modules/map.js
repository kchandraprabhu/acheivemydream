"use strict";

const _KEY = 'AIzaSyCCek6jsfOYOK2lAtNP8I5Fuy4FOvBgghk';
const MAP_ID = 'YOUR_MAP_ID';

import {Loader} from "@googlemaps/js-api-loader";
import mapTheme from "./map-theme.js";

function initMap() {

    const loader = new Loader({
        apiKey: _KEY,
        version: "weekly",
        libraries: ["marker"], // Ensure the marker library is loaded
    });

    const mapContainer = document.querySelector('#map');
    const coords = [
        {
            lat: 40.74881584652125,
            lng: -73.98561648634562
        },
        {
            lat: 40.80886299662628,
            lng: -73.8791304171755
        }
    ];

    if (mapContainer) {
        loader.load().then(() => {
            const map = new google.maps.Map(mapContainer, {
                center: coords[1],
                zoom: 10,
                styles: [...mapTheme],
                disableDefaultUI: true,
                mapId: MAP_ID // Add the Map ID here
            });

            coords.forEach(el => {
                const markerContent = document.createElement('img');
                markerContent.src = './svg/marker.svg';
                markerContent.alt = 'Marker';

                const marker = new google.maps.marker.AdvancedMarkerElement({
                    position: el,
                    map: map,
                    content: markerContent
                });
            });
        });
    }
}

export default initMap;
