import React from "react";

function NavBar(props) {
  return (
    <div id="NavBar">
      <nav className="nav-bar navbar navbar-expand-lg ">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="home">Data</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navItems collapse navbar-collapse" id="navbarNav">
            <ul className=" navbar-btns navbar-nav ">
              <li className="nav-item ">
                <a className=" nav-link active" aria-current="page" href="#Header">
                  <span className="navlink">Home</span>
                </a>
              </li>
              <li className="nav-item ">
                <a className=" nav-link active" aria-current="page" href="#About">
                  <span className="navlink">About</span>
                </a>
              </li>
              <li className="nav-item ">
                <a className=" nav-link active" aria-current="page" href="#Products">
                  <span className="navlink">Products</span>
                </a>
              </li>
              <li className="nav-item ">
                <a className=" nav-link active" aria-current="page" href="#Owners">
                  <span className="navlink">Owners</span>
                </a>
              </li>
              <li className="nav-item ">
                <a className=" nav-link active" aria-current="page" href="#Contact">
                  <span className="navlink">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
