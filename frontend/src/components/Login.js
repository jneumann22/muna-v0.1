import React from "react";
import fire from "../../config/fire";
import axios from "axios";
import Styles from '../styles/login.css';
import logo from  '../../assets/muna2.png'

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
        this.goToLogin = this.goToLogin.bind(this)
        this.signUp = this.signUp.bind(this)

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
            <div className={Styles.holder}>
                <div>
                    <img className = {Styles.logo} src = {logo} />
                </div>
                {this.state.login  ? 
                <div className={Styles.componentHolder}>
                    <div className={Styles.header}>login</div>
                    <div className = {Styles.formGroup}>
                    <input
                    type = "email"
                    name = "email"
                    id = "email"
                    // placeholder = "enter Email"
                    onChange = {this.handleChange}
                    value = {this.state.email}
                    className={Styles.input}
                    />
                    <label>email</label>
                    </div>
                    <div className = {Styles.formGroup}>
                    <input
                    type = "password"
                    name = "password"
                    id = "password"
                    onChange = {this.handleChange}
                    // placeholder = "enter password"
                    value = {this.state.password}
                    />
                    <label>password</label>
                    </div>
                    <button className={Styles.loginBtn} onClick={this.login}>Login</button>
                    <button className = {Styles.signUpBtn} onClick = {this.goTosignup}>Sign Up</button>
                    
                </div>
               :
               <div className={Styles.componentHolder}>
                   <div className={Styles.header}>sign up</div>
                   <div className = {Styles.formGroup}>
                    <input
                    type = "email"
                    name = "email"
                    id = "email"
                    placeholder = "enter Email"
                    onChange = {this.handleChange}
                    value = {this.state.email}
                    />
                    <label>email</label>
                    </div>
                    <div className = {Styles.formGroup}>
                    <input
                    type = "password"
                    name = "password"
                    id = "password"
                    onChange = {this.handleChange}
                    placeholder = "enter password"
                    value = {this.state.password}
                    />
                    <label>password</label>
                    </div>
                    <div className = {Styles.formGroup}>
                    <input
                    type = "name"
                    name = "name"
                    id = "name"
                    onChange = {this.handleChange}
                    placeholder = "Full Name"
                    value = {this.state.name}
                    />
                    <label>full name</label>
                    </div>
                    <button className={Styles.loginBtn} onClick={this.signUp}>Sign Up</button>
                    <button className={Styles.signUpBtn} onClick = {this.goToLogin}>Login</button>
               </div>
               
               }


            </div>
        )
    }
}

export default Login