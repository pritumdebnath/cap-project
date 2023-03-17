import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
// import kingsIsland from "../assets/kingsIsland2.jpeg";
// import greatAmerican from "../assets/greatAmerican.jpeg";
// import paycorStadium from "../assets/paycorStadium.jpeg";
// import tqlStadium from "../assets/tqlStadium.jpeg";
// import heritageBankArena from "../assets/heritageBankArena.jpeg";
// import ucCampus from "../assets/ucCampus.jpeg";
// import xavierUniversity from "../assets/xavierUniversity.jpeg";
// import cincinnatiZoo from "../assets/cincinnatiZoo.jpeg";
// import taftTheater from "../assets/taftTheater.jpeg";
//import cincinnatiSkyline from "../images/cincinnatiSkyline.jpeg";
//import cincinnatiSportsLogos from "../assets/cincinnatiSportsLogos.png";

=======
import cincinnatiSkyline from '../assets/cincinnatiSkyline.jpeg';
>>>>>>> a4a5aa2cdbea481cf688e1a9bf8517d1a1b8e732
import '../components/style/attractions.css';


const Attraction = props => {
  return (
<<<<<<< HEAD
    <>
=======
>>>>>>> a4a5aa2cdbea481cf688e1a9bf8517d1a1b8e732
    <div className='attractionscards'>
        <div class="card">     
          <div class="card-body">
            <div className='attractioncardtitle'>
              {props.attraction.attraction}
            </div> 
            <div>
              <img src={props.attraction.image} alt="" className='card-img-top attractioncardimage' />
            </div>
            <div>
              <button type="button" class="btn btn-primary2">
                <Link Link to={"attractions/" + props.attraction._id}>See More</Link>
              </button> 
            </div>  
          </div>
        </div>
    </div>
  )
}


export default class Attractions extends Component {
    constructor(props) {  
        super(props); 
        
        this.state = {attractions: []};  
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/attractions/')
         .then(response => {
           this.setState({ attractions: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }
    
      attractionList() {
        return this.state.attractions.map(currentattraction => {
          return <Attraction attraction={currentattraction} key={currentattraction._id}/>;
        })
      }
    
  render() {
    return (
<<<<<<< HEAD
  <div>
  <div className='skyline'>
  </div>
  <div className='backattractions'>
  <h2 id="header">Posted Attractions</h2>
  <div>

  <div>
    <div className='attractionscards'>
      {this.attractionList()}
    </div>
  </div>

  </div>
  </div>

  {/* <div className="col-md-4">
      <div class="card">     
        <div class="card-body">  
          {this.attractionList()}
=======
      
      <div>
        <div>
          <img src={cincinnatiSkyline} alt="" className='skyline' />
        </div>
        <div className='backattractions'>
          <h2 id="header">Posted Attractions</h2>
          <div>
              <div className='attractionscards'>
                {this.attractionList()}
              </div>
          </div>
>>>>>>> a4a5aa2cdbea481cf688e1a9bf8517d1a1b8e732
        </div>
      </div>
      
    )
  }
}
