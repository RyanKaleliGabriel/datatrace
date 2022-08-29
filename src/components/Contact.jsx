import React from "react";
import contactLogo from "../assets/contactLogo.png";

var today = new Date();

  
function Contact() {
  return (
    <div class="container-fluid contact" id="Contact">
      <div class="row">
        <h1>
          Contact <span>Us</span>
        </h1>
        <div class="all-sections col-lg-4">
          <div class="contact-content">
            <p>
              <i class="fa-solid fa-phone contact-icon"></i> +254721404317
            </p>
            <br />
            <p>
              <i class="fa-solid fa-phone contact-icon"></i> +254721404317
            </p>
            <p>
            Diani close off Ole Dume road gate No. 7 office No. 2 Kilimani.
            </p>
            <p>
            PO. BOX 35087, Nairobi 00200
            </p>
            <br />
            <i class="fa-brands fa-instagram social-icon fa-2x"></i>
            <i class="fa-brands fa-facebook social-icon fa-2x"></i>
            <i class="fa-brands fa-twitter social-icon fa-2x"></i>
          </div>
        </div>
        <div class="all-sections col-lg-4">
          <div class="contact-content">
            <h3>Recognition</h3>
            <p>
              Data Trace International Ltd DTI
              <br /> is listed among ICT solution
              <br />
              providers for the implementation
              <br /> of the Open Government
              <br /> Partnership National
              <br /> Action Plan IV 2020- 2022.{" "}
            </p>
          </div>
        </div>
        <div class="all-sections col-lg-4">
          <div class="contact-content">
            <img src={contactLogo} alt="ContactLogo"></img>
            <p>
              <i class="fa-solid fa-envelope"></i> muliaro@yahoo.com
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i> muliaro@yahoo.com
            </p>
          </div>
        </div>
      </div>
      <p class="copyright">Copyright@{today.getFullYear()}</p>
    </div>
  );
}
export default Contact;
