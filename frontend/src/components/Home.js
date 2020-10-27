/* global chrome */
import React from "react";
import axios from 'axios';
import fire from '../../config/fire';
import logo from '../../Muna.png';
import ItemModal from './ItemModal';
import Wishlist from './Wishlist'
import ColoredLine from '../helperComponents/ColoredLine';



var localApi = "http://localhost:5000"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            url: "",
            isOpen: false,
            items: [],
            page: "Home",
            activeIndex: 0,
            noItems: false

        }

        this.toggleModal = this.toggleModal.bind(this)
        this.addItem = this.addItem.bind(this)
        this.goToProfile = this.goToProfile.bind(this)
        this.goToHome = this.goToHome.bind(this)
        this.getWishListItems = this.getWishListItems.bind(this)
        this.setNoItemsYetTag = this.setNoItemsYetTag.bind(this)
       
    }

    
    
    componentDidUpdate() {
        this.getWishListItems()

    }

    getWishListItems() {
        axios.get(`${localApi}/getWishList/${this.props.user.uid}`).then((data) => {
            console.log("WHATD WE GET",data)
            if(data.data.data.length < 1) {
                this.setNoItemsYetTag()
            }
            this.setState({
                items: data.data.data
            })
            
        })
    }

    setNoItemsYetTag() {
        this.setState({
            noItems : true
        })
    }

    toggleModal() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout() {
        fire.auth().signOut()
    }

    addItem(name, tags) {
        let newItem = {id: this.state.items.length + 1, name: name}
        let itemList = this.state.items
        itemList.push(newItem)
        this.setState({
            items: itemList
        })

        this.setState({
            noItems: false
        })
        this.toggleModal()

        axios.post(`${localApi}/CreateItem`, {
            uid: this.props.user.uid,
            itemName : name,
            tags: "",
            url: ""
        }).then(res => {
            console.log(res)
        }).catch((err) => {
            console.error(err)
        })

    }

    goToProfile() {
        this.setState({
            page: "Profile"
        })
    }

    goToHome() {
        this.setState({
            page: "Home"
        })
    }
    


    render() {

        if (this.state.page === "Home") {
            return (
                <div>
    
                {/* LOGO HEADER */}
                <div>
                 <img src = {logo} />
                </div>
    
                {/* Modal Open Button */}
                
                <div>
                    <button onClick={this.toggleModal}>
                        Add
                    </button>
               
               {/* Modal  */}
               <ItemModal show={this.state.isOpen}
              onClose={this.toggleModal} add={this.addItem} >
                </ItemModal>
                </div>
    
                <ColoredLine color = "darkslateblue"/>
                {/* Wishlist */}
                <div>
                <Wishlist items = {this.state.items} noItems= {this.state.noItems}/>
                </div>
    
                <ColoredLine color = "darkslateblue" />
                {/* Footer Buttons */}
                <div>
                    <button onClick={this.goToHome}>Home</button>
                    <button onClick={this.goToProfile}>Profile</button>
                </div>
    
    
                </div>
            )
        } else if (this.state.page === "Profile") {
            return (
                <div>

                {/* LOGO HEADER */}
                <div>
                 <img src = {logo} />
                </div>

                <div>
                    This is Profile Section
                </div>

                <div>
                 <button onClick = {this.logout}>Log Out</button>
                </div>

                <ColoredLine color = "darkslateblue" />
                {/* Footer Buttons */}
                <div>
                    <button onClick={this.goToHome}>Home</button>
                    <button onClick={this.goToProfile}>Profile</button>
                </div>

                </div>
            )
        }
        
       
    }
}

export default Home