import React from 'react'
import './HeaderNavbar.css'
function HeaderNavbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active" style={{color:'white'}} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:'white'}} href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:'white'}} href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:'white'}} href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default HeaderNavbar