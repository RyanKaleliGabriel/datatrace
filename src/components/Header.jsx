import React from "react";
import headerImage from "../assets/headerimage.png";

function Header() {
  return (
    <div class="container-fluid" id="Header">
      <div class="row">
        <h1>
          DATA TRACE
          <br></br>
          <span class="whitepart-title">INTERNATIONAL</span>
        </h1>
        <div class="all-sections col-lg-6">
          <div class="header-paragraph">
            <p class="heading-paragraph">
            Data Trace International observes high standards and integrity at all times when handling data. Enable customers manage efficiently data as an asset and attain insights from data for better and timely decision making- through products and services, training, research and innovation. 
            </p>
          </div>
        </div>
        <div class="all-sections col-lg-6">
          <img src={headerImage} alt="aboutCompany"></img>
        </div>
      </div>
    </div>
  );
}
export default Header;
