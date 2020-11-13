/* global chrome */

import React from "react";
import ReactDom from "react-dom";
import fire from '../config/fire';
import Login from './components/Login';
import background from "../assets/background.png"
import Categories from "./components/Categories";
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Open Sans']
    }
})

var myUrl = ''

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            user: null,
            attemptedLogin: false,
            url: null
        }
        this.attemptedLogin = this.attemptedLogin.bind(this)
        this.setUrl = this.setUrl.bind(this)
    }

    componentDidMount() {
        this.authListener();
        
        // Below Needs to be Removed For Web Build
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
           var currentUrl = tabs[0].url;
            console.log("YO MAMA", currentUrl)
           myUrl = currentUrl
           console.log("MY MAMA", myUrl)
          
         });

        
         
    
    }

    setUrl(url) {
        console.log("WHAT IS THE URL:::", url)
        this.setState({
            url: url
        }, this.authListener)
    }

    attemptedLogin() {
        this.setState({
            attemptedLogin: true,
            url: myUrl
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
                {this.state.user  ? (<Categories user= {this.state.user} url = {this.state.url}/>) : (<Login/>)}
            </div>
        )
        }
    }
}




ReactDom.render(<App/>, document.getElementById("root"))