import React, { Component } from "react";
import axios from 'axios';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import '../components/style/booking.style.css';

export default class contactUs extends Component {
  constructor (props){
    super(props)
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeBookingComment = this.onChangeBookingComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        firstname: " ",
        lastname: " ",
        emailaddress: " ",
        phonenumber: " ",
        date: " ",
        time: " ",
        bookingcomment: " ",
      }
    }

  onChangeFirstName(e){
    this.setState({
      firstname: e.target.value
    })
  }
  onChangeLastName(e){
    this.setState({
      lastname: e.target.value
    })
  }
  onChangeEmailAddress(e){
    this.setState({
      emailaddress: e.target.value
    })
  }
  onChangePhoneNumber(e){
    this.setState({
      phonenumber: e.target.value
    })
  }
  onChangeDate(e){
    this.setState({
      date: e.target.value
    })
  }
  onChangeTime(e){
    this.setState({
      time: e.target.value
    })
  }
  onChangeBookingComment(e){
    this.setState({
      bookingcomment: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const booking ={
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      emailaddress: this.state.emailaddress,
      phonenumber: this.state.phonenumber,
      date: this.state.date,
      time: this.state.time,
      bookingcomment: this.state.bookingcomment,
    }
    console.log(booking)
    axios.post('http://localhost:5000/booking/add', booking)
    .then(res=>console.log(res.data));
    // window.location="/"
    this.props.history.push('/booking');
    
    this.setState({
        firstname: '',
        lastname: '',
        emailaddress: '',
        phonenumber: '',
        date: '',
        time: '',
        bookingcomment: ''
    })
    window.alert("Your trip has has been booked! We'll contact you soon to confirm the details.")
    console.log(booking)
  }

  render() {
    return (
      <div className="bookingbackground">
      <Container >
        <h1 className="text-center mb-5 h1-booking">Book a Trip</h1>
        <Form className="form-booking" onSubmit={this.onSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={this.state.firstname} 
                  onChange={this.onChangeFirstName}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={this.state.lastname} 
                  onChange={this.onChangeLastName}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={this.state.emailaddress}
              onChange={this.onChangeEmailAddress}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={this.state.phonenumber}
              onChange={this.onChangePhoneNumber}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.onChangeDate}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={this.state.time}
              onChange={this.onChangeTime}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicComments">
            <Form.Label>Comments or Special Requests</Form.Label>
            <Form.Control
              as="textarea"
              name="comments"
              value={this.state.bookingcomment}
              onChange={this.onChangeBookingComment}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      </div>
    )
  }
}

// export default BookingPage;

// function BookingPage() {
  //   const [showAlert, setShowAlert] = useState(false);
  //   const [formData, setFormData] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     date: "",
  //     time: "",
  //     guests: "",
  //     comments: "",
  //   });
  
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setShowAlert(true);
  //   };
  
  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };
  






  // <div class="containercontact shadow ">
  //       <div class="row">
  //           <div class="col-md-4 bg-primarycontact p-5 text-white order-sm-first order-last leftboxcontact">
  //               <h2>Queen City Tours</h2>
  //               <div className='sidebarcontact'>
  //               <div class="d-flex mt-2">
  //                   <i class="bi bi-geo-alt"></i>
  //                   <p class="mt-3 ms-3 pcontact">Address : 1 Queen City Way, Cincinnati, OH 45201</p>
  //               </div>
  //               <div class="d-flex mt-2">
  //                   <i class="bi bi-telephone-forward"></i>
  //                   <p class="mt-4 ms-3 pcontact">Phone : (513)000-0000</p>
  //               </div>
  //               <div class="d-flex mt-2">
  //                   <i class="bi bi-envelope"></i>
  //                   <p class="mt-4 ms-3 pcontact">Email : queencitytravel@email.com</p>
  //               </div>
  //               </div>
  //           </div>
  //           <div class="col-md-8 p-5 ">
  //               <h2>Book a Trip!</h2>
  //               <form class="row g-3 contactForm mt-4" id='contact-form' onSubmit={this.onSubmit}>
  //                   <div class="col-12 form-group">
  //                     <label for="inputAddress" class="contact-label form-label">First Name: </label>
  //                     <input 
  //                     type="text email" 
  //                     class="form-control" 
  //                     id="inputAddress" 
  //                     required 
  //                     value={this.state.firstname} 
  //                     onChange={this.onChangeFirstName}/>
  //                   </div>
  //                   <div class="col-12 form-group">
  //                     <label for="inputAddress" class="contact-label form-label">Last Name: </label>
  //                     <input 
  //                     type="text email" 
  //                     class="form-control" 
  //                     id="inputAddress" 
  //                     required 
  //                     value={this.state.lastname} 
  //                     onChange={this.onChangeLastName}/>
  //                   </div>
  //                   <div class="col-12 form-group">
  //                     <label for="inputAddress" class="contact-label form-label">Email: </label>
  //                     <input 
  //                     type="text email" 
  //                     class="form-control" 
  //                     id="inputAddress" 
  //                     required 
  //                     value={this.state.emailaddress}
  //                     onChange={this.onChangeEmailAddress}/>
  //                   </div>
  //                   <div class="col-12 form-group">
  //                     <label for="inputAddress" class="contact-label form-label">Phone Number: </label>
  //                     <input 
  //                     type="text email" 
  //                     class="form-control" 
  //                     id="inputAddress" 
  //                     required 
  //                     value={this.state.phonenumber}
  //                     onChange={this.onChangePhoneNumber}/>
  //                   </div>
  //                   <div class="col-12 form-group">
  //                     <label for="inputAddress" class="contact-label form-label">Date: </label>
  //                     <input 
  //                     type="text email" 
  //                     class="form-control" 
  //                     id="inputAddress" 
  //                     required 
  //                     value={this.state.date}
  //                     onChange={this.onChangeDate}/>
  //                   </div>
  //                   <div class="col-12 form-group">
  //                     <label for="inputAddress" class="contact-label form-label">Time: </label>
  //                     <input 
  //                     type="text email" 
  //                     class="form-control" 
  //                     id="inputAddress" 
  //                     required 
  //                     value={this.state.time}
  //                     onChange={this.onChangeTime}/>
  //                   </div>
  //                   <div class="col-12 form-group">
  //                     <label for="inputAddress" class="contact-label form-label">Comment: </label>
  //                     <input 
  //                     type="text email" 
  //                     class="form-control" 
  //                     id="inputAddress" 
  //                     required 
  //                     value={this.state.bookingcomment}
  //                     onChange={this.onChangeBookingComment}/>
  //                   </div>
  //                   <div class="col-12 form-group">
  //                     <button type="submit" class="btn1 btn-primary1 mt-3" value="Send">Submit</button>
  //                   </div>
  //                 </form>
  //           </div>
  //       </div>
  //   </div>
