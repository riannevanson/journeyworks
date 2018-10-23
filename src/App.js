import React, { Component } from 'react';
import Menu  from './components/Menu';
import Header  from './components/Header';
import Introblock  from './components/Introblock';
import UXblock from './components/UXblock';
import './scssfiles/stylesheets.scss';
import { BrowserRouter as Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header className="App-header"/>
        <Introblock/>
        <UXblock/>

        {/* <Route path="/:Header" component={ Header } /> */}
     
       
      </div>
    );
  }
}

export default App;
