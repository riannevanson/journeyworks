import React, { Component } from 'react';
import './scssfiles/stylesheets.scss';
import Menu  from './components/Menu';
import Header  from './components/Header';
import Introblock  from './components/Introblock';
import UXblock from './components/UXblock';

import { BrowserRouter as Route } from "react-router-dom";
import OverOns from './pages/OverOns';

class App extends Component {
  render() {

    let links = [
      {
       label: 'home', link: '#home', active: true 
      },
      {
        label: 'over ons', link: '#overons' 
       },
       {
        label: 'portfolio', link: '#portfolio' 
       },
       {
        label: 'contact', link: '#contact' 
       }
    ];

    return (
      <div className="App">
      
        <Menu links={links}/>
        <Header className="App-header"/>
        <Introblock/>
        <UXblock/>

        <Route path="/:overons" component={ OverOns } />
     
       
      </div>
    );
  }
}

export default App;
