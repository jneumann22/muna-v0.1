import React from 'react';
import Styles from '../styles/listItem2.css'
import { useState } from 'react';


export default function TestTwo (props) {
    const [isOpen, setOpen] = useState(false);


    return (
        <div className = {Styles.holder}>
           
           {/* ROW  */}
            <div className={Styles.main}>
                <div>
                {props.item.name}
                </div>

                <div>
                    <a onClick = {() => setOpen(!isOpen)}> {isOpen ? '-' :'+'} </a>
                </div>
            </div>

        {isOpen ? 
        
        <div className={Styles.second_tab}> 
        <p>{props.item.tags}</p>
        <p>{props.item.createdAt}</p>
        
        </div> 
        
        
        
        
        : 
        <div></div>}

        </div>
    )
}