import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Auth from "./screens/Auth"

// custom components
import Navibar from './components/Navibar.js';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navibar />
        <Switch>
          <Route
            exact
            path="/"
            component={Auth}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;