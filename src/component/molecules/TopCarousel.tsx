import React from 'react'

function TopCarousel() {
  return (
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://picsum.photos/200/200" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="https://picsum.photos/200/200" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src="https://picsum.photos/200/200" className="d-block w-100" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default TopCarousel