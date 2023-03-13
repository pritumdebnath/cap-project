import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/cinci1.jpg";
import image2 from "../assets/cinci2.jpg";
import image3 from "../assets/cinci3.jpg";
import "../components/style/home.style.css";

export default class Home extends Component {
  render() {
    return (
      
      <div id="home-section" style={{position: 'relative'}}>
      <h2 className="text-center hhh">This is Cincinnati!</h2>
      <section className="destinations container">
        <div className="row justify-content-center home-cards">
          <div className="col-md-4 mt-5 mb-3 ">
            <div className="card profile-card-5">
              <div className="card-img-block">
                <img
                  className="card-img-top"
                  src={image1}
                  alt="brentspence" />
              </div>
              <div className="card-body pt-0">
                <h5 className="hhh card-title text-center m-3">Brent Spence Bridge</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5 mb-3">
            <div className="card profile-card-5">
              <div className="card-img-block">
                <img
                  className="card-img-top"
                  src={image2}
                  alt="paycor" />
              </div>
              <div className="card-body pt-0">
                <h5 className="hhh card-title text-center m-3">Paycor Stadium</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5 mb-3">
            <div className="card profile-card-5">
              <div className="card-img-block">
                <img
                  className="card-img-top"
                  src={image3}
                  alt="skyline" />
              </div>
              <div className="card-body pt-0">
                <h5 className="hhh card-title text-center m-3">Cincinnati Skyline</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      
    );
  }
}
