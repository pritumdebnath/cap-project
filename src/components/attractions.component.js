import React, { Component } from 'react';
// import { Link } from 'react-router-dom';  
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import kingsIsland from "../assets/kingsIsland2.jpeg";
import greatAmerican from "../assets/greatAmerican.jpeg";
import paycorStadium from "../assets/paycorStadium.jpeg";
import tqlStadium from "../assets/tqlStadium.jpeg";
import heritageBankArena from "../assets/heritageBankArena.jpeg";
import cincinnatiZoo from "../assets/cincinnatiZoo.jpeg";
import cincinnatiSkyline from "../assets/cincinnatiSkyline.jpeg";

import '../components/style/attractions.css';




const Attraction = props => (
    <tr>
      <td>{props.attraction.attraction}</td>
      <td>{props.attraction.address}</td>
      <td>{props.attraction.image}</td>
      <td>{props.attraction.description}</td>
      <td>{props.attraction.ratings}</td>
      <td>{props.attraction.user}</td>
      {/* <td>
        <Link to={"/edit/"+props.attraction._id}>edit</Link> | <a href="#" onClick={() => { props.deleteAttraction(props.attraction._id) }}>delete</a>
      </td> */}
    </tr>
  )


export default class Attractions extends Component {
    constructor(props) {  
        super(props); 
        
        this.deleteAttraction = this.deleteAttraction.bind(this); 
        
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

      deleteAttraction(id) {  
        axios.delete('http://localhost:5000/attractions/'+id)  
        .then(res => console.log(res.data)); 
    
        this.setState({  
        attractions: this.state.attractions.filter(el => el._id !== id)  
        })  
    }
    
      attractionList() {
        return this.state.attractions.map(currentattraction => {
          return <Attraction attraction={currentattraction} deleteAttraction={this.deleteAttraction} key={currentattraction._id}/>;
        })
      }
    
    render() {
    return (
      <div> 
      <img className="home-component" src={cincinnatiSkyline}alt="Cincinnati Skyline" />
            
        <h2 id="header">Posted Attractions</h2>

  <div className="container">
    <div className="row">
      <div className="col-md-4">
      <div class="card">     
   <h3 class="card-title kIHeader">Kings Island</h3>
    <div class="card-body">  
        <img className="card-img-top" src={kingsIsland}alt="Kings Island Roller Coaster" />
  
      <p class="card-text">Kings Island is a 364-acre amusement park located 24 miles (39 km) northeast of Cincinnati in Mason, Ohio, United States. Owned and operated by Cedar Fair, the park first opened in 1972 by the Taft Broadcasting Company.</p>
  
    </div>
    </div>
    </div>
    <div className="col-md-4">
    <div class="card">
    <h3 class="card-title gAHeader">Great American Ballpark</h3>
    <div class="card-body">
    <img className="card-img-top greatAmerican" src={greatAmerican}alt="greatAmericanStadium" />
      
      <p class="card-text">Located on the winding banks of the Ohio River in downtown Cincinnati, Great American Ball Park serves as the home of the Cincinnati Reds, baseball's first professional franchise.</p>
    </div>
  </div>
    </div>

      
<div className="col-md-4">
  <div class="card card">    
    <h3 class="card-title tQLHeader">TQL Stadium</h3>
    <div class="card-body ">
   
    <img className="card-img-top tql" src={tqlStadium}alt="TQL Stadium" />
    
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div class="card card">    
    <h3 class="card-title paycorHeader">Paycor Stadium</h3>
    <div class="card-body ">
   
    <img className="card-img-top paycor" src={paycorStadium}alt="Paycor Stadium" />
    
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div class="card card">    
    <h3 class="card-title hAHeader">Heritage Bank Arena</h3>
    <div class="card-body ">
   
    <img className="card-img-top heritage" src={heritageBankArena}alt="Cyclones Stadium" />
    
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div class="card card">    
    <h3 class="card-title cZHeader">Cincinnati Zoo</h3>
    <div class="card-body ">
   
    <img className="card-img-top cincinnatiZoo" src={cincinnatiZoo}alt="Land of Illusion" />
    
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
</div>
</div>

          <tbody>
            { this.attractionList() }
          </tbody>
      
      </div>

      
    )
  }
}