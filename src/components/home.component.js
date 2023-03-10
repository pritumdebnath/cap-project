import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/cinci1.jpg";
import image2 from "../assets/cinci2.jpg";
import image3 from "../assets/cinci3.jpg";
import image4 from "../assets/tql1.jpeg";
import "../components/style/home.style.css";

export default class Home extends Component {
  render() {
    return (
      <section className="destinations">
          <div className="row justify-content-center">
            <div className="col-3 mt-5">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img
                    className="card-img-top"
                    src={image1}
                    alt="brentspence"
                  />
                </div>
                <div className="card-body pt-0">
                  <h5 className="hhh card-title text-center">Brent Spence Bridge</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3 mt-5">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img
                    className="card-img-top"
                    src={image2}
                    alt="paycor"
                  />
                </div>
                <div className="card-body pt-0">
                  <h5 className="hhh card-title text-center">Paycor Stadium</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3 mt-5">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img
                    className="card-img-top"
                    src={image3}
                    alt="skyline"
                  />
                </div>
                <div className="card-body pt-0">
                  <h5 className="hhh card-title text-center">Cincinnati Skyline</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        
      </section>
    );
  }
}
