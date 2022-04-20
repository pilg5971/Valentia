import React from "react";
import "./routes/page_styles.css";
import FooterBackground from "../assets/footer-bg.png"
import footer1 from "../assets/footer1.avif";
import footer2 from "../assets/footer2.avif";
import footer3 from "../assets/footer3.avif";

function Footer() {
  return (
    <div className="footer">
      <footer className="bg-dark" id="contact">
        <div className="container-fluid"
          style={{ 
            backgroundImage: `url(${FooterBackground})`
          }}>
          <div className="row py-4 px-2">
            <div className="col-md-6 col-sm-12">
              <h5>Social Links</h5>
              <div className="social-links pt-2">
                <a href="#home" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#home" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#home" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-twitch"></i>
                </a>
                <a href="#home" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="#home" target="_blank" rel="noreferrer">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#home" target="_blank" rel="noreferrer">
                  <i class="fa-solid fa-hand-holding-heart"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              
            </div>
          </div>
          <div className="row py-4 px-2">
            <div className="col-12 d-flex justify-content-end">
              <img className="mr-4" src={footer1} alt="footer1" />
              <img className="mr-4" src={footer2} alt="footer2" />
              <img src={footer3} alt="footer3" />
            </div>
          </div>
        </div>
        <div className="container p-3">
          <p className="m-0 text-center text-white">
            Valentia &copy; Prometheus Bound 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;