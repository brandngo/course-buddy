import "./Enter.css"
import React from "react"
import { TextField } from "@material-ui/core"
import Button from '@material-ui/core/Button';


function Enter() {

    return (
        <div class="first">
            <div class="next">
            <h1>Login</h1>
            <div class="login">
                <TextField required id="standard-required" label="Email"/>
                <br/>
                <TextField required id="standard-required" label="Password"/>
                <br/>
                <br/>
                <Button variant="contained" color="primary">
                    Sign in
                </Button>
                <Button variant="contained" color="secondary" className="but2">
                    Sign up
                </Button>
            </div>
            </div>
        </div>
    );
}

export default Enter;