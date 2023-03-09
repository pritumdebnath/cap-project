import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';

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
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Attraction</th>
              <th>Address</th>
              <th>ImageURL</th>
              <th>Description</th>
              <th>Ratings</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            { this.attractionList() }
          </tbody>
        </table>
      </div>
    )
  }
}