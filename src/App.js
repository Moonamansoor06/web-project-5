import React from 'react';
import { Wave } from 'react-animated-text';
import './App.css';
import TextLoop from "react-text-loop";
import Breakfast from "./components/breakfast"
import Teatime from './components/teatime';
import Menu from "./menu";
import About from "./about";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Desifood from './components/desi';




function App() {

  return (
    <div className= "main-div">
            <Router>
              <div>
                <nav>
              <ul className="header">
                <li><Link to="./about.js" className="head-link" >About </Link></li>
                <li><Link to="./menu.js"  className="head-link" >Our Menu </Link></li>
                <li><a className="head-link" href="mailto:anoom06@gmail.com">Contact</a></li>
              </ul>
              </nav>
            
              <Switch>
                  <Route path="./about" component={About}>
                    
                  </Route>
                  <Route path="./menu">
                    <Menu />
                  </Route>
                
                </Switch>
                </div>
                </Router>  
      
    


      <div className="bg-image">
      <div className="image-text">
       <h1> <Wave
        text= "ZAeniee Foods"
        effect="pop"
       
        effectChange={2.0}
        effectDuration={0.3}
        
        /></h1>
        <TextLoop>
                    <span>Expert in Asian and Continental Cuisine</span>
                    <span>Commited to maintain quality standards</span>
                    <span>Affordable rates</span>
                    <span>Delivers food in shortest possible time</span>
                    <a id="loop-link" href="./menu">Our Menu</a>
                    
                </TextLoop>
        </div>
          </div>
          <div className="bf">
             <Breakfast /> 
             
             </div>
             <div className="tea"><Teatime /></div>
             <div className="desi"><Desifood /></div>
    
    </div>
  );
}

export default App;
