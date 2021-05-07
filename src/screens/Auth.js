import firebase from "firebase";
import React from "react";
import App from "../App";
import Enter from "./Enter";

export default class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null,
            usernameValue: "",
        };
        this.authListener = this.authListener.bind(this);
    }

    authListener() {
        var auth = firebase.auth();
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            } else this.setState({ user: null });
        });
    }

    initialToggle

    componentDidMount() {
        this.authListener();
        if (this.state.user) {
            this.setState({ user: this.state.user });
        } else this.setState({ user: null });
    }

    render() {
        if (this.state.user) {
            return <App user={this.state.user}></App>;
        } else return <Enter />;
    }
}