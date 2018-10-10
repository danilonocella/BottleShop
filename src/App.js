import React, { Component } from 'react';
import './App.css';

import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Router from './Router';
// import PersistentDrawer from './components/common/PersistentDrawer';


class App extends Component {
  render() {
    return (
      
      <div className="site">
          <div className="site-content">
            <NavBar />
            <Router />  
          </div>
          <Footer />
      </div>

    );
  }
}

export default App;
