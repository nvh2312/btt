const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  livingroom = body.querySelector("#livingroom"),
  kitchen = body.querySelector("#kitchen"),
  bedroom = body.querySelector("#bedroom"),
  roomName = body.querySelector("#room-show");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

livingroom.addEventListener("click", () => {
  roomName.innerHTML = "Living Room";
});
kitchen.addEventListener("click", () => {
  roomName.innerHTML = "Kitchen";
});
bedroom.addEventListener("click", () => {
  roomName.innerHTML = "Bedroom";
});
