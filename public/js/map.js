
mapboxgl.accessToken = mapToken;
 map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
    zoom: 2,
    center: listing.geometry.coordinates //[lng,lat] 
});

 marker1 = new mapboxgl.Marker({color:"red"})
.setLngLat( listing.geometry.coordinates )  //listing.geometry.coordinates
.setPopup( new mapboxgl.Popup({offset: 25, }).setHTML(
    ` <p> ${listing.location} <p>Exact Location Provided after Booking</p> `)
)
.addTo(map);
