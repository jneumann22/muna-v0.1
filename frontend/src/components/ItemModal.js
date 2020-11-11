import React from 'react';
import Styles from '../styles/Modal.css';
import axios from 'axios'
import {GrClose} from 'react-icons/gr'

var localApi = "http://localhost:5000"

class ItemModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemName: "",
            tags: "",
            category: this.props.category,
            success: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.clearState = this.clearState.bind(this)
        this.addItem = this.addItem.bind(this)

    }


    componentDidMount() {
      console.log(this.props)
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    clearState() {
        this.setState({
            itemName: "",
            tags: ""
        })
    }

  


    addItem(name, tags, category) {
      // let newItem = {name: this.state.itemName, tags: this.state.tags, category: this.state.category}
      // let itemList = this.state.items
      // itemList.push(newItem)
      // this.setState({
      //     items: itemList
      // })
      console.log('shmategory', category)

      axios.post(`${localApi}/CreateItem`, {
          uid: this.props.user.uid,
          itemName : name,
          tags: tags,
          url: "",
          category: category
      }).then(res => {
          console.log(res)
          if (res.status === 200) {
            this.setState({
              success: true
            })
          }
      }).catch((err) => {
          console.error(err)
      })

      // this.props.show = !this.props.show
      

  }
    


    render() {
        if (!this.props.show) {
            return null
        }

        
        if(this.props.show && this.state.success === false) {

        
          return (
            <div className={Styles.modal}>
              <div className={Styles.modalContainer}>
                   <div className={Styles.inputHolder}>
                     <div className={Styles.formGroup}>
                       <input 
                       name="itemName"
                       id="itemName"
                      //  placeholder = "Item Name..."
                       onChange = {this.handleChange}
                       value = {this.state.itemName}
                       />
                       <label>Item Name</label>
                       </div>
                       <div className={Styles.formGroup} >
                       <input 
  
                       name="tags"
                       id="tags"
                       placeholder = "(Separate with Comma)"
                       onChange = {this.handleChange}
                       value = {this.state.tags}
                       />
                       <label>Tags</label>
                       </div>
                     </div>  
                    
                   
      
                <div className={Styles.footer}>
                <button className = {Styles.addButton} onClick={() => { this.addItem(this.state.itemName, this.state.tags, this.props.category); this.clearState()}}>Add this Item</button>
                  <button className={Styles.close} onClick={this.props.toggleModal}>
                  <GrClose className = {Styles.goBack} />
                  </button>
                </div>
              </div>
            </div>
          );
        } else if (this.props.show && this.state.success === true) {
          return (
            <div className={Styles.modal}>
              <div className={Styles.modalContainerTwo}>
                <div className= {Styles.successDiv}>
                  <p className = {Styles.successMsg}>The Item was added to your MunaList!</p>
                  <button className = {Styles.successBtn} onClick= {() => {this.props.toggleModal(); this.props.reloadItems()}}>Home</button>
                  </div>     
              
              </div>
            </div>
          )
        }
        }
      }


export default ItemModal;