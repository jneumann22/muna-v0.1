import React from 'react'
import { useState } from 'react';
import logo from  '../../assets/muna2.png'
import Styles from '../styles/indyCategory.css'
import ItemModal from './ItemModal';
import {RiArrowGoBackLine} from 'react-icons/ri'
import { Spring }  from 'react-spring/renderprops'


export default function IndividualCategory (props) {
    console.log(props)
    const [isOpen, setOpen] = useState(false);
    let btn_class = isOpen ? `${Styles.hide}` : `${Styles.goBack}`
    let btn_class_title = isOpen ? `${Styles.hide}` : `${Styles.titlePicture}`
    let btn_class_addHolder = isOpen ? `${Styles.hide}` : `${Styles.addHolder}`
    let myUser = props.user
    let category = props.text

    let backToMainFunction = props.backToMain
    let reloadItems = props.reloadItems
 
    return (
        <div>
         <div className = {Styles.containerLogo}>         
        <img className = {Styles.logo} src = {logo} />
            </div>

            <div className= {Styles.container}>
                <h1 className={Styles.header}>categories</h1>
            </div>

            <div className ={btn_class_title}>
                <img className= {Styles.titleImage} src={props.image}/>
                <p className = {Styles.catHeading}>{props.text}</p>
            </div>

            <div className={btn_class_addHolder}>
                <button onClick = {() => setOpen(!isOpen)} className={Styles.addButton}>Add</button>
               
            </div>
           

            {(isOpen ? 
            <Spring
            from = {{opacity: 0}}
            to = {{opacity: 1}}
            >
                {props => (
                    <div style = {props}>
                        <ItemModal 
                        backToMain = {backToMainFunction} 
                        user = {myUser} 
                        show={isOpen} 
                        close={() => setOpen(!isOpen)}
                        category={category}
                        reloadItems = {reloadItems}
                        /> 
                    </div>
                )}
            
            </Spring>
            : null)}


            <div className={Styles.goBackHolder}>
            <button className={btn_class} onClick = {props.backHome} name="Home"><RiArrowGoBackLine className = {Styles.goBackIcon} /></button>
            </div>

        </div>
    )
}