import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/cinci1.jpg";
import image2 from "../assets/cinci2.jpg";
import image3 from "../assets/cinci3.jpg";
import "../components/style/home.style.css";


export default class Home extends Component {
  render() {
    return (
      <section className="destinations">
        <h3 className="h1 text-secondary">Welcome to Cincinnati</h3>
        <br />
        <div className="grid">
          <div>
            <img src={image1} alt="destination-1" />
            <h3>Brent Spence Bridge</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ab nesciunt? Molestias rem qui sequi!
            </p>
          </div>

          <div>
            <img src={image2} alt="destination-2" />
            <h3>Paycoor Stadium</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ab nesciunt? Molestias rem qui sequi!
            </p>
          </div>

          <div>
            <img src={image3} alt="destination-3" />
            <h3>Cincinnati Skyline</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ab nesciunt? Molestias rem qui sequi!
            </p>
          </div>
        </div>
      </section>
    );
  }
}
