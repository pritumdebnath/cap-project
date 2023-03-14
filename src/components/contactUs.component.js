import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/contactus.style.css";
// import FooterHome from '../components/FooterHome'
// import '../styles/contact.css'
// import {BACKEND_URL} from '../config'


// export default class contactUs extends Component {
//   render() {
//     return (
//       <div>
//         <p>You are on the Contact Us component!</p>
//       </div>
//     )
//   }
// }

export default class contactUs extends Component {
  constructor (props){
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        name: " ",
        email: " ",
        number: " ",
        comment: " ",
      }
    }

  onChangeName(e){
    this.setState({
      name: e.target.value
    })
  }
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  onChangeNumber(e){
    this.setState({
      number: e.target.value
    })
  }
  onChangeComment(e){
    this.setState({
      comment: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const contact ={
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      comment: this.state.comment,
    }
    console.log(contact)
    axios.post('http://localhost:5000/contactus/add', contact)
    .then(res=>console.log(res.data));
    // window.location="/"
    this.props.history.push('/contactus');
    
    this.setState({
        name: '',
        email: '',
        number: '',
        comment: ''
    })
    window.alert('Thank you for your inquiry')
    console.log(contact)
  }
  render() {
    return (
      <div class="container mt-5 shadow ">
        <div class="row ">
            <div class="col-md-4 bg-primary p-5 text-white order-sm-first order-last">
                <h2>Let's get in touch</h2>
                <p>We're open for any suggestion or just to have a chat</p>
                <div class="d-flex mt-2">
                    <i class="bi bi-geo-alt"></i>
                    <p class="mt-3 ms-3">Address : Road 198 West 21th Street, Suite 721 Singapor WW 10016</p>
                </div>
                <div class="d-flex mt-2">
                    <i class="bi bi-telephone-forward"></i>
                    <p class="mt-4 ms-3">Phone : 8888888888</p>
                </div>
                <div class="d-flex mt-2">
                    <i class="bi bi-envelope"></i>
                    <p class="mt-4 ms-3">Email : contactform@gmail.com</p>
                </div>
                <div class="d-flex mt-2">
                    <i class="bi bi-youtube"></i>
                    <p class="mt-4 ms-3">Channel : www.contactform.com/</p>
                </div>
            </div>
            <div class="col-md-8 p-5 ">
                <h2>Get in touch</h2>
                <form class="row g-3 contactForm mt-4" id='contact-form' onSubmit={this.onSubmit}>
                    <div class="col-md-6 form-group">
                      <label for="inputEmail4" className="contact-label form-label">Name: </label>
                      <input
                        type="text email"
                        required
                        id="inputEmail4"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        >
                      </input>
                    </div>
                    {/* <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">Last Name</label>
                      <input type="password" class="form-control" id="inputPassword4" required/>
                    </div> */}
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">Message</label>
                      <input type="text" class="form-control" id="inputAddress" required/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Email</label>
                        <input type="text" class="form-control" id="inputAddress" required/>
                    </div>
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">Message</label>
                      <input type="text" class="form-control" id="inputAddress" required/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Email</label>
                        <input type="text" class="form-control" id="inputAddress" required/>
                    </div>
                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">Phone Number</label>
                      <input type="text" class="form-control" id="inputCity"/>
                    </div>
                    {/* <div class="col-md-6">
                        <label for="inputCity" class="form-label">Contact Number</label>
                        <input type="text" class="form-control" id="inputCity" required/>
                      </div> */}
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary mt-3">Submit</button>
                    </div>
                  </form>
            </div>
        </div>
    </div>
    )
  }
}

{/* <div>
      <div className="contactContainerReturn">
          <h3 className='text-center'>Contact Us</h3>
          <div className="containerContact">
            <div className="contentContact">
            <form id='contact-form' onSubmit={this.onSubmit}>
              <div className="form-group">
                <label className="contact-label">Name: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  >
                  </input>
              </div>
              <div className="form-group">
                  <label className="contact-label">Email:</label>
                  <input
                  type="email"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  >
                  </input>
              </div>
              <div className="form-group">
                  <label className="contact-label">Number:</label>
                  <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.number}
                  onChange={this.onChangeNumber}
                  >
                  </input>
              </div>
              <div className="form-group">
                <label className="contact-label">Comments:</label>
                  <textarea
                  type="text"
                  className="form-control"
                  value={this.state.comment}
                  onChange={this.onChangeComment}
                  >
                  </textarea>
              </div>
              <div className="form-group">
                  <input
                  type="submit"
                  value="Send"
                  className="btn btn-contact"
                  />
              </div>
            </form>
            </div>
            <div className="content">
            </div>
          </div>
      </div>
      </div> */}