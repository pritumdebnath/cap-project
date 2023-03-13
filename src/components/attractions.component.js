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
        <h3>Posted Attractions</h3>

  <div className="container">
    <div className="row">
      <div className="col-md-4">
      <div class="card">     
   <h4 class="card-title">Kings Island</h4>
    <div class="card-body">  
        <img className="card-img-top" src={kingsIsland}alt="Kings Island Roller Coaster" />
  
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  
    </div>
    </div>
    </div>
    <div className="col-md-4">
    <div class="card">
    <h4 class="card-title gAHeading">Great American Ballpark</h4>
    <div class="card-body">
    <img className="card-img-top greatAmerican" src={greatAmerican}alt="greatAmericanStadium" />
      
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
    </div>

      
<div className="col-md-4">
  <div class="card card">    
    <h4 class="card-title">TQL Stadium</h4>
    <div class="card-body ">
   
    <img className="card-img-top tql" src={tqlStadium}alt="TQL Stadium" />
    
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div class="card card">    
    <h4 class="card-title">Paycor Stadium</h4>
    <div class="card-body ">
   
    <img className="card-img-top paycor" src={paycorStadium}alt="Paycor Stadium" />
    
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div class="card card">    
    <h4 class="card-title">Heritage Bank Arena</h4>
    <div class="card-body ">
   
    <img className="card-img-top heritage" src={heritageBankArena}alt="Cyclones Stadium" />
    
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div class="card card">    
    <h4 class="card-title">Cincinnati Zoo</h4>
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