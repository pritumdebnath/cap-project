import React, { Component } from 'react';
import axios from 'axios';
import '../components/style/addAtractions.style.css';

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
  <div class="container">
  <div class="stepwizard col-md-offset-3">
    <div class="stepwizard-row setup-panel">
      <div class="stepwizard-step">
        <a href="#step-1" type="button" class="btn btn-primary btn-circle">1</a>
        <p>Attraction</p>
      </div>
      <div class="stepwizard-step">
        <a href="#step-2" type="button" class="btn btn-default btn-circle" disabled="disabled">2</a>
        <p>Detail</p>
      </div>
      <div class="stepwizard-step">
        <a href="#step-3" type="button" class="btn btn-default btn-circle" disabled="disabled">3</a>
        <p>Creator</p>
      </div>
    </div>
  </div>
  
  <form role="form" action="" method="post">
    <div class="row setup-content" id="step-1">
      <div class="col-xs-6 col-md-offset-3">
        <div class="col-md-12">
          <h3> Attraction</h3>
          <div class="form-group">
            <label class="control-label">Attraction</label>
            <input maxlength="100" type="text" required="required" class="form-control" placeholder="Enter Attraction"/>
          </div>
          <div class="form-group">
            <label class="control-label">Address</label>
            <textarea required="required" class="form-control" placeholder="Enter The Address"></textarea>
          </div>
          <button class="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>
        </div>
      </div>
    </div>
    <div class="row setup-content" id="step-2">
      <div class="col-xs-6 col-md-offset-3">
        <div class="col-md-12">
          <h3>Detail</h3>
          <div class="form-group">
            <label class="control-label">Image</label>
            <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Image URL"/>
          </div>
          <div class="form-group">
            <label class="control-label">description</label>
            <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Description"/>
          </div>
          <button class="btn btn-primary prevBtn btn-lg pull-left" type="button">Previous</button>
          <button class="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>
        </div>
      </div>
    </div>
    <div class="row setup-content" id="step-3">
      <div class="col-xs-6 col-md-offset-3">
        <div class="col-md-12">
          <h3>Creator</h3>
           <div class="form-group">
            <label class="control-label">Rating</label>
            <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Rating"/>
          </div>
          <div class="form-group">
            <label class="control-label">Creator</label>
            <input maxlength="200" type="text" required="required" class="form-control" placeholder="Enter Your Name"/>
          </div>
          <button class="btn btn-primary prevBtn btn-lg pull-left" type="button">Previous</button>
          <button class="btn btn-success btn-lg pull-right" type="submit">Submit</button>
        </div>
      </div>
    </div>
  </form>
</div>

    )
    
  }
}