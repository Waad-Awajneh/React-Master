import React from "react";
function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide relative flex"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
            class="block w-full"
            alt="Wild Landscape"
          />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
            class="block w-full"
            alt="Camera"
          />
        </div>
        <div class="carousel-item relative float-left w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
            class="block w-full"
            alt="Exotic Fruits"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
