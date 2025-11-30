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
        "./Photos/Prescott/Prescott.jpeg",
        "./Photos/Prescott/Prescott2.jpeg",
        "./Photos/Prescott/Prescott3.jpeg",
        "./Photos/Prescott/Prescott4.jpeg",
        "./Photos/Prescott/Prescott5.jpeg",
        "./Photos/Prescott/Prescott6.jpeg",
        "./Photos/Prescott/Prescott7.jpeg",
        "./Photos/Prescott/Prescott8.jpeg",
        "./Photos/Prescott/Prescott9.jpeg",
        "./Photos/Prescott/Prescott10.jpeg",
        "./Photos/Prescott/Prescott11.jpeg",
    ],
    favoriteMeal: "St. Michael's Bistro",
    favoriteActivity: "Pizza, Wine, and New Girl",
  },
  {
    name: "New York City, USA",
    coords: [40.7128, -74.006],
    photos: [
        "./Photos/NYC/NYC.jpeg",
        "./Photos/NYC/NYC2.jpeg",
        "./Photos/NYC/NYC3.jpeg",
        "./Photos/NYC/NYC4.jpeg",
        "./Photos/NYC/NYC5.jpeg",
        "./Photos/NYC/NYC6.jpeg",
        "./Photos/NYC/NYC7.jpeg",
        "./Photos/NYC/NYC8.jpeg",
        "./Photos/NYC/NYC9.jpeg",
        "./Photos/NYC/NYC10.jpeg",
        "./Photos/NYC/NYC11.jpeg",
        "./Photos/NYC/NYC12.jpeg",
        "./Photos/NYC/NYC13.jpeg",
        "./Photos/NYC/NYC14.jpeg",
    ],
    favoriteMeal: "High Collar",
    favoriteActivity: "Central Park Walks",
  },
  {
    name: "Phoenix, Arizona",
    coords: [33.4484, -112.0740],
    photos: [
        "./Photos/PHX/PHX.jpeg",
        "./Photos/PHX/PHX2.jpeg", 
        "./Photos/PHX/PHX3.jpeg", 
        "./Photos/PHX/PHX4.jpeg", 
        "./Photos/PHX/PHX5.jpeg", 
        "./Photos/PHX/PHX6.jpeg", 
        "./Photos/PHX/PHX7.jpeg", 
        "./Photos/PHX/PHX8.jpeg", 
        "./Photos/PHX/PHX9.jpeg", 
        "./Photos/PHX/PHX10.jpeg", 
        "./Photos/PHX/PHX11.jpeg",  
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
