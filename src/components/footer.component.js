import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/footer.style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Company Name
              </h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam cupiditate, dignissimos sed modi tempora laborum maiores
                non facilis architecto quam!
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Pritum Debnath
              </h5>
              <p>
                <a href="https://www.linkedin.com/in/pritum-debnath-140766104/" className="text-white">
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/pritumdebnath" className="text-white">
                  Github
                </a>
              </p>
              <p>
                <a href="https://pritumdebnath.github.io/portfolio/" className="text-white">
                  Portfolio
                </a>
              </p>
              <p>
                <a href="mailto:pritumdebnath@gmail.com" className="text-white">
                  Email
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Gideon Asante
              </h5>
              <p>
                <a href="https://www.linkedin.com/in/gideonasanteacheampong/" className="text-white">
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/kwameasannte42" className="text-white">
                  Github
                </a>
              </p>
              <p>
                <a href="https://kwameasannte42.github.io/portfolio-with-bootstrap/" className="text-white">
                  Portfolio
                </a>
              </p>
              <p>
                <a href="mailto:kwameasante42@gmail.comgit" className="text-white">
                  Email
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Ibrahim Abdi
              </h5>
              <p>
                <a href="https://www.linkedin.com/in/ibrahim-abdi-1b9001260/" className="text-white">
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/IbrahimAbdi2003" className="text-white">
                  Github
                </a>
              </p>
              <p>
                <a href="https://ibrahimabdi2003.github.io/portFolio/" className="text-white">
                  Portfolio
                </a>
              </p>
              <p>
                <a href="mailto:ibrahimabdi2367@gmail.com" className="text-white">
                  Email
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Douglas Easterling
              </h5>
              <p>
                <a href="https://www.linkedin.com/in/douglas-e-67051b15b/" className="text-white">
                  LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/Holimon86" className="text-white">
                  Github
                </a>
              </p>
              <p>
                <a href="https://holimon86.github.io/portfolio/" className="text-white">
                  Portfolio
                </a>
              </p>
              <p>
                <a href="mailto:douglaseasterling@yahoo.com" className="text-white">
                  Email
                </a>
              </p>
            </div>
            {/* <hr className="mb-4"/> */}
            <div className=" align-items-center">
                <div className="col-md-7 col-lg-8">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                            <a href="https://facebook.com" className="btn-floating btn-sm text-white">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://twitter.com" className="btn-floating btn-sm text-white">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://instagram.com" className="btn-floating btn-sm text-white">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
