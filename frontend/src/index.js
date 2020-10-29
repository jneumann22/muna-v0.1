/* global chrome */

import React from "react";
import ReactDom from "react-dom";
import fire from '../config/fire';
import Login from './components/Login';
import Home from './components/Home';
import NewHome from "./components/NewHome";
import background from "../assets/background.png"



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            user: {}
        }

    }

    componentDidMount() {
        this.authListener();

        //Below Needs to be Removed For Web Build
        // chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        //    var currentUrl = tabs[0].url;
        //     console.log(currentUrl)
        //  });
    
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user})
            } else {
                this.setState({user: null})
            }
        })
    }
    
    render() {
        return (
            <div style = {{backgroundImage: `url(${background})`, width: '400px', height: '600px'}}>
                {this.state.user ? (<NewHome user= {this.state.user}/>) : (<Login/>)}
            </div>
        )
    }
}




ReactDom.render(<App/>, document.getElementById("root"))