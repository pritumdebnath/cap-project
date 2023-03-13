import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "../components/style/footer.style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Footer extends Component {
    
    render() {
        return (
            <footer className='bg-dark text-white pt-5 pb-4'>
                <div className='container text-center text-md-left'>
                    <div className='row text-center text-md-left'>
                        <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Company Name</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate, dignissimos sed modi tempora laborum maiores non facilis architecto quam!</p>

                            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                                <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Products</h5>
                                <p>
                                    <a href="#" className='text-white'>Lorem ipsum dolor sit amet.</a>
                                </p>
                                <p>
                                    <a href="#" className='text-white'>Lorem ipsum dolor sit amet.</a>
                                </p>
                                <p>
                                    <a href="#" className='text-white'>Lorem ipsum dolor sit amet.</a>
                                </p>
                                <p>
                                    <a href="#" className='text-white'>Lorem ipsum dolor sit amet.</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        );
    }
}