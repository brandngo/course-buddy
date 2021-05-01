import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// bootstrap components
import { Container, Row, Col } from 'react-bootstrap';

// custom components
import Home from './screens/Home.js'
import Navibar from './components/Navibar.js';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navibar/>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
