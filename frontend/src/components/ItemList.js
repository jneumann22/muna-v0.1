import React from "react";
import Styles from "../styles/itemList.css";
import WishListItem from "../helperComponents/WishListItem";
import {GrClose} from 'react-icons/gr'



export default function ItemList(props) {
   
   if (props.items.length < 1) {
       return (
        
             <div className = {Styles.modal_container_empty}>
                 NO {props.name} ITEMS ADDED YET
                 <button onClick={props.toggleItemList}>CLOSE</button>
             </div>

             

     

       )
   } else {

   
    return (
        
        <div className={Styles.modal}>
            <div className = {Styles.modal_container}>
                <p className = {Styles.title}>{props.name}</p>
                <div className = {Styles.cell_container}>
              
                {props.items.map((item, index) => (
                    <WishListItem item = {item}/>
        // <p>Hello, {item.name} from {item.createdAt}</p>
    ))}             
                </div>
            <button onClick={props.toggleItemList} className = {Styles.buttonClose}><GrClose className={Styles.close}/></button>
            </div>
           

        </div>
    )
    }
}
   