import React from 'react'
import ReactDOM from 'react-dom'
//import { DragDropContext } from 'react-beautiful-dnd'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import "./Enter.css"

function Enter() {
      return (
          <div class="container">
        <div class="App" >
              <h1 fontFamily= "Roboto">Login</h1>
              <div class="lawd">
              <TextField required id="standard-required" label="Email"/>
              <br/>
              <TextField required id="standard-required" label="Password"/>
              <br/><br/>
              <Button variant="contained">
                 Log in
              </Button>
              <Button variant="contained">
                 Sign up
              </Button>
              </div>
              </div>
        </div>
      )
}
    
export default Enter;