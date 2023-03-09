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
        <div>
        <h3>Add a New Attraction</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Attraction: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.attraction}
                onChange={this.onChangeAttraction}
                />
          </div>
          <div className="form-group"> 
            <label>Address: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.address}
                onChange={this.onChangeAddress}
                />
          </div>
          <div className="form-group">
            <label>ImageURL: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.image}
                onChange={this.onChangeImage}
                />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
                type="text"
                className='form-control'
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>
          <div className="form-group">
            <label>Rating: </label>
            <input
                type="text"
                className='form-control'
                value={this.state.ratings}
                onChange={this.onChangeRatings}
              />
            </div>
          <div className="form-group">
            <label>User: </label>
            <input
                type="text"
                className='form-control'
                value={this.state.user}
                onChange={this.onChangeUser}
              />
            </div>
          

          <div className="form-group">
            <input type="submit" value="Post New Attraction" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}