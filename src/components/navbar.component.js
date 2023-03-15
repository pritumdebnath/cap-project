import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/navbar.style.css";
import './style/fontawesome/css/all.css';
import image1 from './style/images/qctlogo2.png'


export default class Navbar extends Component { 
  
  render() {
    return (
      <nav className='navbarposition'>
      <header className='headercontact'>
        <div className='container-fluidcontact'>
          <div className='navb-logo'>
            <Link to="/">
              <img src={image1} alt="logo" />
            </Link>
          </div>
          <div className='navb-items d-none d-xl-flex collapse nav-links navbarfont' id='navbarSupportedContent'>
            <div className='itemcontact'>
              <Link to="/" className='acontact'>Home</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/attractions" className='acontact'>Attractions</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/addattractions" className='acontact'>Add Attraction</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/about" className='acontact'>About</Link>
            </div>
            <div className='itemcontact'>
              <Link to="/contactus" className='acontact'>Contact Us</Link>
            </div>
          </div>

          <div className='mobile-toggler d-lg-none'>
              <a href="/" data-bs-toggle='modal' data-bs-target='#navbModal'>
                <i className='fa-solid fa-bars icontact'></i>
              </a>
          </div>

          <div class="modal fade" id="navbModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <img src={image1} alt="Logo"/>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            
                            <div class="modal-line">
                              <Link to="/" className='acontact'>Home</Link>
                            </div>

                            <div class="modal-line">
                            <Link to="/attractions" className='acontact'>Attractions</Link>
                            </div>

                            <div class="modal-line">
                            <Link to="/addattractions" className='acontact'>Add Attraction</Link>
                            </div>

                            <div class="modal-line">
                            <Link to="/about" className='acontact'>About</Link>
                            </div>
                            
                            <div class="modal-line">
                            <Link to="/contactus" className='acontact'>Contact Us</Link>
                            </div>

                        </div>

                        {/* <div class="mobile-modal-footer">
                            
                            <a target="_blank" href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a target="_blank" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a target="_blank" href="#"><i class="fa-brands fa-youtube"></i></a>
                            <a target="_blank" href="#"><i class="fa-brands fa-facebook"></i></a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
      </header>
      </nav>
    );
  }
}



/* <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/attractions" className="nav-link">Attractions</Link>
          </li>
          <li className="navbar-item">
          <Link to="/addattractions" className="nav-link">Add Attraction</Link>
          </li>
          <li className="navbar-item">
          <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="navbar-item">
          <Link to="/contactus" className="nav-link">Contact Us</Link>
          </li>
        </ul>
        </div>
      </nav> */

/* <header className="main-header">
      <div className="container">
        <nav className='navbar navbar-expand-lg main-nav px-0'> */
          /* <a className='navbar-brand'></a> */
    //       <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#mainMenu' aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="icon-bar icon-bar-1"></span>
    //         <span className="icon-bar icon-bar-2"></span>
    //         <span className="icon-bar icon-bar-3"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="mainMenu">
    //       <ul className="navbar-nav ml-auto text-uppercase f1">
    //         <li>
    //           <Link to="/" className="navbar-brand">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/attractions" className="nav-link">Attractions</Link>
    //         </li>
    //         <li>
    //           <Link to="/addattractions" className="nav-link">Add Attraction</Link>
    //         </li>
    //         <li>
    //           <Link to="/about" className="nav-link">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/contactus" className="nav-link">Contact Us</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
    // </header>


  //   <nav className="navbar active navbarfont navbar-expand-lg" id="nav-container">
  //   <button
  //     className="navbar-toggler"
  //     type="button"
  //     data-bs-toggle="collapse"
  //     data-bs-target="#navbarSupportedContent"
  //     aria-controls="navbarSupportedContent"
  //     aria-expanded="false"
  //     aria-label="Toggle navigation"
  //   >
  //     <span className="navbar-toggler-icon"></span>
  //   </button>
  //   <div className="collapse navbar-collapse nav-links navbarfont" id="navbarSupportedContent">
  //     <Link to="/" className="logo">QCA</Link>
  //       <ul className="navbar-nav">
  //         <li className="active nav-item">
  //           <Link to="/" className="nav-link">Home</Link>
  //         </li>
  //         <li className="active nav-item">
  //           <Link to="/attractions" className="nav-link">Attractions</Link>
  //         </li>
  //         <li className="active nav-item">
  //           <Link to="/addattractions" className="nav-link">Add Attraction</Link>
  //         </li>
  //         <li className="active nav-item">
  //           <Link to="/about" className="nav-link">About</Link>
  //         </li>
  //         <li className="active nav-item">
  //           <Link to="/contactus" className="nav-link">Contact Us</Link>
  //         </li>
  //       </ul>
  //     </div>
  // </nav>
