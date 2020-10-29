import React from 'react';
import Styles from '../styles/Modal.css';



class ItemModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemName: "",
            tags: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.clearState = this.clearState.bind(this)
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
    


    render() {
        if (!this.props.show) {
            return null
        }

        

          return (
            <div className={Styles.modal}>
              <div className={Styles.modal-container}>
                   
                       <input 
                       name="itemName"
                       id="itemName"
                       placeholder = "Item Name..."
                       onChange = {this.handleChange}
                       value = {this.state.itemName}
                       />
                       <input 
                       name="tags"
                       id="tags"
                       placeholder = "Tags to remember (Separate with Comma)"
                       onChange = {this.handleChange}
                       value = {this.state.tags}
                       />
                    <button onClick={() => { this.props.add(this.state.itemName); this.clearState()}}>Add this Item</button>
                   
      
                <div className="footer">
                  <button onClick={this.props.onClose}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          );
        }
      }


export default ItemModal;