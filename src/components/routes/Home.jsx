import React from "react";
import "./page_styles.css";
import Home1 from "../../assets/Home1.avif";
import Home2 from "../../assets/Home2.avif";
import Home3 from "../../assets/Home3.avif";

function Home() {
  return (
    <>
      <div id="home-carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#home-carousel" data-slide-to="0" class="active"></li>
          <li data-target="#home-carousel" data-slide-to="1"></li>
          <li data-target="#home-carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={Home1} alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Home2} alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Home3} alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#home-carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#home-carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div className="container bg-dark"></div>
    </>
  );
}

export default Home;