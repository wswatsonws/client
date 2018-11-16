import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Drawer,Button} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About';
class App extends Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };
  
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button onClick={this.toggleDrawer('left', true)}>
            Open left
          </Button>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            > 
            <p>LEFT</p>
            </div>
          </Drawer>
          <Button><Link to="/about/">About</Link></Button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Route path="/About/" component={About} />
      </div>
      </Router>
    );
  }
}

export default App;
