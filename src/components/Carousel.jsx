import React from "react";

function Carousel(props) {
  return (
     <div id="carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={props.Image1} alt="First slide"/>
            <div class="carousel-caption">
              <h1>First Slide</h1>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={props.Image2} alt="Second slide"/>
            <div class="carousel-caption">
              <h1>Second Slide</h1>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={props.Image3} alt="Third slide"/>
            <div class="carousel-caption">
              <h1>Third Label</h1>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
  );
}

export default Carousel;