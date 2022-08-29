import React from "react";
import companyProfile from "../assets/companyProfile.docx";

function Owners(props) {
  return (
    <div class="carousel-item active container-fluid" data-bs-interval="3000">
      <div class="owner">
        <div class="darker">
          <img src={props.image} class=" owner-img d-block " alt="owner" />
          <h5>{props.ownerName}</h5>
          <p>{props.ownerDetail} </p>
          <form method="get" action={companyProfile}> 
            <button class="btn" type="submit">Download CV</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Owners;
