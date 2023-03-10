import React, { Component } from 'react';
import axios from 'axios';

export default class addAttractions extends Component {
  constructor(props) {
    super(props);

    this.onChangeAttraction = this.onChangeAttraction.bind(this);  
    this.onChangeAddress = this.onChangeAddress.bind(this);  
    this.onChangeImage = this.onChangeImage.bind(this);  
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeRatings = this.onChangeRatings.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        attraction: '',
        address: '',
        image: '',
        description: '',
        ratings: '',
        user: ''
    }
  }

  onChangeAttraction(e) {
    this.setState({
        attraction: e.target.value
    });
  }
  
  onChangeAddress(e) {
    this.setState({
        address: e.target.value
    });
  }
  
  onChangeImage(e) {
    this.setState({
        image: e.target.value
    });
  }
  
  onChangeDescription(e) {
    this.setState({
        description: e.target.value
    });
  }
  
  onChangeRatings(e) {
    this.setState({
        ratings: e.target.value
    });
  }
  
  onChangeUser(e) {
    this.setState({
        user: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const attraction = {
        attraction: this.state.attraction,
        address: this.state.address,
        image: this.state.image,
        description: this.state.description,
        ratings: this.state.ratings,
        user: this.state.user
    }
    axios.post('http://localhost:5000/attractions/add', attraction)
    .then(res => console.log(res.data));
    console.log(attraction);

    window.location = '/attractions';
    
    
  }
  
  render() {
    return (
      <div className="container">
  <form onSubmit={this.onSubmit}>
    <div className="row setup-content" id="step-1">
      <div className="col-md-6 offset-md-3">
        <h1 className="text-center">Attraction</h1>
        <div className="form-group">
          <input
            type="text"
            required
            className="form-control"
            value={this.state.attraction}
            onChange={this.onChangeAttraction}
            placeholder="Enter Attraction"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            required
            className="form-control"
            value={this.state.address}
            onChange={this.onChangeAddress}
            placeholder="Enter Address"
          />
        </div>
      </div>
    </div>
    <div className="row setup-content" id="step-2">
      <div className="col-md-6 offset-md-3">
        <h1 className="text-center">Detail</h1>
        <div className="form-group">
          <input
            type="text"
            required
            className="form-control"
            value={this.state.image}
            onChange={this.onChangeImage}
            placeholder="Enter Image URL"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            required
            className="form-control"
            value={this.state.description}
            onChange={this.onChangeDescription}
            placeholder="Enter Description"
          />
        </div>
      </div>
    </div>
    <div className="row setup-content" id="step-3">
      <div className="col-md-6 offset-md-3">
        <h1 className="text-center">Creator</h1>
        <div className="form-group">
          <input
            type="text"
            required
            className="form-control"
            value={this.state.ratings}
            onChange={this.onChangeRatings}
            placeholder="Enter Rating"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            required
            className="form-control"
            value={this.state.user}
            onChange={this.onChangeUser}
            placeholder="Enter Your Name"
          />
        </div>
        <div className="form-group text-center">
        <br />
          <button className="btn btn-primary btn-lg" type="submit">Submit</button>
        </div>
      </div>
    </div>
  </form>
</div>



);
}
}