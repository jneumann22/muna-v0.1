import React from "react"
import logo from "../../assets/muna2.png"
import Styles from "../styles/itemList.css"


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
                HI THERE {props.name}
                {props.items.map((item, index) => (
        <p>Hello, {item.name} from {item.createdAt}</p>
    ))}
            <button onClick={props.toggleItemList}>CLOSE</button>
            </div>
           

        </div>
    )
    }
}
   