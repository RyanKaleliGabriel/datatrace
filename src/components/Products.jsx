import React from "react";

function Products(props) {
  return (
        <div class="all-sections col-lg-4">
          <div class="product-content">
            <i class={props.icon}></i>
            <h5>{props.smallHeading}</h5>
            <p>
              {props.description}
            </p>
          </div>
        </div>
  );
}
export default Products;
