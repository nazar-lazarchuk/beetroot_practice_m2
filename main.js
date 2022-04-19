//map
function initMap() {
  const uluru = { lat: -25.344, lng: 131.031 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
window.initMap = initMap;

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

Fancybox.bind("[data-fancybox]", {});
const gallery = [
  {
    src: "https://lipsum.app/id/2/800x600",
    thumb: "https://lipsum.app/id/2/80x80",
    caption: "First image",
  },
  {
    src: "https://lipsum.app/id/3/800x600",
    thumb: "https://lipsum.app/id/3/80x80",
    caption: "Second image",
  },
  {
    src: "https://lipsum.app/id/4/800x600",
    thumb: "https://lipsum.app/id/4/80x80",
    caption: "Third image",
  },
];
