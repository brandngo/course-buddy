import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

// custom components
import Home from './screens/Home.js'
import Enter from "./components/Enter.js"
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
            component={Enter}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
