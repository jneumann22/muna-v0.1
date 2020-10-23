import React from "react";
import fire from "../../config/fire";
import axios from "axios";

var localApi = "http://localhost:5000"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            name: "",
            login: true
        }

        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.goTosignup = this.goTosignup.bind(this)
        this.signUp = this.signUp.bind(this)

    }

    componentDidMount() {
  
    }

    login(e) {
        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err)=> {
            console.log(err)
        })
    }

    signUp(e) {
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
            let user = {
                uid: u.user.uid,
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
                
            }
            axios.post(`${localApi}/CreateUser`, {user}).then(res => {
                console.log(res)
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    goTosignup() {
        this.setState({
            login: false
        })
    }

    goToLogin() {
        this.setState ({
            login: true
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.login  ? 
                <form>
                    <input
                    type = "email"
                    name = "email"
                    id = "email"
                    placeholder = "enter Email"
                    onChange = {this.handleChange}
                    value = {this.state.email}
                    />
                    <input
                    type = "password"
                    name = "password"
                    id = "password"
                    onChange = {this.handleChange}
                    placeholder = "enter password"
                    value = {this.state.password}
                    />
                    <button onClick={this.login}>Login</button>
                    <button onClick = {this.goTosignup}>Sign Up</button>
                </form>
               :
               <div>
                   <h1>Sign Up</h1>
                   <form>
                    <input
                    type = "email"
                    name = "email"
                    id = "email"
                    placeholder = "enter Email"
                    onChange = {this.handleChange}
                    value = {this.state.email}
                    />
                    <input
                    type = "password"
                    name = "password"
                    id = "password"
                    onChange = {this.handleChange}
                    placeholder = "enter password"
                    value = {this.state.password}
                    />
                    <input
                    type = "name"
                    name = "name"
                    id = "name"
                    onChange = {this.handleChange}
                    placeholder = "Full Name"
                    value = {this.state.name}
                    />
                    <button onClick={this.signUp}>Sign Up</button>
                    <button onClick = {this.goToLogin}>Login</button>
                </form>
               </div>
               
               }


            </div>
        )
    }
}

export default Login