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
        {
          /* <h3 className="h1 text-secondary">Welcome to Cincinnati</h3>
        <br />
        /*<div className="grid">
          <div>
            <img src={image1} alt="destination-1" />
            <h3 className="hhh">Brent Spence Bridge</h3>
            <p className="ppp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ab nesciunt? Molestias rem qui sequi!
            </p>
          </div>

          <div>
            <img src={image2} alt="destination-2" />
            <h3 className="hhh">Paycoor Stadium</h3>
            <p className="ppp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ab nesciunt? Molestias rem qui sequi!
            </p>
          </div>

          <div>
            <img src={image3} alt="destination-3" />
            <h3 className="hhh">Cincinnati Skyline</h3>
            <p className="ppp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ab nesciunt? Molestias rem qui sequi!
            </p>
          </div>
        </div> */
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img
                    className="card-img-top"
                    src={image1}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body pt-0">
                  <h3 className="hhh card-title">Brent Spence Bridge</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img
                    className="card-img-top"
                    src={image2}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body pt-0">
                  <h3 className="hhh card-title">Paycor Stadium</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img
                    className="card-img-top"
                    src={image3}
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body pt-0">
                  <h3 className="hhh card-title">Cincinnati Skyline</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      </section>
    );
  }
}
