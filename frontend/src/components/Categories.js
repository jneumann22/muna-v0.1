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
import CategoryButton from '../helperComponents/CategoryButton'
import IndividualCategory from './IndividualCategory'
import Profile from './Profile';
import ItemModal from './ItemModal';
import ItemList from './ItemList';


let localApi = "http://localhost:5000"



class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryPage: "Home",
            user: null,
            items: null,
            noOfItems: 0,
            flipped: false,
            isOpen: false,
            isItemOpen: false,
            category: "",
            filteredItems: []

        }

       this.changePage = this.changePage.bind(this)
       this.backHome = this.backHome.bind(this)
       this.getUserInfo = this.getUserInfo.bind(this)
       this.getItems = this.getItems.bind(this)
       this.setTotalItems = this.setTotalItems.bind(this)
       this.goToProfile = this.goToProfile.bind(this)
       this.toggleModal = this.toggleModal.bind(this)
       this.setCategory = this.setCategory.bind(this)
       this.toggleItemList = this.toggleItemList.bind(this)
       this.filterItems = this.filterItems.bind(this)
       

    }

    
    componentDidMount() {
        console.log(this.props)
        this.getUserInfo(this.props.user.uid)
        
    }

    getUserInfo(id) {
        console.log(id)
        axios.get(`${localApi}/getUserInfo/${id}`).then((data) => {
            console.log('WHATD WE GET', data.data.data[0])
            this.setState({
                user: data.data.data[0]
            }, function () { this.getItems(this.state.user._id) }
            
            )
        })
    }

    getItems(user_id) {
        console.log("GET ITEMS CALLED")
        axios.get(`${localApi}/getWishList/${user_id}`).then((data) => {
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

    setCategory(category) {
        console.log("SET CATEGORY CALLED")
        this.setState({
            category: category
        }, this.filterItems(category))
    }

    filterItems(category) {
        console.log("FILTERED CALLED")
        let items = this.state.items
        const result = items.filter(item => item.category === category);
        this.setState({
            filteredItems: result
        }, function() {console.log("items filtered::", this.state.filteredItems)})
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

    toggleModal() {
        console.log("TOGGLE MODAL PRESSED")
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleItemList() {
        console.log("toggle item pressed")
        this.setState({
            isItemOpen: !this.state.isItemOpen
        })
    }

    render() {
        var holderClass = this.state.isOpen || this.state.isItemOpen ? `${Styles.hide}` : `${Styles.categoryHolder}`
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
             <div className = {holderClass}>
                <CategoryButton number =  {Styles.front1} name = 'athleisure' toggle_item_list  = {this.toggleItemList} openModal = {this.toggleModal} category='Athleisure' setCategory = {this.setCategory}/>
                <CategoryButton number = {Styles.front2} name = 'work clothes'toggle_item_list = {this.toggleItemList} openModal = {this.toggleModal} category='Work Clothes' setCategory = {this.setCategory}/>
                <CategoryButton number = {Styles.front3} name = 'going out'toggle_item_list = {this.toggleItemList} openModal = {this.toggleModal} category='Going Out' setCategory = {this.setCategory}/>
                <CategoryButton number = {Styles.front4} name = 'gifts'toggle_item_list = {this.toggleItemList} openModal = {this.toggleModal} category='Gifts' setCategory = {this.setCategory}/>
                <CategoryButton number = {Styles.front5} name = 'furtniture'toggle_item_list = {this.toggleItemList} openModal = {this.toggleModal} category= 'Furniture' setCategory = {this.setCategory}/>
                <CategoryButton number = {Styles.front6} name = 'other'toggle_item_list = {this.toggleItemList} openModal = {this.toggleModal} category= 'Other' setCategory = {this.setCategory}/>
            </div>
          </div>
                )}

            </Spring>

                {this.state.isOpen ? <ItemModal
                 show = {true}
                  toggleModal = {this.toggleModal} 
                  category={this.state.category}
                  reloadItems = {this.getItems}
                  user = {this.state.user}
                  /> :
                    <div></div>
                }
                {this.state.isItemOpen ? <ItemList
                name = {this.state.category}
                items = {this.state.filteredItems}
                toggleItemList = {this.toggleItemList}
                /> :
                    <div></div>
                }

            </div>
        )
                } else if (this.state.categoryPage === "Profile") {
                    return (
                    <Profile user ={this.state.user} itemTotal = {this.state.noOfItems} logout={() => this.logout()} backToHome = {() => this.backHome()}/>
                    )
                }

    }

}

export default Categories;