
// 1. Initialize the map centered in Manolo Fortich
const map = L.map("map").setView([8.36626, 124.86625], 15);

// 2. Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);

// 3. Define the three locations
const locations = [
  {
    name: "Manolo Fortich Centennial Plaza",
    lat: 8.36791,
    lng: 124.86623,
    description: "Manolo Fortich Centennial Plaza, Bukidnon"
  },
  {
    name: "Northern Bukidnon State College (NBSC)",
    lat: 8.36016,
    lng: 124.86834,
    description: "500-meter radius around Northern Bukidnon State College",
    radius: 500
  },
  {
    name: "Sol Cielo Calingasan, MD @ Bukidnon Provincial Hospital-Manolo Fortich",
    lat: 8.38458,
    lng: 124.83878,
    description: "Bukidnon Provincial Hospital, Manolo Fortich"
  }
];

// 4. Add the three markers
locations.forEach(function (location) {

  const marker = L.marker([location.lat, location.lng])
    .addTo(map);

  marker.bindPopup(
    "<b>" + location.name + "</b><br>" +
    location.description
  );

  // 5. Add a 500-meter circle ONLY around NBSC
  if (location.radius) {
    L.circle([location.lat, location.lng], {
      color: "blue",
      fillColor: "#30a3ec",
      fillOpacity: 0.3,
      radius: location.radius
    }).addTo(map);
  }

});

// 6. Display coordinates when clicking the map
map.on("click", function (event) {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  L.popup()
    .setLatLng(event.latlng)
    .setContent(
      "<b>Selected Location</b><br>" +
      "Latitude: " + lat.toFixed(5) +
      "<br>Longitude: " + lng.toFixed(5)
    )
    .openOn(map);
});
