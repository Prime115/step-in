let karta = L.map('map').setView([64.7502, 20.9509], 13 );
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(karta);
let gymIcon = L.icon({
    iconUrl: "./images/gymicon.png",
    iconSize: [40,40],
    iconAnchor: [20,40],

})
let anderstorpPin = L.marker([64.73580529107286, 20.971807439606952], {icon: gymIcon}).addTo(karta);
let centrumPin = L.marker([64.75041430382274, 20.95028279408538], {icon:gymIcon}).addTo(karta);
let bodenAPin = L.marker([65.81179835457746, 21.697834053802797], {icon:gymIcon}).addTo(karta);
let bodenWPin = L.marker([65.82475244446813, 21.66242401474603], {icon:gymIcon}).addTo(karta);
let furunasetPin = L.marker([65.29392361192079, 21.488289881912436], {icon:gymIcon}).addTo(karta);
let backcityPin = L.marker([65.32353504571843, 21.443532408900833], {icon:gymIcon}).addTo(karta);
let lyckseleCPin = L.marker([64.59444413895397, 18.678419197191804],{icon:gymIcon}).addTo(karta);
let luleaGPin = L.marker([65.6416891857714, 22.01362478686077], {icon:gymIcon}).addTo(karta);
let luleaPPin = L.marker([65.61913511348868, 22.148037864749156] ,{icon:gymIcon}).addTo(karta);
let LyckseleNPin = L.marker([64.59796667960984, 18.703203778002226], {icon:gymIcon}).addTo(karta);
let luleaBPin = L.marker([65.61474405959379, 22.17745233961311], {icon:gymIcon}).addTo(karta);


const gymData = [
    {
        id: "Anderstorp",
        name: "Anderstorp",
        coordinates: [64.73580529107286, 20.971807439606952]
    },
    {
        id: "Centrum",
        name: "skeåCentrum",
        coordinates: [64.75041430382274, 20.95028279408538]
    },
    {
        id: "Bodenarena",
        name: "Boden A",
        coordinates: [65.81179835457746, 21.697834053802797]
    },
    {
        id: "Bodenwinternet",
        name: "Boden W",
        coordinates: [65.82475244446813, 21.66242401474603]
    },
    {
        id: "Furunäset",
        name: "Furunäset",
        coordinates: [65.29392361192079, 21.488289881912436]
    },
    {
        id: "Backcity",
        name: "Backcity",
        coordinates: [65.32353504571843, 21.443532408900833]
    },
    {
        id: "LyckseleC",
        name: "Lycksele C",
        coordinates: [64.59444413895397, 18.678419197191804]
    },
    {
        id: "Gammelstad",
        name: "Luleå G",
        coordinates: [65.6416891857714, 22.01362478686077]
    },
    {
        id: "Porsön",
        name: "Luleå P",
        coordinates: [65.61913511348868, 22.148037864749156]
    },
    {
        id: "LyckseleN",
        name: "Lycksele N",
        coordinates: [64.59796667960984, 18.703203778002226]
    },
    {
        id: "Björksgatan",
        name: "Luleå B",
        coordinates: [65.61474405959379, 22.17745233961311]
    }
]

let showOnMap = function (gymID) {
    let gym = gymData.find(g=>g.id===gymID);
    if(gym){
        karta.setView(gym.coordinates,15);
    }
}
document.querySelectorAll('.gym').forEach(gym => {

    gym.addEventListener('click', function (){
        showOnMap(gym.id)
    })
})



