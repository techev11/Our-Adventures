// ------------------------------------------------------------
// 1. Initialize the world map
// ------------------------------------------------------------
const map = L.map("map", {
  center: [20, 0],
  zoom: 2,
});

// Tile layer (OpenStreetMap)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
}).addTo(map);

// ------------------------------------------------------------
// 2. List of places you visited together
// ------------------------------------------------------------
const trips = [
  {
    name: "Paris, France",
    coords: [48.8566, 2.3522],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    favoriteMeal: "Croissants + café crème",
    favoriteActivity: "Walking along the Seine at night ❤️",
  },
  {
    name: "New York City, USA",
    coords: [40.7128, -74.006],
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Manhattan_skyline.jpg",
    favoriteMeal: "That amazing ramen in the East Village",
    favoriteActivity: "Sunset walk on the High Line 🌇",
  },
];

// ------------------------------------------------------------
// 3. Add markers and popups
// ------------------------------------------------------------
trips.forEach((trip) => {
  const popupHTML = `
    <div class="popup-container">
      <div class="popup-heading">${trip.name}</div>
      <img class="popup-img" src="${trip.photo}" alt="${trip.name}" />
      <div class="popup-section">${trip.favoriteMeal}</div>
      <div class="popup-section">${trip.favoriteActivity}</div>
    </div>
  `;

  L.marker(trip.coords).addTo(map).bindPopup(popupHTML);
});
