import React from "react";
import logo from  '../../assets/muna2.png';
import fire from '../../config/fire';
import plus from '../../assets/add-icon.png';
import axios from 'axios';
import profile from '../../assets/profile.png';
import list from '../../assets/list.png';
import styles from '../styles/new.css';
import Categories from '../components/Categories';
import Profile from './Profile';
import ItemList from './ItemList';


let localApi = "http://localhost:5000"

class NewHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: "Home",
            user: null,
            items: null,
            noOfItems: 0

        }

        this.switchToAddPage = this.switchToAddPage.bind(this)
        this.backToHomePage = this.backToHomePage.bind(this)
        this.logout = this.logout.bind(this)
        this.getUserInfo = this.getUserInfo.bind(this)
        this.getItems = this.getItems.bind(this)
        this.switchToProfilePage = this.switchToProfilePage.bind(this)
        this.setTotalItems = this.setTotalItems.bind(this)
        this.switchToListPage = this.switchToListPage.bind(this)
    }

    componentDidMount() {
        console.log("home props", this.props)
        this.getUserInfo(this.props.user.uid)
        this.getItems()
    }

    getUserInfo(id) {
        console.log(id)
        axios.get(`${localApi}/getUserInfo/${id}`).then((data) => {
            console.log('WHATD WE GET', data.data.data[0])
            this.setState({
                user: data.data.data[0]
            })
        })
    }

    getItems() {
        console.log("GET ITEMS CALLED")
        axios.get(`${localApi}/getWishList/${this.props.user.uid}`).then((data) => {
            console.log('Items', data.data)
            this.setState({
                items: data.data.data
            }, this.setTotalItems)
        })
    }

    setTotalItems() {
        console.log(this.state.items.length)
        this.setState({
            noOfItems: this.state.items.length
        })
    }

    logout() {
        fire.auth().signOut()
    }

    switchToProfilePage() {
        this.setState({
            page: "Profile"
        })
    }

    switchToAddPage () {
        this.setState({
            page: "AddItem"
        })
    }

    switchToListPage() {
        this.setState({
            page: "List"
        })
    }

    backToHomePage () {
        console.log("I WAS CALLED")
        this.setState ({
            page: "Home"
        })
    }

    render() {
        if (this.state.page === "Home") {
        return (
            <div>
            
            
        {/* LOGO HEADER */}
            <div className = {styles.containerLogo} >         
        <img className = {styles.logo} src = {logo} />
            </div>

            <div className= {styles.container}>
                <h1 className={styles.header}>home</h1>
            </div>


             {/* Three Buttons */}
             <div className ={styles.homeButtons}>
                 {/* Add Button */}
                <div className = {styles.centered}>
                    <button onClick={this.switchToAddPage} className = {styles.homeButton}><img className = {styles.homeImage} src={plus}></img></button>
                </div>
                
                <div className = {styles.horizontalPlane}>
                {/* List Button */}
                    <div>
                <button onClick = {this.switchToListPage} className = {styles.homeButton}><img className = {styles.homeImage} src={list}></img></button>
                    </div>
               {/* Profile Button */}
                    <div>
                <button onClick = {this.switchToProfilePage} className = {styles.homeButton}><img className = {styles.homeImage} src={profile}></img></button>
                    </div>
                </div>

               
            </div>
            
          



            </div>
        )
        } else if (this.state.page === "AddItem") {
            return (
                <div>
                   <Categories user = {this.props.user} backToHome = {() => this.backToHomePage()} reloadItems = {() => this.getItems()} />
                </div>
            )
        } else if (this.state.page === "Profile") {
            return (
                <Profile user ={this.state.user} itemTotal = {this.state.noOfItems} logout={() => this.logout()} backToHome = {() => this.backToHomePage()}/>
            )
        } else if (this.state.page === "List") {
            return (
            <ItemList />
            )
        }
    }

}

export default NewHome;

