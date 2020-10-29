import React from "react";
import logo from  '../../assets/muna2.png'
import plus from '../../assets/add-icon.png'
import profile from '../../assets/profile.png'
import list from '../../assets/list.png'
import styles from '../styles/new.css'
import Categories from '../components/Categories';




class NewHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: "Home"
        }

        this.switchToAddPage = this.switchToAddPage.bind(this)
    }

    switchToAddPage () {
        this.setState({
            page: "AddItem"
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
                <button className = {styles.homeButton}><img className = {styles.homeImage} src={list}></img></button>
                    </div>
               {/* Profile Button */}
                    <div>
                <button className = {styles.homeButton}><img className = {styles.homeImage} src={profile}></img></button>
                    </div>
                </div>
            </div>
            
          



            </div>
        )
        } else if (this.state.page === "AddItem") {
            return (
                <div>
                   <Categories />
                </div>
            )
        }
    }

}

export default NewHome;