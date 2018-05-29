import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/layout/navbar';
import Home from './components/layout/home';



import './App.css';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <Home />
        </div>       
      </MuiThemeProvider>
    );
  }
}

export default App;
