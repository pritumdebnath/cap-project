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
      currentStep: 1, // added state to keep track of current step
      attraction: '',
      address: '',
      image: '',
      description: '',
      ratings: '',
      user: ''
    }
  }

  nextStep = () => {
    const { currentStep } = this.state;
    this.setState({ currentStep: currentStep + 1 });
  }

  prevStep = () => {
    const { currentStep } = this.state;
    this.setState({ currentStep: currentStep - 1 });
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
    this.nextStep(); // move to next step
  }
  
  render() {
    const { currentStep } = this.state;
    return (
      <div className="container-add" style={{ margin: '100px' }}>
        <form onSubmit={this.onSubmit}>
          {currentStep === 1 && (
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
                <br />
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
                <br />
                <div className="form-group text-center">
  <div className="row justify-content-between">
    <div className="col-6">
      <button className="btn btn-primary btn-lg" type="submit">Preview</button>
    </div>
    <div className="col-6 text-right">
      <button className="btn btn-success btn-lg" type="submit">Next</button>
    </div>
  </div>
</div>
              </div>
            </div>
          )}
          {currentStep === 2 && (
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
                <br />
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
                <br />
                <div className="form-group text-center">
  <div className="row justify-content-between">
    <div className="col-6">
      <button className="btn btn-primary btn-lg" type="submit">Preview</button>
    </div>
    <div className="col-6 text-right">
      <button className="btn btn-success btn-lg" type="submit">Next</button>
    </div>
  </div>
</div>
              </div>
            </div>
          )}
          {currentStep === 3 && (
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
                <br />
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
                <br />
                <div className="form-group text-center">
  <div className="row justify-content-between">
    <div className="col-6">
      <button className="btn btn-primary btn-lg" type="submit">Preview</button>
    </div>
    <div className="col-6 text-right">
      <button className="btn btn-success btn-lg" type="submit">Submit</button>
    </div>
  </div>
</div>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }
}