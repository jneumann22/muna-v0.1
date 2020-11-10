import React from 'react'
import logo from  '../../assets/muna2.png'
import Styles from '../styles/categories.css'
import add from '../../assets/add-icon.png'
import workout from '../../assets/workout.png'
import workClothes from '../../assets/workClothes.png'
import party  from '../../assets/party.png'
import gift from '../../assets/gift.png'
import furniture from '../../assets/furniture.png'
import other from '../../assets/other.png'
import { Spring }  from 'react-spring/renderprops'
import axios from 'axios';
import fire from '../../config/fire';
import {CgProfile} from 'react-icons/cg'

import IndividualCategory from './IndividualCategory'
import Profile from './Profile';

let localApi = "http://localhost:5000"

class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryPage: "Home",
            user: null,
            items: null,
            noOfItems: 0
        }

       this.changePage = this.changePage.bind(this)
       this.backHome = this.backHome.bind(this)
       this.getUserInfo = this.getUserInfo.bind(this)
       this.getItems = this.getItems.bind(this)
       this.setTotalItems = this.setTotalItems.bind(this)
       this.goToProfile = this.goToProfile.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
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

    changePage(e) {
        console.log(e.target.name)
        this.setState({
            categoryPage: e.target.name
        })
    }

    goToProfile() {
        this.setState({
            categoryPage: "Profile"
        })
    }

    backHome() {
        this.setState({
            categoryPage: "Home"
        })
    }

    render() {
        if (this.state.categoryPage === "Home") {

        
        return (
            <div>
            
            
            <div className = {Styles.containerLogo}>         
        <div className={`${Styles.containerElem}`}/>
        <img className = {`${Styles.containerElem} ${Styles.logo}`}src = {logo} />
                <div className={`${Styles.containerElem}`}><CgProfile onClick={this.goToProfile} className={Styles.profile}/></div>
            </div>

            {/* 6 Icons   */}
            <Spring
            from = {{opacity: 0, marginTop: -1000}}
            to = {{opacity: 1, marginTop: 0}}
            >
                { props => (
                    <div style={props}>
             <div className = {Styles.categoryHolder}>
                <button className={Styles.categoryButton} onClick = {this.changePage} ><img name = "Athleisure" className = {Styles.catImage} src={workout}/></button>
                <button className={Styles.categoryButton}  onClick = {this.changePage}><img name = "Workwear" className = {Styles.catImage} src = {workClothes}/></button>
                <button className={Styles.categoryButton}  onClick = {this.changePage}><img name = "Party" className = {Styles.catImage} src = {party}/></button>
                <button className={`${Styles.categoryButton} ${Styles.categoryButtonBottom}`} onClick = {this.changePage}><img name = "Gifts" className = {Styles.catImage} src = {gift}/></button>
                <button className={`${Styles.categoryButton} ${Styles.categoryButtonBottom}`} onClick = {this.changePage}><img name = "Furniture" className = {Styles.catImage} src = {furniture}/></button>
                <button className={`${Styles.categoryButton} ${Styles.categoryButtonBottom}`} onClick = {this.changePage}><img name = "Other" className = {Styles.catImage} src = {other}/></button>
            </div>
          </div>
                )}

            </Spring>



            </div>
        )
                } else if (this.state.categoryPage === "Athleisure") {
                    return (
                        <Spring
                        from = {{marginLeft: -1000}}
                        to = {{marginLeft: 0}}
                        >
                            {props => (
                                <div style = {props}>

                        <div>
                            <IndividualCategory 
                            backToMain = {this.props.backToHome}
                             backHome={() => this.backHome()} 
                             text="Athleisure" image ={workout} 
                             user={this.props.user} 
                             reloadItems = {this.props.reloadItems}
                             />
                        </div>

                                </div>
                            )}
                        
                        </Spring>
                    )
                } else if (this.state.categoryPage === "Workwear") {
                    return (
                        <Spring
                        from = {{marginLeft: -1000}}
                        to = {{marginLeft: 0}}
                        >
                            {props => (
                                <div style = {props}>

                        <div>
                            <IndividualCategory
                             backToMain = {this.props.backToHome}
                              backHome={() => this.backHome()} 
                              text="Workwear" 
                              image ={workClothes} 
                              user={this.props.user}
                              reloadItems = {this.props.reloadItems}
                              />
                        </div>

                                </div>
                            )}
                        
                        </Spring>
                    )
                }else if (this.state.categoryPage === "Party") {
                    return (
                        <Spring
                        from = {{marginLeft: -1000}}
                        to = {{marginLeft: 0}}
                        >
                            {props => (
                                <div style = {props}>

                        <div>
                            <IndividualCategory 
                            backToMain = {this.props.backToHome}
                             backHome={() => this.backHome()} 
                             text="Going-out" image ={party} 
                             user={this.props.user} 
                             reloadItems = {this.props.reloadItems}
                             />
                        </div>

                                </div>
                            )}
                        
                        </Spring>
                    )
                }else if (this.state.categoryPage === "Gifts") {
                    return (
                        <Spring
                        from = {{marginLeft: -1000}}
                        to = {{marginLeft: 0}}
                        >
                            {props => (
                                <div style = {props}>

                        <div>
                            <IndividualCategory 
                            backToMain = {this.props.backToHome}
                             backHome={() => this.backHome()}
                              text="Gifts" image ={gift}
                               user={this.props.user} 
                               reloadItems = {this.props.reloadItems}
                               />
                        </div>

                                </div>
                            )}
                        
                        </Spring>
                    )
                }else if (this.state.categoryPage === "Furniture") {
                    return (
                        <Spring
                        from = {{marginLeft: -1000}}
                        to = {{marginLeft: 0}}
                        >
                            {props => (
                                <div style = {props}>

                        <div>
                            <IndividualCategory
                             backToMain = {this.props.backToHome}
                              backHome={() => this.backHome()}
                               text="Furniture"
                                image ={furniture} 
                                user={this.props.user}
                                reloadItems = {this.props.reloadItems}
                                />
                        </div>

                                </div>
                            )}
                        
                        </Spring>
                    )
                }else if (this.state.categoryPage === "Other") {
                    return (
                        <Spring
                        from = {{marginLeft: -1000}}
                        to = {{marginLeft: 0}}
                        >
                            {props => (
                                <div style = {props}>

                        <div>
                            <IndividualCategory
                             backToMain = {this.props.backToHome}
                              backHome={() => this.backHome()} 
                              text="Other" 
                              image ={other} 
                              user={this.props.user}
                              reloadItems = {this.props.reloadItems}
                              />
                        </div>

                                </div>
                            )}
                        
                        </Spring>
                    )
                } else if (this.state.categoryPage === "Profile") {
                    return (
                    <Profile user ={this.state.user} itemTotal = {this.state.noOfItems} logout={() => this.logout()} backToHome = {() => this.backHome()}/>
                    )
                }

    }

}

export default Categories;