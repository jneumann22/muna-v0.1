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

import Workout from '../components/Workout'


class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryPage: "Home"
        }

       this.changePage = this.changePage.bind(this)
    }

    changePage(e) {
        console.log(e.target.name)
        this.setState({
            categoryPage: e.target.name
        })
    }

    render() {
        if (this.state.categoryPage === "Home") {

        
        return (
            <div>
            
            
            <div className = {Styles.containerLogo}>         
        <img className = {Styles.logo} src = {logo} />
            </div>

            <div className= {Styles.container}>
                <h1 className={Styles.header}>categories</h1>
            </div>

            <div className = {Styles.addIcon}>
                <img className = {Styles.addIconImg} src = {add}/>
            </div>

            {/* 6 Icons   */}
            <Spring
            from = {{opacity: 0, marginTop: -1000}}
            to = {{opacity: 1, marginTop: 0}}
            >
                { props => (
                    <div style={props}>
             <div className = {Styles.categoryHolder}>
                <button className={Styles.categoryButton} onClick = {this.changePage} ><img name = "Workout" className = {Styles.catImage} src={workout}/></button>
                <button className={Styles.categoryButton}><img className = {Styles.catImage} src = {workClothes}/></button>
                <button className={Styles.categoryButton}><img className = {Styles.catImage} src = {party}/></button>
                <button className={Styles.categoryButton}><img className = {Styles.catImage} src = {gift}/></button>
                <button className={Styles.categoryButton}><img className = {Styles.catImage} src = {furniture}/></button>
                <button className={Styles.categoryButton}><img className = {Styles.catImage} src = {other}/></button>
            </div>
          </div>
                )}

            </Spring>



            </div>
        )
                } else if (this.state.categoryPage === "Workout") {
                    return (
                        <Spring
                        from = {{marginLeft: -1000}}
                        to = {{marginLeft: 0}}
                        >
                            {props => (
                                <div style = {props}>

                        <div>
                            <Workout text="WORKOUT FOR ME" />
                        </div>

                                </div>
                            )}
                        
                        </Spring>
                    )
                }
    }

}

export default Categories;