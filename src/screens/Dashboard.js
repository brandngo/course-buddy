/////////////////////////////////////////////////////////
//
//
// NOTE: the Dashboard.js is a temporary file. 
// It MUST be replaced by App.js once bugs are fixed.
//
//
/////////////////////////////////////////////////////////

import React from 'react';
import firebase from 'firebase';

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div>
                <button onClick={this.signOut}>Sign Out</button>
            </div>
        )
    }
}