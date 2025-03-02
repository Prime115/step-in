let karta = L.map('map').setView([64.7502, 20.9509], 13 );
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(karta);
let anderstorpPin = L.marker([64.73580529107286, 20.971807439606952]).addTo(karta);