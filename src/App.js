import React, { Component } from 'react';
import './scssfiles/stylesheets.scss';
import {Provider} from 'react-redux'
import store from './store'

import { Route } from 'react-router-dom'
import OverOns from './pages/OverOns';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

class App extends Component {
  render() {


    return (
      <Provider store={store}>
      <div className="App">
    
        <Route exact path="/" component={Home} />
        <Route exact path="/overons" component={ OverOns }  />
        <Route exact path="/portfolio" component={ Portfolio }  />
        <Route exact path="/contact" component={ Contact }  />
     
       
      </div>
      </Provider>
    );
  }
}

export default App;
