// ------------------------------------------------------------
// 1. Initialize map
// ------------------------------------------------------------
const map = L.map("map", {
  center: [20, 0],
  zoom: 2,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
}).addTo(map);

// ------------------------------------------------------------
// 2. Trips with *photos* array
// ------------------------------------------------------------
const trips = [
  {
    name: "Prescott, Arizona",
    coords: [34.54, -112.4685],
    photos: [
        "/photos/prescott/Prescott.jpeg",
        "/photos/prescott/Prescott2.jpeg",
        "/photos/prescott/Prescott3.jpeg",
        "/photos/prescott/Prescott4.jpeg",
        "/photos/prescott/Prescott5.jpeg",
        "/photos/prescott/Prescott6.jpeg",
        "/photos/prescott/Prescott7.jpeg",
        "/photos/prescott/Prescott8.jpeg",
        "/photos/prescott/Prescott9.jpeg",
        "/photos/prescott/Prescott10.jpeg",
        "/photos/prescott/Prescott11.jpeg",
    ],
    favoriteMeal: "St. Michael's Bistro",
    favoriteActivity: "Pizza, Wine, and New Girl",
  },
  {
    name: "New York City, USA",
    coords: [40.7128, -74.006],
    photos: [
        "/photos/NYC/NYC.jpeg",
        "/photos/NYC/NYC2.jpeg",
        "/photos/NYC/NYC3.jpeg",
        "/photos/NYC/NYC4.jpeg",
        "/photos/NYC/NYC5.jpeg",
        "/photos/NYC/NYC6.jpeg",
        "/photos/NYC/NYC7.jpeg",
        "/photos/NYC/NYC8.jpeg",
        "/photos/NYC/NYC9.jpeg",
        "/photos/NYC/NYC10.jpeg",
        "/photos/NYC/NYC11.jpeg",
        "/photos/NYC/NYC12.jpeg",
        "/photos/NYC/NYC13.jpeg",
    ],
    favoriteMeal: "High Collar",
    favoriteActivity: "Central Park Walks",
  },
  {
    name: "Phoenix, Arizona",
    coords: [33.4484, -112.0740],
    photos: [
        "/photos/PHX/PHX.jpeg",
        "/photos/PHX/PHX2.jpeg", 
        "/photos/PHX/PHX3.jpeg", 
        "/photos/PHX/PHX4.jpeg", 
        "/photos/PHX/PHX5.jpeg", 
        "/photos/PHX/PHX6.jpeg", 
        "/photos/PHX/PHX7.jpeg", 
        "/photos/PHX/PHX8.jpeg", 
        "/photos/PHX/PHX9.jpeg", 
        "/photos/PHX/PHX10.jpeg", 
        "/photos/PHX/PHX11.jpeg",  
    ],
    favoriteMeal: "Grimaldi's",
    favoriteActivity: "Putt Shack",
  },
];

// ------------------------------------------------------------
// 3. Markers and popups
// ------------------------------------------------------------
trips.forEach((trip, index) => {
  const popupHTML = `
  <div class="popup-container">
    <div class="popup-heading">${trip.name}</div>
    <img class="popup-img" src="${trip.photos[0]}" alt="${trip.name}" />

    <div class="popup-section">
      <strong>Favorite Meal:</strong> ${trip.favoriteMeal}
    </div>

    <div class="popup-section">
      <strong>Favorite Activity:</strong> ${trip.favoriteActivity}
    </div>

    <button class="gallery-btn" onclick="openGallery(${index})">
      View Gallery
    </button>
  </div>
`;

  L.marker(trip.coords).addTo(map).bindPopup(popupHTML);
});

// ------------------------------------------------------------
// 4. Gallery logic
// ------------------------------------------------------------
function openGallery(index) {
  const gallery = document.getElementById("galleryGrid");
  const modal = document.getElementById("galleryModal");

  gallery.innerHTML = "";

  trips[index].photos.forEach((imgSrc) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    gallery.appendChild(img);
  });

  modal.classList.remove("hidden");
}

document.getElementById("closeGallery").onclick = () =>
  document.getElementById("galleryModal").classList.add("hidden");
