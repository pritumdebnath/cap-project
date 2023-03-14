import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/cinci1.jpg";
import image2 from "../assets/cinci2.jpg";
import image3 from "../assets/cinci3.jpg";
import image4 from "../assets/soccer.png";
import image5 from "../assets/reds.png";
import image6 from "../assets/bengals.png";

import "../components/style/home.style.css";

export default class Home extends Component {
  render() {
    return (
      <div id="home-section" style={{ position: "relative" }}>
        <h2 className="text-center">Pride of Cincinnati!</h2>
        <hr />
        <section className="destinations container-fluid col-lg-11 col-md-10 col-sm-12 mt-5 mb-3">
          <div className="row">
            <div className="col-lg-4 col-sm-6 text-center">
              <h5 className="p-3 hhh">FC Cincinnati</h5>
              <img className="home-images" src={image4} alt="brentspence" />
            </div>
            <div className="col-lg-4 col-sm-6 text-center">
              <h5 className="p-3 hhh">Reds</h5>
              <img className="home-images" src={image5} alt="brentspence" />
            </div>
            <div className="col-lg-4 col-sm-6 text-center">
              <h5 className="p-3 hhh">Bengals</h5>
              <img className="home-images" src={image6} alt="brentspence" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
