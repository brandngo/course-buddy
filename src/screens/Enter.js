import React from "react";
import firebase from "firebase";
import "../util/Fire";
import "./styles/Enter.css"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { ButtonGroup } from "@material-ui/core";

export default class Enter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: "",
        };
        this.signUp = this.signUp.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    signIn() {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => this.setState({ message: error.message }));
    }

    signUp() {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                this.setState({
                    message: error.message
                });
            });
    }

    render() {
        return (
            <div class="container">
                <div class="App" >
                    <h1 fontFamily="Roboto">Login</h1>
                    <div class="auth-container">
                        <TextField required id="standard-required" label="Email"
                            onChange={(event) =>
                                this.setState({ email: event.target.value })
                            } />
                        <br />
                        <TextField required id="standard-required" label="Password"
                            onChange={(event) => {
                                this.setState({ password: event.target.value });
                            }} />
                        <br /><br />
                        <p style={{ color: "red" }}>{this.state.message}</p>
                        <ButtonGroup>
                            <Button onClick={this.signIn}>Log in</Button>
                            <Button onClick={this.signUp}>Sign Up</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        )
    }
}
