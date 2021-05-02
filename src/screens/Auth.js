import React, { Component } from 'react';

export default class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: undefined,
            password: undefined,
            message: "",
            isLogged: false
        };
    }

    checkIfUserExistsWhileSignUp() {
        var ref = firebase.database().ref("users");
        ref.child(this.state.username).once("value", (snap) => {
            if (snap.exists()) {
                this.setState({ message: "Username already taken!" });
            } else {
                this.signUp();
            }
        });
    }

    signUp() {
        var formatUsername = /[!-\/:-@[-`{-~ ]/;
        var formatPassword = /[^ -~]/;

        if ((this.state.username.length <= 6) |
            (this.state.password.length <= 6) |
            formatUsername.test(this.state.username) |
            formatPassword.test(this.state.password)) {
            this.setState({ message: "Invalid username or password!" });
        } else {
            var ref = firebase.database().ref("users");
            ref.child(this.state.username).set({
                username: this.state.username,
                password: this.state.password,
                isLogged: true
            });
        }
    }

    checkIfUserExistsWhileLogIn() {
        var ref = firebase.database().ref("users");
        ref.child(this.state.username).once("value", (snap) => {
            console.log(snap.val());
            if (snap.exists()) {
                if (snap.val().password !== this.state.password) {
                    this.setState({ message: "Wrong Password!" });
                }
                // Logging in after know that the user actually exists
                this.logIn();
            } else {
                this.setState({ message: "Account does not exist!" });
            }
        });
    }

    logIn() {
        this.setState({ isLogged: true });
    }

    render() {
        if (!this.state.isLogged) { // Not logged in here, forms are displayed
            return (
                <div> // Container Div.
                    <input placeholder="Username"
                        type="text"
                        onChange={(e) =>
                            this.setState({ username: e.target.value })}></input>
                    <br />
                    <input placeholder="Password"
                        type="text"
                        onChange={(e) =>
                            this.setState({ password: e.target.value })}></input>
                    <button onClick={this.checkIfUserExistsWhileSignUp.bind(this)}>
                        Sign Up!
                </button>
                    <button onClick={this.checkIfUserExistsWhileLogIn.bind(this)}>
                        Log In!
                </button>
                </div> // Container Div.
            )
        } else {
            <div>You're logged in!</div> // Logged in here
        }
    }
}