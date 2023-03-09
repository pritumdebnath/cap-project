import React, { Component } from 'react';
import axios from 'axios';
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
      <div>
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
      {/* <FooterHome /> */}
      </div>
    )
  }
}