import React from "react";
import About from "./About";
import Header from "./Header";
import Contact from "./Contact";
import Products from "./Products";
import Owners from "./Owners";
import NavBar from "./NavBar";
import productcontent from "../assets/products";
import ownerContent from "../assets/owners";

function createProducts(productTerm) {
  return (
    <Products
      key={productTerm.id}
      icon={productTerm.icon}
      smallHeading={productTerm.smallHeading}
      description={productTerm.description}
    />
  );
}

function createOwner(ownerTerm) {
  return (
    <Owners
      key={ownerTerm.id}
      ownerName={ownerTerm.ownerName}
      ownerDetail={ownerTerm.ownerDetail}
      image={ownerTerm.image}
    />
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <div class="container-fluid" id="Products">
        <div class="row">
          <h1>
            Products and <span class="whitepart-title">Services</span>
          </h1>
          {productcontent.map(createProducts)}
        </div>
      </div>
      <div id="Owners">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            {ownerContent.map(createOwner)}
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
}
export default App;
