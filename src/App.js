import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import Home from "./components/home.component";
import Attractions from "./components/attractions.component";
import addAttractions from "./components/addAttractions.component";
import About from "./components/about.component";
import Contact from "./components/contactUs.component"
import Showcase from './components/showcase';
import Middle from './components/middle.component';
import Footer from './components/footer.component';
import Slider from './components/slider.component';
import BookingPage from './components/booking.compontent';

function App() {
  return (
    <Router>
      <Navbar />
      {/* change route names */}
      <Route path="/" exact>
        <Showcase/>
        <br/>
        <br/>
        <Home />
        <Middle />
        <br />
        <Slider />
        <br />
      </Route>
      <Route path="/attractions" component={Attractions} />
      <Route path="/addattractions" component={addAttractions} />
      <Route path="/about" component={About} />
      <Route path="/contactus" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
