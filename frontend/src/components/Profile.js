import React from 'react'
import Styles from '../styles/profile.css'
import logo from  '../../assets/muna2.png'
import {RiHomeSmileFill} from 'react-icons/ri'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }




    render() {
        return (
            <div className = {Styles.componentHolder}>

                <div>
                    <img className = {Styles.logo} src = {logo} />
                </div>

                <div className = {Styles.profileHeader}>
                    profile
                </div>

                <div>
                    <p>{this.props.user.name}</p>
                    
                </div>

                <div>
                    <p>email: {this.props.user.email}</p>
                    
                </div>
                <div>
                    <p>{this.props.itemTotal} MunaList Items</p>
                    
                </div>

                <div className={Styles.signOutHldr}>
                    <button onClick={this.props.logout} className={Styles.signOutBtn}>sign out</button>
                    
                </div>

                <div className={Styles.homeHldr}>
                    <button onClick = {this.props.backToHome} className={Styles.homeBtn}><RiHomeSmileFill className={Styles.homeBtnIcon}/></button>
                    
                </div>


            </div>
        )
    }

}

export default Profile;