/* global chrome */

import React from "react";
import ReactDom from "react-dom";
import fire from '../config/fire';
import Login from './components/Login';
import Home from './components/Home';
import NewHome from "./components/NewHome";
import background from "../assets/background.png"
import Categories from "./components/Categories";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            user: null,
            attemptedLogin: false
        }
        this.attemptedLogin = this.attemptedLogin.bind(this)
    }

    componentDidMount() {
        this.authListener();

        //Below Needs to be Removed For Web Build
        // chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        //    var currentUrl = tabs[0].url;
        //     console.log(currentUrl)
        //  });
    
    }

    attemptedLogin() {
        this.setState({
            attemptedLogin: true
        })
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user}, this.attemptedLogin)
            } else {
                this.setState({user: null,
                   
                }, this.attemptedLogin)
            }
        })
    }

  
    
    render() {
        if (this.state.attemptedLogin === false) {
            return (
                <div style = {{backgroundImage: `url(${background})`, width: '360px', height: '600px'}}>
                    </div>
            )
        } else if (this.state.attemptedLogin) {
        return (
            <div style = {{backgroundImage: `url(${background})`, width: '360px', height: '600px'}}>
                {this.state.user  ? (<Categories user= {this.state.user}/>) : (<Login/>)}
            </div>
        )
        }
    }
}




ReactDom.render(<App/>, document.getElementById("root"))