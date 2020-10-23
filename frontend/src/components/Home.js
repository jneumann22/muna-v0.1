/* global chrome */
import React from "react";
import fire from '../../config/fire'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            url: ""
        }


       
    }

 

    logout() {
        fire.auth().signOut()
    }
    render() {
        return (
            <div>
             <h1>You are logged In</h1>
             <button onClick = {this.logout}>Log Out</button>


            </div>
        )
    }
}

export default Home