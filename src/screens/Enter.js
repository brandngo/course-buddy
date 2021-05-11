import React from "react";
import firebase from "firebase";
import "../util/Fire";

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
            <div>
                <input placeholder="email"
                    onChange={(event) =>
                        this.setState({ email: event.target.value })
                    }></input>
                <input placeholder="password"
                    onChange={(event) => {
                        this.setState({ password: event.target.value });
                    }}></input>
                <p>{this.state.message}</p>
                <button onClick={this.signIn}>Sign In</button>
                <button onClick={this.signUp}>Sign Up</button>
            </div>
        );
    }
}
