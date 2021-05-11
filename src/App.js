import './App.css';
import React from 'react';

// bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

// custom components
import Home from './screens/Auth.js'
import Navibar from './components/Navibar.js';
import Auth from "./screens/Auth";

function App() {
  return (
    <Auth />
  );
}

export default App;
