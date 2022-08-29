import React from "react";
import about from "../assets/about.png";

function About() {
  return (
    <div class="container-fluid" id="About">
      <div class="row">
        <h1>
          About <span class="whitepart-title">Company</span>
        </h1>
        <div class="all-sections col-lg-6">
          <img class="aboutImg" src={about} alt="About img"></img>
        </div>
        <div class="all-sections col-lg-6">
          <div class="about-content">
            <p>
              <span>Data Trace International Ltd</span> was incorporated as a
              Private Limited Company on 12th January 2021 under the companies
              Act, 2015 of Kenya.
            </p>
            <p>
              DTI participated in the formulation of the Kenya Open Government
              Partnership <span>(OGP)</span> IV Strategic Plan{" "}
              <span>2020-2022</span> and is relied upon as one of the leading
              ICT solution providers for the successful OGP strategy
              implementation
            </p>
            <a href="https://www.opengovpartnership.org/documents/kenya-action-plan-2020-2022/">
              <span>www.opengovpartnership.org</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
