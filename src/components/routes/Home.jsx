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
import ArticleBackground from "../../assets/Articles-bg.avif";
import Article1 from "../../assets/Article1.avif";
import Article2 from "../../assets/Article2.avif";
import ContactBackground from "../../assets/contact-bg.jpg";

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
        Background={GalleryBackground}
        GalleryTitle={"Latest Features & Announcements"}
        Image1={Gallery1}
        CardTitle1={"Welcome to the Party, D&D Beyond!"}
        Image2={Gallery2}
        CardTitle2={"Heroes of Krynn"}
        Image3={Gallery3}
        CardTitle3={"D&D Player Tips"}
        Image4={Gallery4}
        CardTitle4={"D&D Rules Expansion Gift Set"}
        Image5={Gallery5}
        CardTitle5={" Monsters of the Multiverse | Dungeons & Dragons"}
        Image6={Gallery6}
        CardTitle6={"What is the Radiant Citadel?"}
      />

      <div className="container-fluid p-4 row justify-content-around article-container" 
        style={{ 
          backgroundImage: `url(${ArticleBackground})`
        }}>
        <div class="col-md-5 col-sm-12">
          <ArticleCard 
            Image={Article1}
            CardTitle={"Dragon Talk"}
            CardBody={"D&D owns the airwaves! Get the latest news and gamer humor from the official D&D podcast."}
            CardButtonLink={"#"}
          />
        </div>
        <div class="col-md-5 col-sm-12">
          <ArticleCard 
            Image={Article2}
            CardTitle={"Virtual Play Weekends"}
            CardBody={"Connect with your friends around the world and play D&D with some of the best Dungeon Masters anywhere!"}
            CardButtonLink={""}
          />
        </div>
      </div>

      <div className="container-fluid"
      style={{ 
        backgroundImage: `url(${ContactBackground})`
      }}>
        <div className="container mx-auto py-4 text-white">
          <h2 className="text-center">
            D&D Newsletter
          </h2>
          <p className="text-center">
            Sign up to get the latest info on Dungeons & Dragons products,
            events, and special offers—and help stay informed!
          </p>
        </div>
      </div>

    </div>
  );
}

export default Home;