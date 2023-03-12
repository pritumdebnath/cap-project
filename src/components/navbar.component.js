import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../components/style/navbar.style.css";
import image1 from '../assets/menubutton.png';


export default class Navbar extends Component {


  render() {
    return (
      <nav className='navbar navbarfont'>
        <Link to="/" className='logo'>QCT</Link>
        <div className='nav-links navbarfont'>
          <ul>
            <li className='active'>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/attractions">Attractions</Link>
            </li>
            <li>
              <Link to="/addattractions">Add Attraction</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
        <img src={image1} alt='navbutton' className='menu-hamburger'/>
      </nav>
    );
  }
}

// const menuHamburger = document.querySelector('.menu-hamburger')
// const navLinks = document.querySelector('.nav-links')

// menuHamburger.addEventListener('click',()=>{
//   navLinks.classList.toggle('mobile-menu')
// })

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