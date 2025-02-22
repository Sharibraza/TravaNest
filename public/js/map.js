let mapToken= process.env.MAP_TOKEN ;
let coordinates=  JSON.stringify(listing)  ;
mapboxgl.accessToken = mapToken ;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
    zoom: 2,
    center: listing.geometry.coordinates //[lng,lat]
});

const marker1 = new mapboxgl.Marker()
.setLngLat( listing.geometry.coordinates )  //Listing.geometry.coordinates
.setPopup( new mapboxgl.Popup({offset: 25, }).setHTML(
    ` <h4> ${listing.location} <p>Exact Location Provided after Booking</p> `)
)
.addTo(map);
