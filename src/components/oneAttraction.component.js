import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/one-attraction.style.css";

export default class oneAttraction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attraction: "",
      address: "",
      imageURL: "",
      description: "",
      ratings: "",
      user: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/attractions/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          attraction: response.data.attraction,
          address: response.data.address,
          imageURL: response.data.imageURL,
          description: response.data.description,
          ratings: response.data.ratings,
          user: response.data.user,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state.attraction);
  }
  render() {
    return (
      <div className="one-attraction row align-content-center justify-content-center">
        <div className="lefty col-6 col-md-4 col-8 text-center text-white">
          <h2 className="place-name">{this.state.attraction}</h2>
          <div className="place-photo">{this.state.image}</div>
        </div>
        <div className="righty col-6 col-md-4 col-8 bg-light text-center">
          <h5>{this.state.address}</h5>
          <div>{this.state.description}</div>
          <div>{this.state.ratings}</div>
          <div>{this.state.user}</div>
        </div>
      </div>
    );
  }
}
