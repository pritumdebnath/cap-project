import React, { Component } from "react";
import axios from 'axios';
import { Alert } from "react-bootstrap";
import '../components/style/booking.style.css';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      emailaddress: "",
      phonenumber: "",
      date: "",
      time: "",
      bookingcomment: "",
      showAlert: false, // add showAlert to state and initialize it to false
    };
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeBookingComment = this.onChangeBookingComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeFirstName(e) {
    this.setState({
      firstname: e.target.value,
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value,
    });
  }
  onChangeEmailAddress(e) {
    this.setState({
      emailaddress: e.target.value,
    });
  }
  onChangePhoneNumber(e) {
    this.setState({
      phonenumber: e.target.value,
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }
  onChangeTime(e) {
    this.setState({
      time: e.target.value,
    });
  }
  onChangeBookingComment(e) {
    this.setState({
      bookingcomment: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const booking = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      emailaddress: this.state.emailaddress,
      phonenumber: this.state.phonenumber,
      date: this.state.date,
      time: this.state.time,
      bookingcomment: this.state.bookingcomment,
    };
    axios.post('http://localhost:5000/booking/add', booking)
      .then(res => {
        console.log(res.data);
        this.setState({ showAlert: true }); // set showAlert to true after form submission
      })
      .catch(err => console.log(err));
    this.props.history.push('/booking');
    this.setState({
      firstname: "",
      lastname: "",
      emailaddress: "",
      phonenumber: "",
      date: "",
      time: "",
      bookingcomment: "",
    });
  }

  render() {
    const { showAlert } = this.state; // destructure showAlert from state
    return (
      <div className="containercontact shadow">
        <div className="row">
          {showAlert && ( // display Alert only when showAlert is true
            <Alert
              variant="success"
              onClose={() => this.setState({ showAlert: false })}
              dismissible
            >
              Your trip has been booked! We'll contact you soon to confirm the details.
            </Alert>
          )}
          <div className="col-md-8 p-5 ">
            <h2>Book a Trip!</h2>
            <form
              className="row g-3 contactForm mt-4"
              id="contact-form"
              onSubmit={this.onSubmit}
            >
              <div class="col-12 form-group">
                <label htmlFor="inputAddress" className="contact-label form-label">First Name: </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputAddress" 
                  required 
                  value={this.state.firstname} 
                  onChange={this.onChangeFirstName}
                />
              </div>
              <div class="col-12 form-group">
                <label htmlFor="inputAddress2" className="contact-label form-label">Last Name: </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputAddress2" 
                  required 
                  value={this.state.lastname} 
                  onChange={this.onChangeLastName}
                />
              </div>
              <div class="col-12 form-group">
                <label htmlFor="inputEmail" className="contact-label form-label">Email: </label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="inputEmail" 
                  required 
                  value={this.state.emailaddress}
                  onChange={this.onChangeEmailAddress}
                />
              </div>
              <div class="col-12 form-group">
                <label htmlFor="inputPhone" className="contact-label form-label">Phone Number: </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="inputPhone" 
                  required 
                  value={this.state.phonenumber}
                  onChange={this.onChangePhoneNumber}
                />
              </div>
              <div class="col-12 form-group">
                <label htmlFor="inputDate" className="contact-label form-label">Date: </label>
                <input 
                  type="date" 
                  className="form-control" 
                  id="inputDate" 
                  required 
                  value={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
              <div class="col-12 form-group">
                <label htmlFor="inputTime" className="contact-label form-label">Time: </label>
                <input 
                  type="time" 
                  className="form-control" 
                  id="inputTime" 
                  required 
                  value={this.state.time}
                  onChange={this.onChangeTime}
                />
              </div>
              <div class="col-12 form-group">
                <label htmlFor="inputComment" className="contact-label form-label">Comment: </label>
                <textarea 
                  className="form-control" 
                  id="inputComment" 
                  required 
                  value={this.state.bookingcomment}
                  onChange={this.onChangeBookingComment}
                ></textarea>
              </div>
                    <div class="col-12 form-group">
                      <label for="inputAddress" class="contact-label form-label">Comment: </label>
                      <input 
                      type="text email" 
                      class="form-control" 
                      id="inputAddress" 
                      required 
                      value={this.state.bookingcomment}
                      onChange={this.onChangeBookingComment}/>
                    </div>
                    <div class="col-12 form-group">
                      <button type="submit" class="btn1 btn-primary1 mt-3" value="Send">Submit</button>
                    </div>
                  </form>
            </div>
        </div>
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
  
  //   return (
  //     <div className="bookingbackground">
  //     <Container >
  //       <h1 className="text-center mb-5 h1-booking">Book a Trip</h1>
  //       {showAlert && (
  //         <Alert
  //           variant="success"
  //           onClose={() => setShowAlert(false)}
  //           dismissible
  //         >
  //           Your trip has has been booking! We'll contact you soon to confirm
  //           the details.
  //         </Alert>
  //       )}
  //       <Form className="form-booking" onSubmit={handleSubmit}>
  //         <Row>
  //           <Col md={6}>
  //             <Form.Group controlId="formBasicFirstName">
  //               <Form.Label>First Name</Form.Label>
  //               <Form.Control
  //                 type="text"
  //                 name="firstName"
  //                 value={formData.firstName}
  //                 onChange={handleChange}
  //                 required
  //               />
  //             </Form.Group>
  //           </Col>
  //           <Col md={6}>
  //             <Form.Group controlId="formBasicLastName">
  //               <Form.Label>Last Name</Form.Label>
  //               <Form.Control
  //                 type="text"
  //                 name="lastName"
  //                 value={formData.lastName}
  //                 onChange={handleChange}
  //                 required
  //               />
  //             </Form.Group>
  //           </Col>
  //         </Row>
  //         <Form.Group controlId="formBasicEmail">
  //           <Form.Label>Email address</Form.Label>
  //           <Form.Control
  //             type="email"
  //             name="email"
  //             value={formData.email}
  //             onChange={handleChange}
  //             required
  //           />
  //         </Form.Group>
  //         <Form.Group controlId="formBasicPhone">
  //           <Form.Label>Phone Number</Form.Label>
  //           <Form.Control
  //             type="tel"
  //             name="phone"
  //             value={formData.phone}
  //             onChange={handleChange}
  //             required
  //           />
  //         </Form.Group>
  //         <Form.Group controlId="formBasicDate">
  //           <Form.Label>Date</Form.Label>
  //           <Form.Control
  //             type="date"
  //             name="date"
  //             value={formData.date}
  //             onChange={handleChange}
  //             required
  //           />
  //         </Form.Group>
  //         <Form.Group controlId="formBasicTime">
  //           <Form.Label>Time</Form.Label>
  //           <Form.Control
  //             type="time"
  //             name="time"
  //             value={formData.time}
  //             onChange={handleChange}
  //             required
  //           />
  //         </Form.Group>
  //         <Form.Group controlId="formBasicComments">
  //           <Form.Label>Comments or Special Requests</Form.Label>
  //           <Form.Control
  //             as="textarea"
  //             name="comments"
  //             value={formData.comments}
  //             onChange={handleChange}
  //           />
  //         </Form.Group>
  //         <Button variant="primary" type="submit">
  //           Submit
  //         </Button>
  //       </Form>
  //     </Container>
  //     </div>
  //   );
  // }
