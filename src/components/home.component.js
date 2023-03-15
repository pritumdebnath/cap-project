import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image4 from "../assets/soccer.png";
import image5 from "../assets/reds.png";
import image6 from "../assets/bengals.png";

import "../components/style/home.style.css";

export default class Home extends Component {
  render() {
    return (
      <div id="home-section" style={{ position: "relative" }}>
        <h2 className="text-center pride">Pride of Cincinnati!</h2>
        <hr />
        <section className="destinations container my-5">
          <div className="row text-center">
            <div className="col-lg-4 col-sm-4 text-center">
              <h5 className="p-3 hhh">FC Cincinnati</h5>
              <img className="home-images img-fluid" src={image4} alt="responsive" />
            </div>
            <div className="col-lg-4 col-sm-4 text-center">
              <h5 className="p-3 hhh">Reds</h5>
              <img className="home-images img-fluid" src={image5} alt="Responsive" />
            </div>
            <div className="col-lg-4 col-sm-4 text-center">
              <h5 className="p-3 hhh">Bengals</h5>
              <img className="home-images img-fluid" src={image6} alt="Responsive" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
