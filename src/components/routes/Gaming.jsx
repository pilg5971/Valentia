import React from "react";
import "./page_styles.css"

function Gaming() {
  return (
    <div className="gaming">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <a href="https://www.riskofrain.com/" target="_blank" rel="noreferrer">
              <img
                className="hover-card img-fluid rounded mb-4 mb-lg-0"
                src=""
                alt="Risk of Rain 2 Wallpaper"
              />
            </a>
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Gaming</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gaming;