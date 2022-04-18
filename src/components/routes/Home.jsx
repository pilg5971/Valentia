import React from "react";

//########### CSS ###########//
import "./page_styles.css";

//########### Images & Assets ###########//
import Home1 from "../../assets/Home1.avif";
import Home2 from "../../assets/Home2.avif";
import Home3 from "../../assets/Home3.avif";
import GalleryBackground from "../../assets/Gallery-bg.avif";
import Gallery1 from "../../assets/Gallery1.avif";
import Gallery2 from "../../assets/Gallery2.avif";
import Gallery3 from "../../assets/Gallery3.avif";
import Gallery4 from "../../assets/Gallery4.avif";
import Gallery5 from "../../assets/Gallery5.avif";
import Gallery6 from "../../assets/Gallery6.avif";

//########### Components ###########//
import Carousel from "../Carousel";
import ImageGallery from "../ImageGallery/ImageGallery";
import ArticleCard from "../ArticleCard";

function Home() {
  return (
    <div id="home">
     
      <Carousel
        Image1={Home1}
        Image2={Home2}
        Image3={Home3}
      />

      <ImageGallery 
        background={GalleryBackground}
        Image1={Gallery1}
        Image2={Gallery2}
        Image3={Gallery3}
        Image4={Gallery4}
        Image5={Gallery5}
        Image6={Gallery6}
      />

      <div className="container-fluid p-4" 
        style={{ 
          backgroundImage: `url(${ArticleBackground})`
        }}>
        <ArticleCard 
          Image={""}
          CardTitle={""}
          CardBody={""}
          CardButtonLink={""}
        />
        <ArticleCard 
          Image={""}
          CardTitle={""}
          CardBody={""}
          CardButtonLink={""}
        />
      </div>

    </div>
  );
}

export default Home;